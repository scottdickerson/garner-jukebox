interface VideoSelectionProps {
    videoImages: string[]
    lang: 'en' | 'es'
}

export const VideoSelection = ({ videoImages, lang }: VideoSelectionProps) => {
    return (
        <div class="grid grid-cols-2">
            {videoImages.map((videoImage, index) => (
                <a href={videoImage.replace('.png', '')}>
                    <img
                        src={`/images/videos/${lang}/${videoImage}`}
                        alt="video"
                        class="w-full object-cover"
                    />
                </a>
            ))}
        </div>
    )
}
