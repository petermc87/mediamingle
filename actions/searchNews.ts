// TODO: How to get the search query passed in here. --> This is a search feature and not a
// dynamic route, therefore you would not use [] route for this.
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";

export default async function newsSearch(e: String) {
  // Getting the query by field name.
  const searchQuery = e;

  // Returning a status 400 error if there is a request with nothing entered.
  if (!searchQuery) {
    return console.error("Please enter a search query");
  }

  // Fetch via a search query
  try {
    //--> Fetching using just Next. <--//
    // const response = await fetch(
    //   `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEXT_PUBLIC_KEY}`,
    //   {
    //     cache: "no-cache",
    //   }
    // );

    // //--> Fetching using express. - Dev <--//
    // const response = await fetch(
    //   `https://localhost:8080/search/${searchQuery}`,
    //   {
    //     cache: "no-cache",
    //   }
    // );

    //--> Fetching using express. - Production <--//
    const response = await fetch(
      `https://mediamingle.vercel.app/search/${searchQuery}`,
      {
        cache: "no-cache",
      }
    );

    // We get back an array that will contain the news article array.
    const newsResponse: NewsResponse = await response.json();

    // The articles array is destructured into its parts defined in props.
    const searchedArticles: NewsArticle[] = newsResponse.articles;

    return searchedArticles;
  } catch (error) {
    console.error(error);
  }
}
