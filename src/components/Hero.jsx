function Hero() {
  return (
    <section className="text-center py-14 bg-secondary text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Aprenda inglês com leveza e propósito
        </h2>
        <p className="text-base md:text-lg mb-6 text-white/90">
          Escola online com aulas ao vivo e metodologia que valoriza o seu ritmo.
        </p>
        <a
          href="#contato"
          className="bg-pink text-white font-medium px-6 py-2 rounded-full hover:bg-pink/80 transition"
        >
          Quero começar
        </a>
      </div>
    </section>
  );
}

export default Hero;
