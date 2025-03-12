const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const PLAYLIST_ID = 'UUX6OQ3DkcsbYNE6H8uQQuVA'
const MAX_RESULTS = 10

export interface YouTubeVideo {
  id: string
  snippet: {
    title: string
    description: string
    thumbnails: {
      default: { url: string, width: number, height: number }
      medium: { url: string, width: number, height: number }
      high: { url: string, width: number, height: number }
    }
    publishedAt: string
    resourceId: {
      videoId: string
    }
  }
}

export interface PlaylistResponse {
  items: YouTubeVideo[]
  nextPageToken?: string
}

export async function getPlaylistVideos() {
  if (!YOUTUBE_API_KEY) {
    throw new Error('YouTube API key is not configured')
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API_KEY}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch playlist data')
    }

    const data: PlaylistResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching playlist videos:', error)
    throw error
  }
}