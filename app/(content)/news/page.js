"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState();

  useEffect(() => {
    async function FetchNews() {
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news");
      }

      const newsData = await response.json();

      setIsLoading(false);
      setNews(newsData);
    }

    FetchNews();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <div>
      <h1>News Page</h1>
      {newsContent}
    </div>
  );
}
