import { CoinAndSlot } from '../components/CoinAndSlot'
import { createSignal } from 'solid-js'
import { delayedClick } from '../utils/utils'

export const AttractScreenCoins = () => {
    const [selectedCoin, setSelectedCoin] = createSignal<
        'english' | 'spanish'
    >()
    let coinSoundRef: HTMLAudioElement | undefined = undefined
    const delayedOnClick = delayedClick(
        (_event, lang) => (window.location.href = `/${lang}/select`),
        () => {},
        2000
    )
    const handleOnClick = (
        event: MouseEvent,
        selectedCoin: 'english' | 'spanish'
    ) => {
        coinSoundRef!.play() // typescript can't figure out this solidJS ref is not null
        delayedOnClick(event, selectedCoin === 'english' ? 'en' : 'es')
        setSelectedCoin(selectedCoin)
    }

    return (
        <>
            <audio id="coinSound" src="/sounds/coin.wav" ref={coinSoundRef} />
            <CoinAndSlot
                imageSrc="/images/Coin.png"
                imageClickedSrc="/images/CoinOnly.png"
                isClicked={() => selectedCoin() === 'english'}
                onClick={(event) => handleOnClick(event, 'english')}
                isCoinHidden={() => selectedCoin() === 'spanish'}
            />
            <CoinAndSlot
                imageSrc="/images/CoinSpanish.png"
                imageClickedSrc="/images/CoinOnlySpanish.png"
                isClicked={() => selectedCoin() === 'spanish'}
                onClick={(event) => handleOnClick(event, 'spanish')}
                isCoinHidden={() => selectedCoin() === 'english'}
            />
        </>
    )
}
