import Image from "next/image"

interface ProfileImageProps {
  src: string
  alt: string
}

const ProfileImage = ({ src, alt }: ProfileImageProps) => (
  <div className="mb-6 relative w-40 h-40 mx-auto">
    <Image
      src={src}
      alt={alt}
      width={160}
      height={160}
      className="rounded-lg border-2 border-gray-300 dark:border-blue-400"
      priority
    />
  </div>
)

export default ProfileImage
