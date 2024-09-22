import classNames from 'classnames'
import { decades } from '../data/imageDescriptions'
import { RecordNavItem } from './RecordNavItem'
import { FilmReelNavItem } from './FilmReelNavItem'
import { createSignal } from 'solid-js'

export interface DecadeNavigationProps {
    lang: 'en' | 'es'
}

export const DecadeNavigation = (props: DecadeNavigationProps) => {
    const [isTransitioning, setIsTransitioning] = createSignal(false)
    let recordSoundRef: HTMLAudioElement | undefined = undefined
    return (
        <>
            <nav
                class={classNames('w-full font-pacifico text-65', {
                    'pointer-events-none': isTransitioning(),
                })}
                onClick={() => setIsTransitioning(true)}
            >
                <ul class="flex items-center gap-16">
                    {decades.map(({ decade }, index) => (
                        <RecordNavItem
                            class={classNames(
                                { 'translate-y-4': index % 2 === 0 },
                                { '-translate-y-4': index % 2 === 1 }
                            )}
                            onClick={() => {
                                // recordSoundRef!.play()
                            }}
                            href={`/${props.lang}/decades/${decade}`}
                            shouldPulse={!isTransitioning()}
                        >
                            {decade}
                        </RecordNavItem>
                    ))}
                    <FilmReelNavItem
                        lang={props.lang}
                        shouldPulse={!isTransitioning()}
                    />
                </ul>
            </nav>
            <audio ref={recordSoundRef} src="/sounds/CountryCue.m4a"></audio>
        </>
    )
}
