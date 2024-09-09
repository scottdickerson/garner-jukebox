import type { ParentProps } from 'solid-js'

import { decades } from '../utils/utils'

const validatePhotoExists = (decade: string, photo: string) => {
    return decades.find(
        ({ decade: existingDecade, photos: existingPhotos }) => {
            return existingDecade === decade && existingPhotos.includes(photo)
        }
    )
}

export interface PhotoDetails extends ParentProps {
    decade: string
    photo: string
    src: string
    caption: string
    lang: string
}

export const PhotoDetails = (props: PhotoDetails) => {
    const nextPhoto = parseInt(props.photo) + 1
    const previousPhoto = parseInt(props.photo) - 1
    return (
        <div class="w-[1250px] h-[1250px] bg-recordSmall bg-cover">
            <div class="flex items-center justify-center h-full">
                <a
                    href={`/${props.lang}/decades/${props.decade}/${previousPhoto}`}
                    class={`text-4xl ${validatePhotoExists(props.decade, previousPhoto.toString()) ? 'text-white' : 'pointer-events-none text-gray-500'}`}
                >
                    Previous
                </a>
                <figure class="flex flex-col items-center">
                    <img src={props.src} alt="photo" />
                    {props.caption && (
                        <figcaption class="text-white mt-2 ">
                            {props.caption}
                        </figcaption>
                    )}
                </figure>
                <a
                    href={`/${props.lang}/decades/${props.decade}/${nextPhoto}`}
                    class={`text-4xl ${validatePhotoExists(props.decade, nextPhoto.toString()) ? 'text-white' : 'pointer-events-none text-gray-500'}`}
                >
                    Next
                </a>
                <a href={`/${props.lang}/select`} class="text-white text-4xl">
                    Back (Language {props.lang})
                </a>
            </div>
        </div>
    )
}
