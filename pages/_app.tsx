import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='font-urban'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        <link rel="icon" type="image/x-icon" href="/sidekicks.png" />
        <link rel="shortcut icon" href="/sidekicks.png" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sk1122_" />
        <meta name="twitter:creator" content="@sk1122_" />
        <meta property="og:url" content="https://side-kicks.xyz" />
        <meta property="og:title" content="Sidekicks - Buidl, Share, Earn" />
        <meta property="og:description" content="A New way of launching Projects and getting Incentivized for it. Create a project - Share with everyone - Project belivers will give you crypto kicks and share you the inputs" />
        <meta property="og:image" content="/og.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
