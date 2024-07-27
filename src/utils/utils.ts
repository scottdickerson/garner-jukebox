export const decades = ['1930s', '1940s', '1950s', '1960s', '1970s']

export const delayedClick = (cb: () => void, delay = 3000) => {
    return (event: MouseEvent) => {
        event.preventDefault()
        setTimeout(() => {
            cb()
        }, delay)
    }
}
