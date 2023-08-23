"use client"

import newsSearch from "@/actions/searchNews"
import { NewsArticle, NewsResponse } from "@/models/NewsArticle"
import { FormEvent, useState } from "react"
import { Form, Button, Spinner, Row, Col } from "react-bootstrap"
import NewsArticleGrid from "../components/NewsArticlesGrid"
import NewsArticleEntry from "../components/NewsArticleEntry"


export default function SearchWebPage(){
    // Search results array state. NOTE: The state will map to an array of the newsarticle tupe nothing (null)
    const [ searchResults, setSearchResults ] = useState<NewsArticle[] | null | void>(null)
    // Status telling the client if it is searching.
    const [ isSearching, setIsSearching ] = useState(false)
    // Error
    const [ isSearchingError, setIsSearchingError ] = useState(false)


    // Event Handler to pass in the query. NOTE: The standard type being passed in for a single element.
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const searchQuery = formData.get('searchquery')?.toString().trim()
       
        if(searchQuery){
            try {
                setSearchResults(null)
                setIsSearching(true)
                setIsSearchingError(false)
                const articles = await newsSearch(searchQuery)
                setSearchResults(articles)
   
            } catch (error) {
                console.error(error)
                setIsSearchingError(true)
            // This is so that the loading icon disappears even if we find data or theres an error.
            } finally {
                setIsSearching(false)
            }
        }
    }

    return (
        <main>
            <h1>Search News</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId="search-input">
                    <Form.Label>Search query</Form.Label>
                    <Form.Control
                        name='searchquery'
                        placeholder="E.g. politics, sports, ..."
                    />
                </Form.Group>
                <Button type="submit" className="mb-3" disabled={isSearching}>{isSearching ? "Searching..." : "Search"}</Button>
            </Form>
            {/* {isSearchingError? "Error, please try again": ''} */}
            {/* {searchResults ? searchResults.map((result) => {
                return (
                    <div>{result.title}</div>
                )
            }): ''} */}
            <div className="d-flex flex-colimn align-items-center">
                {isSearching && <Spinner animation="border"/>}
                {isSearchingError && <p>Oh no! Something went wrong :-(. Please try again</p>}
                {searchResults?.length === 0 && <p>Nothing found. Please try again</p>}
                {/* {searchResults && <NewsArticleGrid articles={search}/>} */}
                <>
                    {searchResults ?
                        <>            
                            <Row xs={1} sm={2} x1={3} className="g-4">
                                {searchResults.map((article) => {
                                    return (
                                        <Col key={article.url}>
                                            <NewsArticleEntry article={article}/>
                                        </Col>
                                    )
                                }
                                )}
                            </Row>
                        </>
                    : ''}
                </>
            </div>

        </main>
    )
}