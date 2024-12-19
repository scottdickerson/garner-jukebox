import { createSignal } from 'solid-js'

const calculateProgress = (currentTime?: number, duration?: number) =>
    ((currentTime || 0) / (duration ?? 1)) * 100

export interface VideoPlayerProps {
    src: string
    lang: 'en' | 'es'
    type: 'dance' | 'homeVideo'
}
export const VideoPlayer = (props: VideoPlayerProps) => {
    const [isVideoPlaying, setIsVideoPlaying] = createSignal(true)
    const [videoPlayerRef, setVideoPlayerRef] =
        createSignal<HTMLVideoElement | null>(null)
    const [progress, setProgress] = createSignal(0)
    const [userIsControllingVideo, setUserIsControllingVideo] =
        createSignal(false)

    return (
        <div class="relative">
            <a
                href={`/${props.lang}/videoSelect/${props.type}`}
                class="absolute top-0 right-[-75px] w-14 h-14"
            >
                <img src="/images/CloseButton.svg" alt="Close" />
            </a>
            {!isVideoPlaying() ? (
                <button
                    class="absolute z-10 inset-0 m-auto cursor-pointer flex justify-center items-center w-full h-full"
                    onClick={() => {
                        videoPlayerRef()!.play()
                        setIsVideoPlaying(true)
                    }}
                >
                    <img src="/images/PlayVideoButton.svg" />
                </button>
            ) : null}
            <video
                autoplay
                class="h-[600px]"
                src={props.src}
                ref={setVideoPlayerRef}
                onEnded={() => {
                    setIsVideoPlaying(false)
                }}
                onTimeUpdate={(e) => {
                    if (!userIsControllingVideo()) {
                        setProgress(
                            calculateProgress(
                                e.currentTarget.currentTime,
                                e.currentTarget.duration
                            )
                        )
                    }
                }}
                onClick={() => {
                    if (videoPlayerRef()) {
                        if (videoPlayerRef()!.paused) {
                            setIsVideoPlaying(true)
                            videoPlayerRef()!.play()
                        } else {
                            videoPlayerRef()!.pause()
                            setIsVideoPlaying(false)
                        }
                    }
                }}
            />
            {isVideoPlaying() ? (
                <input
                    class="absolute z-10 bottom-1 left-0 right-0 h-11"
                    type="range"
                    value={progress()}
                    max={100}
                    onTouchStart={() => {
                        setUserIsControllingVideo(true)
                    }}
                    onTouchEnd={() => {
                        setUserIsControllingVideo(false)
                    }}
                    onMouseDown={() => {
                        setUserIsControllingVideo(true)
                    }}
                    onMouseUp={() => {
                        setUserIsControllingVideo(false)
                    }}
                    onChange={(e) => {
                        const newCurrentTime =
                            // @ts-ignore
                            (e.target.value / 100) * videoPlayerRef()!.duration
                        console.log('newCurrentTime', newCurrentTime)
                        if (videoPlayerRef()) {
                            videoPlayerRef()!.currentTime = newCurrentTime
                        }
                    }}
                ></input>
            ) : null}
        </div>
    )
}
