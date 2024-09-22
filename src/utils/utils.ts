import { decades } from '../data/imageDescriptions'

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

export const validatePhotoExists = (decade: string, photo: string) => {
    return !!decades.find(
        ({ decade: existingDecade, captions: existingPhotos }) => {
            return (
                existingDecade === decade && existingPhotos?.[parseInt(photo)]
            )
        }
    )
}

export const decadeAudioFiles = decades.map(({ decade }) => ({
    decade,
    audio: `/sounds/${decade}.mp3`,
}))
