import { type ParentProps, createMemo } from 'solid-js'
import { validateContentExists } from '../utils/utils'
import classNames from 'classnames'

export interface ContentSwitcherProps extends ParentProps {
    lang: string
    contentId: string
    heading?: string
    index: number
    src: string
    caption?: string
    hasPrevious?: boolean
    hasNext?: boolean
    onChangeContent: (index: number) => void
}

export const ContentSwitcher = (props: ContentSwitcherProps) => {
    const previousIndex = createMemo(() => props.index - 1)
    const nextIndex = createMemo(() => props.index + 1)

    return (
        <figure class="flex flex-col w-full items-center">
            <div class="relative w-full flex items-center justify-center">
                <button
                    onClick={() => {
                        console.log('set Previous Content')

                        return props.onChangeContent(previousIndex())
                    }}
                    class={`absolute z-10 left-7 p-8 -translate-y-6 ${validateContentExists(props.contentId, previousIndex()) ? '' : 'pointer-events-none opacity-0'}`}
                >
                    <img
                        class="w-9 h-16"
                        src="/images/PreviousArrow.svg"
                        alt="Previous"
                    />
                </button>

                <img class="h-[488px]" src={props.src} alt={props.caption} />
                <button
                    onClick={() => {
                        console.log('set Next Content')
                        return props.onChangeContent(nextIndex())
                    }}
                    class={`absolute z-10 right-7 p-8 -translate-y-6 ${validateContentExists(props.contentId, nextIndex()) ? '' : 'pointer-events-none opacity-0'}`}
                >
                    <img
                        class="w-9 h-16"
                        src="/images/NextArrow.svg"
                        alt="Next"
                    />
                </button>
            </div>
            {props.caption && (
                <figcaption
                    class={classNames(
                        'text-white max-w-[700px] text-center text-35 leading-45 font-tuffy',
                        { 'text-35': props.lang === 'en' },
                        { 'text-[25px]': props.lang === 'es' }
                    )}
                    innerHTML={props.caption}
                ></figcaption>
            )}
        </figure>
    )
}

export interface ContentDetails extends ContentSwitcherProps {
    title: string
    lang: string
}

export const ContentDetails = (props: ContentDetails) => {
    return (
        <div class="w-[1000px] h-[1000px] bg-recordSmall bg-cover flex items-center flex-col gap-11 pt-20 text-65 leading-77">
            <div class="relative flex flex-col w-full">
                <h1 class="text-white text-center font-pacifico min-h-[77px]">
                    {props.heading ? `${props.heading}:` : null}
                </h1>
                <h2 class="text-white text-center font-pacifico min-h-[77px]">
                    {props.title}
                </h2>
                <a
                    href={`/${props.lang}/select`}
                    class="absolute top-[35%] right-0 w-14 h-14"
                >
                    <img src="/images/CloseButton.svg" alt="Close" />
                </a>
            </div>
            <ContentSwitcher {...props} />
        </div>
    )
}
