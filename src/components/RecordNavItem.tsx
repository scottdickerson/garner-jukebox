import { createSignal, type ComponentProps, type ParentProps } from 'solid-js'
import classNames from 'classnames'
import { Link } from './Link'

export const RecordNavItem = (
    props: ParentProps<
        {
            onClick: (event: MouseEvent) => void
            href: string
            shouldPulse: boolean
        } & ComponentProps<'li'>
    >
) => {
    const [isSpinning, setIsSpinning] = createSignal(false)

    return (
        <li {...props} class={classNames(props.class)}>
            <Link
                class={classNames(
                    'flex flex-col items-center justify-center rounded-full w-[200px] h-[200px] place-content-center text-center bg-cover bg-center bg-recordSmall',
                    {
                        'animate-spin': isSpinning(),
                        'animate__animated animate__pulse animate__infinite animate__slow':
                            props.shouldPulse,
                    }
                )}
                href={props.href}
                onClick={(event: MouseEvent) => {
                    setIsSpinning(true)
                    if (props.onClick) {
                        props.onClick(event)
                    }
                }}
            >
                {props.children}
            </Link>
        </li>
    )
}
