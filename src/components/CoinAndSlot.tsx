import { delayedClick } from '../utils/utils'

export const CoinAndSlot = ({ imageSrc }: { imageSrc: string }) => {
    let audioRef: HTMLAudioElement
    return (
        <div class="pt-24 relative overflow-hidden flex flex-col items-center w-[432px]">
            <button
                class="z-10 translate-y-[-100px] focus:translate-y-52 transition-transform duration-1000"
                onClick={(event) => {
                    audioRef?.play()
                    delayedClick(
                        () => (window.location.href = '/select'),
                        2000
                    )(event)
                }}
            >
                <audio ref={audioRef} id="coinSound" src="/sounds/coin.wav" />
                <img src={imageSrc} alt="Coin" />
            </button>
            <img class="bottom-0 absolute" src="/images/Slot.svg" alt="Slot" />
            <img
                class="bottom-[-25px] absolute z-20"
                src="/images/SlotForeground.svg"
                alt="Slot"
            />
        </div>
    )
}
