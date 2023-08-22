"use client"

import newsSearch from "@/actions/searchNews"
import { NewsArticle } from "@/models/NewsArticle"
import { FormEvent, useState, useTransition } from "react"
import { Form, Button } from "react-bootstrap"


export default function SearchWebPage(){
    // Search results array state. NOTE: The state will map to an array of the newsarticle tupe nothing (null)
    const [ searchResults, setSearchResults ] = useState<NewsArticle[] | null>(null)
    // Status telling the client if it is searching.
    const [ isSearching, setIsSearching ] = useState(false)

    // Event Handler to pass in the query. NOTE: The standard type being passed in for a single element.
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const searchQuery = formData.get('searchquery')?.toString().trim()

        if(searchQuery){
            newsSearch(searchQuery)
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
        </main>
    )
}