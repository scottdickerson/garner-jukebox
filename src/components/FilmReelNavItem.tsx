import classNames from 'classnames'
import { createSignal, type ComponentProps } from 'solid-js'
import { Link } from './Link'
import { translatedStrings } from '../data/translations'

export const FilmReelNavItem = (
    props: ComponentProps<'li'> & { shouldPulse: boolean; lang: 'en' | 'es' }
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
                { 'animate-spin': isClicked() }
                // { 'rotate-x-animation': isClicked() }
            )}
            onClick={() => {
                // audioRef!.play()
                setIsClicked(true)
            }}
        >
            <Link
                class="flex flex-col justify-center text-center  w-[285px] h-[285px] bg-cover bg-center bg-filmReel"
                href={`/${props.lang}/videos`}
            >
                {translatedStrings[props.lang].videos}
            </Link>
            <audio ref={audioRef} src="/sounds/film-reel.mp3"></audio>
        </li>
    )
}
