"use client"

import { NewsArticle } from "@/models/NewsArticle";
import { Col, Row } from "react-bootstrap";
import NewsArticleEntry from "./NewsArticleEntry";

// Define the props passed down from page.tsx.
interface NewsArticleGridProps {
    articles: NewsArticle[],
}

// NOTE: Articles key has to match the prop passed into the function.
export default function NewsArticleGrid( {articles}: NewsArticleGridProps ) {
    return (
        <Row xs={1} sm={2} x1={3} className="g-4">
            {articles.map((article) => {
                return (
                    <Col key={article.url}>
                        <NewsArticleEntry article={article}/>
                    </Col>
                )
            })}
        </Row>
    )
}