"use client"

import styles from '../page.module.css'
import newsSearch from "@/actions/searchNews"
import { NewsArticle } from "@/models/NewsArticle"
import { FormEvent, useState } from "react"
import { Form, Button, Spinner } from "react-bootstrap"
import Head from "next/head"
import NewsArticleGrid from '../components/NewsArticlesGrid'
import InfoSection from '../components/InfoSection'

const info = "Search will take your query and find the best available match form the live incoming news"

export default function SearchWebPage(){
    // Search results array state. NOTE: The state will map to an array of the newsarticle tupe nothing (null)
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null | void>(null)
    // Status telling the client if it is searching.
    const [isSearching, setIsSearching] = useState(false)
    // Error
    const [isSearchingError, setIsSearchingError] = useState(false)


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
        <>
            <Head>
                <title key='title'>Media Mingle - Search News!</title>
            </Head>
            <main className={styles.homePage}>
                <h1>Search News</h1>
                <InfoSection info={info}/>
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
                <div className="d-flex flex-colimn align-items-center">
                    {isSearching && <Spinner animation="border"/>}
                    {isSearchingError && <p>Oh no! Something went wrong :-(. Please try again</p>}
                    {searchResults?.length === 0 && <p>Nothing found. Please try again</p>}
                    <>
                        <NewsArticleGrid articles={searchResults} />
                    </>
                </div>
            </main>
        </>
    )
}