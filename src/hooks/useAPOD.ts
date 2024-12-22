import { useState, useEffect } from 'react';
import { APODResponse } from '../types/apod';
import { format } from 'date-fns';

export function useAPOD() {
  const [data, setData] = useState<APODResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPOD() {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAPOD();
  }, []);

  return { data, loading };
}