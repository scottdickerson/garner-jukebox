import { createMemo, createSignal } from 'solid-js'
import { ContentDetails } from './ContentDetails'
import { imageAndVideoContent } from '../data/contentData'
import type { translatedStrings } from '../data/translations'

export interface ContentCarouselProps {
    contentId: string
    lang: keyof typeof translatedStrings
}

export const ContentCarousel = (props: ContentCarouselProps) => {
    const [contentIndex, setContentIndex] = createSignal(0)
    const matchingContent = createMemo(
        () =>
            imageAndVideoContent.find((data) => data.id === props.contentId)
                ?.content?.[contentIndex()]
    )

    return (
        <ContentDetails
            title={
                imageAndVideoContent.find((data) => data.id === props.contentId)
                    ?.title?.[props.lang] ?? ''
            }
            src={matchingContent() ?? ''}
            onChangeContent={(contentIndexData) => {
                console.log('change content', contentIndexData)
                setContentIndex(contentIndexData)
            }}
            heading={
                imageAndVideoContent.find((data) => data.id === props.contentId)
                    ?.heading
            }
            lang={props.lang}
            contentId={props.contentId}
            index={contentIndex()}
            caption={
                imageAndVideoContent.find((data) => data.id === props.contentId)
                    ?.captions?.[contentIndex()][props.lang]
            }
        />
    )
}
