// TODO: How to get the search query passed in here. --> This is a search feature and not a 
// dynamic route, therefore you would not use [] route for this.
import { NewsResponse } from "@/models/NewsArticle"
// import NEWS_API_KEY from '/.env'

export default async function newsSearch (e: String) {
  
    // Getting the query by field name.
    const searchQuery = e

    // Returning a status 400 error if there is a request with nothing entered.
    if(!searchQuery){
        return console.error('Please enter a search query')
    }

    // Fetch via a search query
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEXT_PUBLIC_KEY}`)
        const newsResponse: NewsResponse = await response.json()
        return newsResponse.articles
    } catch (error) {
        console.error(error)
    }

}