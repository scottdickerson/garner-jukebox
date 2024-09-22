import { type ParentProps, createMemo } from 'solid-js'
import { validatePhotoExists } from '../utils/utils'

export interface ContentSwitcherProps extends ParentProps {
    decade: string
    index: number
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
                        console.log('set Previous Photo')
                        return props.onChangeContent(previousIndex())
                    }}
                    class={`absolute left-7  w-9 h-16 ${validatePhotoExists(props.decade, previousIndex().toString()) ? '' : 'pointer-events-none opacity-0'}`}
                >
                    <img src="/images/PreviousArrow.svg" alt="Previous" />
                </button>
                <img
                    src={`/images/${props.decade}/${props.decade}-${props.index + 1}.png`}
                    alt={props.caption}
                />
                <button
                    onClick={() => {
                        console.log('set Next Photo')
                        return props.onChangeContent(nextIndex())
                    }}
                    class={`absolute right-7  w-9 h-16 ${validatePhotoExists(props.decade, nextIndex().toString()) ? '' : 'pointer-events-none opacity-0'}`}
                >
                    <img src="/images/NextArrow.svg" alt="Next" />
                </button>
            </div>
            {props.caption && (
                <figcaption
                    class="text-white max-w-[700px] text-center text-35 leading-45 font-tuffy "
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
            <div class="relative ">
                <h1 class="text-white text-center font-pacifico">
                    {`${props.decade}:`}
                </h1>
                <h2 class="text-white text-center font-pacifico">
                    {props.title}
                </h2>
                <a
                    href={`/${props.lang}/select`}
                    class="absolute top-[35%] right-[-300px] w-14 h-14"
                >
                    <img src="/images/CloseButton.svg" alt="Close" />
                </a>
            </div>
            <ContentSwitcher {...props} />
        </div>
    )
}
