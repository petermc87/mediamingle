"use client"

import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import { Card } from "react-bootstrap";

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
        <a href={url}>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={urlToImage}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    )


}