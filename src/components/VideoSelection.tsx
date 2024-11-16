export interface VideoSelectOption {
    imageSrc: string
    href: string
}

export interface VideoSelectionProps {
    videoImages: VideoSelectOption[]
    lang: 'en' | 'es'
    videoType: 'homeVideo' | 'dance'
}

export const VideoSelection = (props: VideoSelectionProps) => {
    return (
        <div class="flex items-center gap-10">
            <a
                class={
                    props.videoType === 'dance'
                        ? 'invisible pointer-events-none'
                        : ''
                }
                href={`/${props.lang}/videoSelect/dance`}
            >
                <img src="/images/PreviousArrow.svg" alt="Dance Floor Videos" />
            </a>
            <div class="grid grid-cols-2 relative gap-x-6 gap-y-10">
                <a
                    href={`/${props.lang}/select`}
                    class="absolute top-0 right-[-100px] w-14 h-14"
                >
                    <img src="/images/CloseButton.svg" alt="Close" />
                </a>
                {props.videoImages.map(({ imageSrc, href }) => (
                    <a href={href}>
                        <img
                            src={`/images/videos/${props.lang}/${imageSrc}`}
                            alt="video"
                            class="w-[521px] object-cover"
                        />
                    </a>
                ))}
            </div>
            <a
                href={`/${props.lang}/videoSelect/homeVideo`}
                class={
                    props.videoType === 'homeVideo'
                        ? 'invisible pointer-events-none'
                        : ''
                }
            >
                <img src="/images/NextArrow.svg" alt="Home Videos" />
            </a>
        </div>
    )
}
