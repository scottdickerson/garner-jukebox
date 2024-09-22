import { createSignal } from 'solid-js'
import { ContentDetails } from './PhotoDetails'
import { decades } from '../data/imageDescriptions'
import type { translatedStrings } from '../data/translations'

export interface ContentCarouselProps {
    decade: string
    lang: keyof typeof translatedStrings
}

export const ContentCarousel = (props: ContentCarouselProps) => {
    const [contentIndex, setContentIndex] = createSignal(0)

    return (
        <ContentDetails
            title={
                decades.find((data) => data.decade === props.decade)?.title?.[
                    props.lang
                ] ?? ''
            }
            onChangeContent={(contentIndexData) => {
                console.log('change content', contentIndexData)
                setContentIndex(contentIndexData)
            }}
            lang={props.lang}
            decade={props.decade}
            index={contentIndex()}
            caption={
                decades.find((data) => data.decade === props.decade)
                    ?.captions?.[contentIndex()][props.lang]
            }
        />
    )
}
