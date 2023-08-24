"use client"

import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import { Card } from "react-bootstrap";
import placeholderImage from '../../assets/images/placeholder.jpg'
import styles from './NewsArticle.module.css'

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
        <a className={styles.text} href={url}>
            <Card className="h-100">
                {/* Using image component from NextJS to render images quicker. */}
                <Image src={urlToImage || placeholderImage}
                    alt='Container image'
                    width={400}
                    height={200}
                    // Using the custom styling as part of the Card.Image bootstrap styling.
                    className={`card-img-top ${styles.image}`}
                />
                <Card.Body style={{cursor:"pointer"}} className={styles.card} >
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
    )


}