import { createEffect, onCleanup } from 'solid-js'

export interface SendToAttractScreenProps {
    timeoutInMs?: number
}

export const SendToAttractScreen = (props: SendToAttractScreenProps) => {
    const createTimer = () =>
        setTimeout(() => {
            if (typeof window !== 'undefined') window.location.href = '/'
        }, props.timeoutInMs ?? 65000)

    let redirectTimer = createTimer()

    const clickListener = () => {
        clearTimeout(redirectTimer)
        redirectTimer = createTimer()
    }

    createEffect(() => {
        window.addEventListener('mousedown', clickListener)
        onCleanup(() => {
            window.removeEventListener('mousedown', clickListener)
            clearTimeout(redirectTimer)
        })
    })

    return null
}
