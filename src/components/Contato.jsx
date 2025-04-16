import { useState, useEffect } from "react";
import InputMask from "react-input-mask";

function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    nivel: "",
    experiencia: "",
    tipoAula: "",
    horario: "",
    mensagem: "",
  });

  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const numeroInspire = "5511940143156";

    const mensagemWhats = `
Olá, meu nome é ${form.nome}.

E-mail: ${form.email}
Telefone: ${form.telefone}
Nível: ${form.nivel}
Já teve aulas antes? ${form.experiencia}
Preferência de aula: ${form.tipoAula}
Período preferido: ${form.horario}
${form.mensagem ? `Mensagem: ${form.mensagem}` : ""}
    `;

    // Abrir WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroInspire}?text=${encodeURIComponent(mensagemWhats)}`;
    window.open(linkWhatsApp, "_blank");

    // Enviar para Google Sheets (modo no-cors)
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxUz2Q0soT7r3ljWbj5KgNq3kdCv8bXyrwzrAyOHbOb_Mt3-KqX3fPczd4ioMbVDgUN/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setForm({
        nome: "",
        email: "",
        telefone: "",
        nivel: "",
        experiencia: "",
        tipoAula: "",
        horario: "",
        mensagem: "",
      });

      setSucesso(true);
    } catch (error) {
      console.error("Erro ao enviar para planilha:", error);
      alert("Erro ao salvar os dados. Tente novamente mais tarde.");
    }
  };

  useEffect(() => {
    if (sucesso) {
      const timer = setTimeout(() => setSucesso(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [sucesso]);

  return (
    <section id="contato" className="bg-secondary/10 py-16 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Entre em contato
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Nome */}
          <div>
            <label className="block text-sm text-primary mb-1" htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-primary mb-1" htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm text-primary mb-1" htmlFor="telefone">Telefone</label>
            <InputMask
              mask="(99) 99999-9999"
              id="telefone"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="(11) 98765-4321"
              value={form.telefone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Nível */}
          <div>
            <label className="block text-sm text-primary mb-1" htmlFor="nivel">
              Em qual nível de inglês você se sente hoje?
            </label>
            <select
              id="nivel"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={form.nivel}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          {/* Experiência */}
          <div>
            <label className="block text-sm text-primary mb-1" htmlFor="experiencia">
              Já fez aula de inglês antes?
            </label>
            <select
              id="experiencia"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={form.experiencia}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>

          {/* Tipo de aula */}
          <div>
            <label className="block text-sm text-primary mb-1" htmlFor="tipoAula">
              Você prefere aula em grupo ou particular?
            </label>
            <select
              id="tipoAula"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={form.tipoAula}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Grupo">Grupo</option>
              <option value="Particular">Particular</option>
              <option value="Indiferente">Indiferente</option>
            </select>
          </div>

          {/* Horário */}
          <div>
            <label className="block text-sm text-primary mb-1" htmlFor="horario">
              Qual período do dia é melhor pra você?
            </label>
            <select
              id="horario"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={form.horario}
              onChange={handleChange}
              required
            >
              <option value="">Selecione...</option>
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
              <option value="Indiferente">Indiferente</option>
            </select>
          </div>

          {/* Mensagem (opcional) */}
          <div>
            <label className="block text-sm text-primary mb-1" htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Como podemos te ajudar?"
              value={form.mensagem}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Botão */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink text-white font-medium px-6 py-2 rounded hover:bg-pink/80 transition"
            >
              Enviar pelo WhatsApp
            </button>
          </div>
        </form>

        {/* Mensagem de sucesso */}
        {sucesso && (
          <p className="text-green-600 text-center mt-4 font-medium">
            ✅ Mensagem enviada com sucesso via WhatsApp!
          </p>
        )}
      </div>
    </section>
  );
}

export default Contato;
