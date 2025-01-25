import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const category = process.env.NEXT_PUBLIC_NEWS_CATEGORY
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Latest'

  return (
    <>
      <Head>
        <title>{formattedCategory} News</title>
        <meta name="description" content={`Latest ${formattedCategory.toLowerCase()} news from around the world`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
