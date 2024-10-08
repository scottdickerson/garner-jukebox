import {
    type ParentProps,
    createEffect,
    createMemo,
    createSignal,
} from 'solid-js'
import { validateContentExists } from '../utils/utils'
import { VIDEOS } from '../data/contentData'

export interface ContentSwitcherProps extends ParentProps {
    contentId: string
    heading?: string
    index: number
    src: string
    caption?: string
    hasPrevious?: boolean
    hasNext?: boolean
    onChangeContent: (index: number) => void
}

export const ContentSwitcher = (props: ContentSwitcherProps) => {
    const previousIndex = createMemo(() => props.index - 1)
    const nextIndex = createMemo(() => props.index + 1)

    const [isVideoPlaying, setIsVideoPlaying] = createSignal(false)
    const isImage = createMemo(() => props.src?.includes('.png'))
    const [videoState, setVideoState] = createSignal<HTMLVideoElement | null>(
        null
    )

    const [currentProgress, setCurrentProgress] = createSignal(0)

    createEffect(() => {
        const video = videoState()
        if (video) {
            const updateProgress = () => {
                setCurrentProgress(
                    (video.currentTime /
                        (!Number.isNaN(video.duration) ? video.duration : 1)) *
                        100
                )
            }
            video.addEventListener('timeupdate', updateProgress)
            return () => {
                video.removeEventListener('timeupdate', updateProgress)
            }
        }
    })

    return (
        <figure class="flex flex-col w-full items-center">
            <div class="relative w-full flex items-center justify-center">
                <button
                    onClick={() => {
                        console.log('set Previous Content')
                        setIsVideoPlaying(false)
                        return props.onChangeContent(previousIndex())
                    }}
                    class={`absolute z-10 left-7  w-9 h-16 ${validateContentExists(props.contentId, previousIndex()) ? '' : 'pointer-events-none opacity-0'}`}
                >
                    <img src="/images/PreviousArrow.svg" alt="Previous" />
                </button>
                {isImage() ? (
                    <img src={props.src} alt={props.caption} />
                ) : (
                    <div class="relative">
                        {!isVideoPlaying() ? (
                            <button
                                class="absolute z-10 inset-0 m-auto cursor-pointer flex justify-center items-center w-full h-full"
                                onClick={() => {
                                    videoState()!.play()
                                    setIsVideoPlaying(true)
                                }}
                            >
                                <img src="/images/PlayVideoButton.svg" />
                            </button>
                        ) : null}
                        <video
                            class="h-[410px]"
                            src={props.src}
                            ref={setVideoState}
                            onClick={() => {
                                if (videoState()) {
                                    if (videoState()!.paused) {
                                        setIsVideoPlaying(true)
                                        videoState()!.play()
                                    } else {
                                        videoState()!.pause()
                                        setIsVideoPlaying(false)
                                    }
                                }
                            }}
                        />
                        {isVideoPlaying() ? (
                            <input
                                class="absolute z-10 bottom-1 left-0 right-0 h-11"
                                type="range"
                                value={currentProgress()}
                                max={100}
                                onChange={(e) => {
                                    if (videoState()) {
                                        videoState()!.currentTime =
                                            // @ts-ignore
                                            (e.target.value / 100) *
                                            videoState()!.duration
                                    }
                                }}
                            ></input>
                        ) : null}
                    </div>
                )}
                <button
                    onClick={() => {
                        console.log('set Next Content')
                        setIsVideoPlaying(false)
                        return props.onChangeContent(nextIndex())
                    }}
                    class={`absolute z-10 right-7  w-9 h-16 ${validateContentExists(props.contentId, nextIndex()) ? '' : 'pointer-events-none opacity-0'}`}
                >
                    <img src="/images/NextArrow.svg" alt="Next" />
                </button>
            </div>
            {props.caption && (
                <figcaption
                    class={`text-white max-w-[700px] text-center text-35 leading-45 font-tuffy ${!isImage() ? 'mt-12' : ''}`}
                    innerHTML={props.caption}
                ></figcaption>
            )}
        </figure>
    )
}

export interface ContentDetails extends ContentSwitcherProps {
    title: string
    lang: string
}

export const ContentDetails = (props: ContentDetails) => {
    return (
        <div
            class={`w-[1000px] h-[1000px] ${props.contentId !== VIDEOS ? 'bg-recordSmall' : 'bg-filmReelLarge'} bg-cover flex items-center flex-col gap-11 pt-20 text-65 leading-77`}
        >
            <div class="relative flex flex-col w-full">
                <h1 class="text-white text-center font-pacifico min-h-[77px]">
                    {props.heading && props.contentId !== VIDEOS
                        ? `${props.heading}:`
                        : ''}
                </h1>
                <h2 class="text-white text-center font-pacifico min-h-[77px]">
                    {props.title}
                </h2>
                <a
                    href={`/${props.lang}/select`}
                    class="absolute top-[35%] right-0 w-14 h-14"
                >
                    <img src="/images/CloseButton.svg" alt="Close" />
                </a>
            </div>
            <ContentSwitcher {...props} />
        </div>
    )
}
