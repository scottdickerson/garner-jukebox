export const decades = ['1930s', '1940s', '1950s', '1960s', '1970s']

export const delayedClick = (
    delayedCb: (event: MouseEvent) => void,
    immediateCb: (event: MouseEvent) => void = () => {},
    delay = 3000
) => {
    return (event: MouseEvent) => {
        event.preventDefault()
        immediateCb(event)
        setTimeout(() => {
            delayedCb(event)
        }, delay)
    }
}
