import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Obsession</h2>
        <p className="text-lg text-teal-600">
           Obsession can be tricky, it can be misleading. Wait, hear me out. When a person is obsessed they don't care about anything else except their obsession.
            Day and night are occupied by their thoughts. 
            Different people have different obsessions — drugs, music (me), books (me), games, clothes...
            It can make you forget most things and focus only on it. I can’t say whether it’s bad or good, but I’ll say everyone has something they obsess over.
        </p>
      </main>
      <Footer />
    </div>
  ); 
}
