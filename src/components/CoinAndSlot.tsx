import { type ComponentProps } from 'solid-js'
import classNames from 'classnames'

export interface CoinAndSlotProps
    extends Omit<ComponentProps<'div'>, 'onClick'> {
    imageSrc: string
    imageClickedSrc: string
    isClicked: () => boolean
    isCoinHidden: () => boolean
    onClick: ComponentProps<'button'>['onClick']
}
export const CoinAndSlot = ({
    imageSrc,
    imageClickedSrc,
    onClick,
    isClicked = () => false,
    isCoinHidden = () => false,
    ...props
}: CoinAndSlotProps) => {
    return (
        <div
            {...props}
            class="pt-24 relative overflow-hidden flex flex-col items-center w-[432px]"
        >
            <button
                class={classNames(
                    'z-10 translate-y-[-100px] transition-transform duration-1000',
                    { 'translate-y-[178px]': isClicked() },
                    { 'opacity-0': isCoinHidden() }
                )}
                onClick={onClick}
            >
                <img
                    src={isClicked() ? imageClickedSrc : imageSrc}
                    alt="Coin"
                />
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
