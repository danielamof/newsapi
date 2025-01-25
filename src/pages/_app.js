import '@/styles/globals.css'
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_NEWS_API_URL}?category=${process.env.NEXT_PUBLIC_NEWS_CATEGORY}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data && data.status === "ok" && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          throw new Error("Invalid data format");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the news:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Latest Technology News</h1>
      {loading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <Card key={index} className="p-4">
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  alt={article.title || "No title"}
                  className="w-full h-24 object-cover rounded mb-2"
                />
              ) : (
                <p className="text-gray-500">No image available</p>
              )}
              <CardTitle className="text-lg font-semibold">
                {article.title || "No title available"}
              </CardTitle>
              <CardContent>
                <p className="mb-2 text-sm">{article.description || "No description available."}</p>
                {article.url ? (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Read More</Button>
                  </a>
                ) : (
                  <p className="text-gray-500">No link available</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsApp;
