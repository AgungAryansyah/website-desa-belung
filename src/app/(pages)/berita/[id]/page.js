"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getNewsById } from '../../../../lib/api';
import PageTemplate from '../../../../templates/PageTemplate';

// Import existing berita components
import ContentBerita from './contentBerita';

export default function DetailBeritaPage() {
  const params = useParams();
  const beritaId = params.id;
  
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBerita() {
      try {
        setLoading(true);
        const result = await getNewsById(beritaId);
        setBerita(result);
        
      } catch (err) {
        setError(err.message);
        console.error('Error fetching berita:', err);
      } finally {
        setLoading(false);
      }
    }

    if (beritaId) {
      fetchBerita();
    }
  }, [beritaId]);

  if (loading) {
    return (
      <PageTemplate>
        <div className="min-h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        </div>
      </PageTemplate>
    );
  }

  if (error) {
    return (
      <PageTemplate>
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>Error loading news: {error}</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

  if (!berita) {
    return (
      <PageTemplate>
        <div className="min-h-screen flex justify-center items-center">
          <div className="text-gray-500">
            <p>News article not found</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate>
      <div className="min-h-screen bg-gray-50">
        <ContentBerita berita={berita} />
      </div>
    </PageTemplate>
  );
}
