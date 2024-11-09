import { decadesPicturesContent } from '../data/contentData'

export const delayedClick = (
    delayedCb: (event: MouseEvent, args?: unknown) => void,
    immediateCb: (event: MouseEvent) => void = () => {},
    delay = 3000
) => {
    return (event: MouseEvent, args?: unknown) => {
        event.preventDefault()
        immediateCb(event)
        setTimeout(() => {
            delayedCb(event, args)
        }, delay)
    }
}

export const validateContentExists = (decade: string, contentIndex: number) => {
    return !!decadesPicturesContent.find(
        ({ id: existingContent, captions: existingCaptions }) => {
            return (
                existingContent === decade && existingCaptions?.[contentIndex]
            )
        }
    )
}

export const decadeAudioFiles = decadesPicturesContent.map(
    ({ id: decade }) => ({
        decade,
        audio: `/sounds/${decade}.mp3`,
    })
)
