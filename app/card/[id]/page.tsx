import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

const APP_STORE_URL = 'https://apps.apple.com/us/app/swipefeed/id6739143466'

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  return {
    title: 'Check out this story on SwipeFeed',
    description: 'View this interesting story in the SwipeFeed app',
    openGraph: {
      title: 'Check out this story on SwipeFeed',
      description: 'View this interesting story in the SwipeFeed app',
      url: `https://swipefeed.live/card/${params.id}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Check out this story on SwipeFeed',
      description: 'View this interesting story in the SwipeFeed app',
    },
  }
}

export default async function CardPage({ params }: { params: { id: string } }) {
  try {
    const headersList = headers()
    const userAgent = headersList.get('user-agent') || ''
    
    if (!userAgent.includes('com.apple.webcrawler')) {
      redirect(APP_STORE_URL)
    }

    // Validate the card ID format
    if (!/^[a-zA-Z0-9-]+$/.test(params.id)) {
      redirect(APP_STORE_URL)
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">SwipeFeed Card</h1>
        <p className="text-lg mb-8">Card ID: {params.id}</p>
        <a 
          href={APP_STORE_URL}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View in SwipeFeed App
        </a>
      </div>
    )
  } catch (error) {
    console.error('Error in CardPage:', error)
    redirect(APP_STORE_URL)
  }
} 