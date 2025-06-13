import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const APP_STORE_URL = 'https://apps.apple.com/us/app/swipefeed/id6739143466'

export function generateMetadata({ params }) {
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

export default function CardPage({ params }) {
  try {
    const headersList = headers()
    const userAgent = headersList.get('user-agent') || ''
    
    // Don't redirect Apple's crawler
    if (!userAgent.includes('com.apple.webcrawler')) {
      redirect(APP_STORE_URL)
    }

    // Optional: Validate the card ID format
    if (!/^[a-zA-Z0-9-]+$/.test(params.id)) {
      redirect(APP_STORE_URL)
    }

    // This part will only be reached by Apple's crawler
    return (
      <div>
        <h1>SwipeFeed Card</h1>
        <p>Card ID: {params.id}</p>
      </div>
    )
  } catch (error) {
    console.error('Error in CardPage:', error)
    redirect(APP_STORE_URL)
  }
} 