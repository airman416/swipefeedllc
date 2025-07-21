import Script from "next/script";

export const metadata = {
  title: 'SwipeFeed',
  description: 'Share and discover stories on SwipeFeed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BVJ7ZEVTRJ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BVJ7ZEVTRJ');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
} 