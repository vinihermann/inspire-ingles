function Vantagens() {
  const vantagens = [
    {
      titulo: 'Turmas ao vivo',
      descricao: 'Aprenda em grupo com aulas dinâmicas e interativas.',
      icone: '📚',
    },
    {
      titulo: 'Aulas particulares',
      descricao: 'Conteúdo sob medida, focado nas suas necessidades.',
      icone: '🎯',
    },
    {
      titulo: 'Flexibilidade',
      descricao: 'Horários adaptáveis à sua rotina.',
      icone: '⏰',
    },
  ];

  return (
    <section className="bg-secondary/10 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Por que escolher a Inspire?
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {vantagens.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 text-center border border-secondary"
          >
            <div className="text-4xl mb-4">{item.icone}</div>
            <h3 className="text-xl font-semibold text-primary mb-2">{item.titulo}</h3>
            <p className="text-gray-700">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vantagens;
