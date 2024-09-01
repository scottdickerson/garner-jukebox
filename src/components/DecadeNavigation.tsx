import classNames from 'classnames'
import { decades } from '../utils/utils'
import { Record } from './Record'
import { FilmReel } from './FilmReel'
import { createSignal } from 'solid-js'

export const DecadeNavigation = () => {
    const [isTransitioning, setIsTransitioning] = createSignal(false)
    let recordSoundRef: HTMLAudioElement | undefined = undefined
    return (
        <>
            <nav
                class={classNames('w-full font-pacifico', {
                    'pointer-events-none': isTransitioning(),
                })}
                onClick={() => setIsTransitioning(true)}
            >
                <ul class="flex items-center gap-16">
                    {decades.map((decade, index) => (
                        <Record
                            class={classNames(
                                { 'translate-y-4': index % 2 === 0 },
                                { '-translate-y-4': index % 2 === 1 }
                            )}
                            onClick={() => {
                                recordSoundRef!.play()
                            }}
                            href={`/decades/${decade}`}
                            shouldPulse={!isTransitioning()}
                        >
                            {decade}
                        </Record>
                    ))}
                    <FilmReel shouldPulse={!isTransitioning()} />
                </ul>
            </nav>
            <audio ref={recordSoundRef} src="/sounds/CountryCue.m4a"></audio>
        </>
    )
}
