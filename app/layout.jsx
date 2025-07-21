import GoogleAnalytics from "@components/GoogleAnalytics";

export const metadata = {
  title: 'SwipeFeed',
  description: 'Share and discover stories on SwipeFeed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
} 