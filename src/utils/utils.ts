export const decades = [
    {
        decade: '1930s',
        photos: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    {
        decade: '1940s',
        photos: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    {
        decade: '1950s',
        photos: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    {
        decade: '1960s',
        photos: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    {
        decade: '1970s',
        photos: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
]

export const translatedStrings = {
    en: {
        previous: 'Previous',
        next: 'Next',
        back: 'Back',
        garnerDescription: `Each summer night, Garner comes alive at the Pavilion. For
                decades, it has been the scene of a legendary dance party. And
                everyone is invited!`,
        videos: 'Videos',
    },
    es: {
        previous: 'Anterior',
        next: 'Siguiente',
        back: 'Atrás',
        garnerDescription: `Cada noche de verano, Garner cobra vida en el Pabellón. Durante
                décadas, ha sido el escenario de una legendaria fiesta de baile. ¡Y
                todos están invitados!`,
        videos: 'Videos',
    },
}

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
