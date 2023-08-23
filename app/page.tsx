import { NewsArticle } from '@/models/NewsArticle'
import type { Metadata } from 'next'
// import NewsArticleEntry from './components/NewsArticleEntry'
import NewsArticleGrid from './components/NewsArticlesGrid'

// Metadata for this page.
export const metadata: Metadata ={ 
  title: 'Breaking News - NextJS App',
  description: 'home page'
}

export default async function BreakingNewsPage() {
  // Fetch from the API
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_KEY}`, {
    cache:'no-cache',
    next: {
      tags: ["newsArticles"]
    }
  })

  // Store the json data.
  const data = await response.json()

  // Assigning the data to the imported types and making the full data fetch an array type using [].
  const newsArticles: NewsArticle[] = data.articles

  return (
    <>
      <main>
        <h1>Breaking News</h1>
          <br/>
          <br/>
          <br/>
        <NewsArticleGrid articles={newsArticles}/>
      </main>
    </> 
  )
}
