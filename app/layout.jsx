import '../styles/globals.css';

export const metadata = {
  title: 'Socialnest',
  description: 'Connect brands with influencers',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
