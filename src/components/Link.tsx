import type { ParentProps } from 'solid-js'
import { delayedClick } from '../utils/utils'

export const Link = ({
    href,
    children,
    ...props
}: ParentProps<{ href: string }>) => (
    <a
        {...props}
        onClick={delayedClick(
            () => (window.location.href = href?.toString() ?? '/')
        )}
    >
        {children}
    </a>
)
