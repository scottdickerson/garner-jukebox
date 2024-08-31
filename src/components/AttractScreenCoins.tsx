import { CoinAndSlot, type CoinAndSlotProps } from '../components/CoinAndSlot'
import { createSignal } from 'solid-js'
import { delayedClick } from '../utils/utils'

export const AttractScreenCoins = () => {
    const [selectedCoin, setSelectedCoin] = createSignal<
        'english' | 'spanish'
    >()
    let coinSoundRef: HTMLAudioElement | undefined = undefined
    const delayedOnClick = delayedClick(
        () => (window.location.href = '/select'),
        2000
    )
    const handleOnClick = (
        selectedCoin: 'english' | 'spanish',
        event: MouseEvent
    ) => {
        coinSoundRef!.play() // typescript can't figure out this solidJS ref is not null
        delayedOnClick(event)
        setSelectedCoin(selectedCoin)
    }

    return (
        <>
            <audio id="coinSound" src="/sounds/coin.wav" ref={coinSoundRef} />
            <CoinAndSlot
                imageSrc="/images/Coin.png"
                imageClickedSrc="/images/CoinOnly.png"
                isClicked={() => selectedCoin() === 'english'}
                onClick={(event) => handleOnClick('english', event)}
                isCoinHidden={() => selectedCoin() === 'spanish'}
            />
            <CoinAndSlot
                imageSrc="/images/CoinSpanish.png"
                imageClickedSrc="/images/CoinOnlySpanish.png"
                isClicked={() => selectedCoin() === 'spanish'}
                onClick={(event) => handleOnClick('spanish', event)}
                isCoinHidden={() => selectedCoin() === 'english'}
            />
        </>
    )
}
