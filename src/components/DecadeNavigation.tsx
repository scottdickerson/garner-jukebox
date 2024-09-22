import classNames from 'classnames'
import { imageAndVideoContent, VIDEOS } from '../data/contentData'
import { RecordNavItem } from './RecordNavItem'
import { FilmReelNavItem } from './FilmReelNavItem'
import { createSignal } from 'solid-js'

export interface ContentNavigationProps {
    lang: 'en' | 'es'
}

export const ContentNavigation = (props: ContentNavigationProps) => {
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
                    {imageAndVideoContent.map(({ id }, index) =>
                        id !== VIDEOS ? (
                            <RecordNavItem
                                class={classNames(
                                    { 'translate-y-4': index % 2 === 0 },
                                    { '-translate-y-4': index % 2 === 1 }
                                )}
                                onClick={() => {
                                    // recordSoundRef!.play()
                                }}
                                href={`/${props.lang}/decades/${id}`}
                                shouldPulse={!isTransitioning()}
                            >
                                {id}
                            </RecordNavItem>
                        ) : (
                            <FilmReelNavItem
                                lang={props.lang}
                                shouldPulse={!isTransitioning()}
                            />
                        )
                    )}
                </ul>
            </nav>
            <audio ref={recordSoundRef} src="/sounds/CountryCue.m4a"></audio>
        </>
    )
}
