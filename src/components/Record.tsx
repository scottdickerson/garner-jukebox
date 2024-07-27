import { createSignal, type ParentProps } from 'solid-js'

export const Record = ({ children }: ParentProps) => {
    const [isSpinning, setIsSpinning] = createSignal(false)

    return (
        <div
            class={`rounded-full w-52 h-52 place-content-center text-center bg-cover bg-center text-white bg-record ${
                isSpinning() ? 'animate-spin' : ''
            } `}
            onClick={() => {
                const audio = document.getElementById(
                    'record'
                ) as HTMLAudioElement
                audio.play()
                setIsSpinning(true)
            }}
        >
            <audio id="record" src="/sounds/CountryCue.m4a"></audio>
            {children}
        </div>
    )
}
