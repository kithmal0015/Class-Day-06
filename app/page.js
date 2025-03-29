// SSR - Server Side Rendered - Server Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-1 bg-gray-400">
        First Section
      </header>
      <main className="flex-1 bg-primary">
        Miledl Section
      </main>
      <footer className="flex-1 bg-amber-400">
        Last Section
      </footer>
    </div>
  );
}