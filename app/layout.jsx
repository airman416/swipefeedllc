// Google Analytics is injected directly in the <head> below

export const metadata = {
  title: 'SwipeFeed',
  description: 'Share and discover stories on SwipeFeed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BVJ7ZEVTRJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BVJ7ZEVTRJ');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
} 