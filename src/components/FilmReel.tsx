import classNames from 'classnames'
import { createSignal, type ComponentProps } from 'solid-js'
import { Link } from './Link'

export const FilmReel = (
    props: ComponentProps<'li'> & { shouldPulse: boolean }
) => {
    const [isClicked, setIsClicked] = createSignal(false)
    let audioRef: HTMLAudioElement | undefined = undefined
    return (
        <li
            {...props}
            class={classNames(
                props.class,
                {
                    'animate__animated animate__pulse animate__infinite animate__slow':
                        props.shouldPulse,
                },
                'ml-auto',
                { 'rotate-x-animation': isClicked() }
            )}
            onClick={() => {
                audioRef!.play()
                setIsClicked(true)
            }}
        >
            <Link
                class="flex flex-col justify-center text-center  w-[350px] h-[350px] bg-cover bg-center bg-filmReel"
                href="/videos"
            >
                Videos
            </Link>
            <audio ref={audioRef} src="/sounds/film-reel.mp3"></audio>
        </li>
    )
}
