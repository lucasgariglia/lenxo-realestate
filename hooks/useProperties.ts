import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Property } from '@/lib/types';
import { MOCK_PROPERTIES } from '@/lib/mock-data';

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      // Logic: Try to fetch from Supabase. If no connection/empty, use MOCK.
      try {
        const hasSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL && 
                           process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';
        
        if (hasSupabase) {
            const { data, error } = await supabase
            .from('properties')
            .select('*');
            
            if (error) throw error;
            if (data) {
                setProperties(data as Property[]); // Casting for now as DB schema might vary
            }
        } else {
            // Simulate network delay for "Loading" state UI dev
            await new Promise(resolve => setTimeout(resolve, 800));
            setProperties(MOCK_PROPERTIES);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties(MOCK_PROPERTIES); // Fallback
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  return { properties, loading };
}
