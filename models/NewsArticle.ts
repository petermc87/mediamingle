// This will be the data structure of the news article, etc.
// Make sure to add a question mark beside imageURL because it can be empty.
export interface NewsArticle {
    author: string,
    source: object,
    title: string,
    description: string,
    content: string,
    url: string,
    urlToImage?: string,
    publishedAt: string,
}

