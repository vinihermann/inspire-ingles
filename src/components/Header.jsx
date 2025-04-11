function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-primary shadow">
      <div className="flex items-center gap-3">
      <img src="/logo.png" alt="Inspire Inglês" className="h-[9rem]" />
      </div>
      <a
        href="#contato"
        className="bg-pink text-white px-4 py-2 rounded hover:bg-pink/80 transition"
      >
        Contato
      </a>
    </header>
  );
}

export default Header;