export interface VideoSelectOption {
    imageSrc: string
    href: string
}

export interface VideoSelectionProps {
    videoImages: VideoSelectOption[]
    lang: 'en' | 'es'
}

export const VideoSelection = (props: VideoSelectionProps) => {
    return (
        <div class="grid grid-cols-2 relative">
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
                        class="w-full object-cover"
                    />
                </a>
            ))}
        </div>
    )
}
