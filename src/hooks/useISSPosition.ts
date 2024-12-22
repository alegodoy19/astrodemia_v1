import { useState, useEffect } from 'react';
import { ISSPosition } from '../types/iss';

export function useISSPosition() {
  const [position, setPosition] = useState<ISSPosition | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        if (!response.ok) {
          throw new Error('Failed to fetch ISS position');
        }
        const data = await response.json();
        setPosition({
          latitude: data.latitude,
          longitude: data.longitude,
          timestamp: data.timestamp
        });
        setError(null);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch ISS position');
      } finally {
        setLoading(false);
      }
    };

    fetchPosition();
    const interval = setInterval(fetchPosition, 5000);
    return () => clearInterval(interval);
  }, []);

  return { position, loading, error };
}