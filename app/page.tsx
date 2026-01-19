'use client';

import DesktopPageContent from './components/DesktopPageContent';
import MobilePageContent from './components/MobilePageContent';
import { useViewport } from '@/hooks/useViewport';

export default function Home() {
  const { isMobile, isMounted } = useViewport();

  if (!isMounted) return <main className="bg-black min-h-screen" />;

  return (
    <main className="bg-black min-h-screen text-alabaster selection:bg-zinc-900 selection:text-white">
      {isMobile ? (
        <MobilePageContent />
      ) : (
        <DesktopPageContent />
      )}
    </main>
  );
}
