import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import ScrollReveal from "@/components/ScrollReveal"
import { getPlaylistVideos } from "@/lib/youtube"
import type { YouTubeVideo } from "@/lib/youtube"

export default function Youtube() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      try {
        setIsLoading(true)
        const data = await getPlaylistVideos()
        setVideos(data.items)
      } catch (err) {
        setError('Failed to load videos')
        console.error('Error fetching videos:', err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchVideos()
  }, [])

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          Loading videos...
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 text-center text-red-500">
          {error}
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-10 text-center">&gt; Latest Videos</h2>
        </ScrollReveal>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.snippet.resourceId.videoId} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-blue-400 transition-transform hover:scale-105">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Image
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        width={320}
                        height={180}
                        className="w-full object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold line-clamp-2">{video.snippet.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                          {new Date(video.snippet.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}