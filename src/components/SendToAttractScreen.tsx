import { createEffect, onCleanup } from 'solid-js'

export interface SendToAttractScreenProps {
    timeoutInMs?: number
}

export const SendToAttractScreen = (props: SendToAttractScreenProps) => {
    const createTimer = () =>
        setInterval(() => {
            if (typeof window !== 'undefined') window.location.href = '/'
        }, props.timeoutInMs ?? 30000)

    let redirectTimer = createTimer()

    const clickListener = () => {
        clearInterval(redirectTimer)
        redirectTimer = createTimer()
    }

    createEffect(() => {
        window.addEventListener('mousedown', clickListener)
        onCleanup(() => {
            window.removeEventListener('mousedown', clickListener)
            clearInterval(redirectTimer)
        })
    })

    return null
}
