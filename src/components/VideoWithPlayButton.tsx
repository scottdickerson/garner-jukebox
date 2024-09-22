import { createSignal } from 'solid-js'

export const VideoWithPlayButton = ({ videoUrl }: { videoUrl: string }) => {
    const [isPlaying, setIsPlaying] = createSignal(false)

    return (
        <div class="relative">
            <button onClick={() => setIsPlaying(true)}>
                <img src="/images/PlayVideoButton.svg" />
            </button>
            {isPlaying() && <video src={videoUrl} controls />}
        </div>
    )
}
