import InfoSection from "@/app/components/InfoSection";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import { Metadata } from "next";
import { revalidateTag } from "next/cache";
import NewsArticleGrid from "../../components/NewsArticlesGrid";
import styles from "../../page.module.css";

// Metadata for this page.
export const metadata: Metadata = {
  title: "Categories - Media Mingle",
  description: "categories page",
};

const info =
  "The category chosen works just like the search query by filtering out related articles.";

// Passing the headline from the URL into the function and defining prop type.
export default async function getCategoryByHeadline({
  params,
}: {
  params: { category: string };
}) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${params.category}&apiKey=${process.env.NEXT_PUBLIC_KEY}`,
    {
      cache: "no-cache",
      // For auto update.
      next: {
        tags: ["articles"],
      },
    }
  );
  //News response data is an array, with the NewsArticle props contained within the articles array of objects.
  const newsResponse: NewsResponse = await response.json();

  // Targeting only the articles Array. NOTE: CategoryNewsProps already contains the prop types for this i.e. NewsArticles[].
  const catArticles: NewsArticle[] = newsResponse.articles;

  // Title for this category selection.
  const title = `Category: ${params.category}`;

  // Will update the list without hitting refresh.
  revalidateTag("articles");

  return (
    <>
      <main className={styles.homePage}>
        <h1>{title}</h1>
        <InfoSection info={info} />
        <NewsArticleGrid articles={catArticles} />
      </main>
    </>
  );
}
