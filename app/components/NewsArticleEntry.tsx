import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";

// Create an interface that inherits the newsArticle prop types for the article key.
interface NewsArticleEntry{
    article: NewsArticle
}

// Export the component with the destructured props and the assigned types.
export default function NewsArticleEntry({article: { title, description, author, publishedAt, urlToImage, url}}: NewsArticleEntry){
    // Checking if the image is a url or not.
    if (urlToImage?.startsWith('https://') || urlToImage?.startsWith('http://')){
        urlToImage
    }
    else {
        undefined
    }

    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            {author}
            <br/>
            visit: {url}
        </>
    )


}