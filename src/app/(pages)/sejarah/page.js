"use client";
import { useState, useEffect } from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import ContentSejarah from './contentSejarah';
import { getHistory } from '../../../lib/api';

export default function SejarahPage() {
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        setLoading(true);
        console.log('🔍 Fetching history...');
        
        const result = await getHistory();
        console.log('✅ History fetched for page:', result);
        
        // Since there's only 1 history article, get the first item
        const historyData = result.items && result.items.length > 0 ? result.items[0] : null;
        setHistory(historyData);
        
      } catch (err) {
        console.error('❌ Error fetching history for page:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  if (loading) {
    return (
      <PageTemplate>
        <div className="min-h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          <span className="ml-3 text-gray-600">Loading history...</span>
        </div>
      </PageTemplate>
    );
  }

  if (error) {
    return (
      <PageTemplate>
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
            <h3 className="font-bold">Error Loading History</h3>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </PageTemplate>
    );
  }

  if (!history) {
    return (
      <PageTemplate>
        <div className="min-h-screen flex justify-center items-center">
          <div className="text-gray-500 text-center">
            <h3 className="text-xl font-semibold mb-2">No History Found</h3>
            <p>The history content is not available at the moment.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate className="bg-gray-100 w-full">
      <div className="min-h-screen bg-gray-50">
        <ContentSejarah history={history} error={null} />
      </div>
    </PageTemplate>
  );
}