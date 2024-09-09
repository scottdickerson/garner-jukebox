import type { ComponentProps, ParentProps } from 'solid-js'
import { delayedClick } from '../utils/utils'
import classNames from 'classnames'

export const Link = (
    props: ParentProps<
        ComponentProps<'a'> & { onClick?: (event: MouseEvent) => void }
    >
) => (
    <a
        {...props}
        class={classNames(props.class, 'cursor-pointer block')}
        onClick={delayedClick(
            () => (window.location.href = props.href?.toString() ?? '/'),
            (event) => props.onClick?.(event),
            1000
        )}
    >
        {props.children}
    </a>
)
