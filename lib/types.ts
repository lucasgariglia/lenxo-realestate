export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image_url: string; // Snake case to match Supabase convention usually
  specs: {
    beds: number;
    baths: number;
    sqft: number;
  };
  tags: string[];
}
