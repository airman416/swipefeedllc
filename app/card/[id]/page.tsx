import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

const APP_STORE_URL = 'https://apps.apple.com/us/app/swipefeed/id6739143466'

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.125rem',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  }
}

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
      <div style={styles.container}>
        <h1 style={styles.title}>SwipeFeed Card</h1>
        <p style={styles.text}>Card ID: {params.id}</p>
        <a 
          href={APP_STORE_URL}
          style={styles.button}
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