import { NewsArticle, NewsResponse } from "@/models/NewsArticle"
import NewsArticleGrid from "../../components/NewsArticlesGrid"
import styles from '../../page.module.css'

// Passing the headline from the URL into the function and defining prop type.
export default async function getCategoryByHeadline ( { params } : {
    params: { category: string }
}){
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${params.category}&apiKey=${process.env.NEXT_PUBLIC_KEY}`)
    //News response data is an array, with the NewsArticle props contained within the articles array of objects.
    const newsResponse: NewsResponse = await response.json()

    // Targeting only the articles Array. NOTE: CategoryNewsProps already contains the prop types for this i.e. NewsArticles[].
    const catArticles: NewsArticle[] = newsResponse.articles

    return(
        <>
            <main className={styles.homePage}>
                <NewsArticleGrid articles={catArticles}/>
            </main>
        </>
    )
}

