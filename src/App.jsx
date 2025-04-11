import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Vantagens from "./components/Vantagens";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Vantagens />
      <Contato />
      <Footer />

      {/* Botão WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=5511940143156"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        💬 Chama no WhatsApp
      </a>
    </>
  );
}

export default App;