import type { ParentProps } from 'solid-js'
import { validatePhotoExists } from '../utils/utils'

export interface PhotoSwitcherProps extends ParentProps {
    decade: string
    photo: string
    lang: string
    caption?: string
}

export const PhotoSwitcher = (props: PhotoSwitcherProps) => {
    const nextPhoto = parseInt(props.photo) + 1
    const previousPhoto = parseInt(props.photo) - 1
    return (
        <figure class="flex flex-col w-full items-center">
            <div class="relative w-full flex items-center justify-center">
                <a
                    href={`/${props.lang}/decades/${props.decade}/${previousPhoto}`}
                    class={`absolute left-7  w-9 h-16 ${validatePhotoExists(props.decade, previousPhoto.toString()) ? '' : 'pointer-events-none opacity-0'}`}
                >
                    <img src="/images/PreviousArrow.svg" alt="Previous" />
                </a>
                <img
                    src={`/images/${props.decade}/${props.decade}-${props.photo}.png`}
                    alt={props.caption}
                />
                <a
                    href={`/${props.lang}/decades/${props.decade}/${nextPhoto}`}
                    class={`absolute right-7  w-9 h-16 ${validatePhotoExists(props.decade, nextPhoto.toString()) ? '' : 'pointer-events-none opacity-0'}`}
                >
                    <img src="/images/NextArrow.svg" alt="Next" />
                </a>
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

export interface PhotoDetails extends PhotoSwitcherProps {
    title: string
}

export const PhotoDetails = (props: PhotoDetails) => {
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
            <PhotoSwitcher {...props} />
        </div>
    )
}
