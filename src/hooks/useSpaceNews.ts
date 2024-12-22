import { useState, useEffect } from 'react';
import { SpaceNewsItem } from '../types/news';

export function useSpaceNews() {
  const [news, setNews] = useState<SpaceNewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=5');
        const data = await response.json();
        setNews(data.results.map((item: any) => ({
          id: item.id,
          title: item.title,
          summary: item.summary,
          url: item.url,
          publishedAt: item.published_at,
          source: item.news_site
        })));
      } catch (error) {
        console.error('Error fetching space news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return { news, loading };
}