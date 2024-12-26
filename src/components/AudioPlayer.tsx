import { createEffect, onCleanup } from 'solid-js'

export interface AudioPlayerProps {
    src?: string
}

/**
 * This component finds the previously created audio element and plays it if it's not already playing.
 */
export const AudioPlayer = (props: AudioPlayerProps) => {
    let audioRef: HTMLAudioElement | null = null

    createEffect(() => {
        if (audioRef?.paused) {
            console.log('starting audio', props.src)
            audioRef?.play()
        }
    })

    onCleanup(() => audioRef?.pause())

    return props.src ? (
        // @ts-ignore
        <audio
            ref={(el) => (audioRef = el)}
            src={props.src}
            onPlaying={() => {
                audioRef!.volume = 0.3
            }}
        ></audio>
    ) : undefined
}
