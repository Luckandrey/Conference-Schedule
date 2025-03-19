export default function Tickets() {
  return (
    <section className="py-16 w-full bg-[#61DAFB] text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Buy a Ticket</h2>
        <p className="mb-8 text-xl">
          Garanta seu ingresso para participar do React Conference 2025! Aproveite para aprender com especialistas renomados, participar de workshops exclusivos e ampliar sua rede de contatos com profissionais da área.
        </p>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Tipos de Ingressos:</h3>
          <ul className="text-left inline-block">
            <li className="mb-2">🎟️ <strong>Ingresso Básico:</strong> Acesso às palestras principais e coffee breaks.</li>
            <li className="mb-2">🌟 <strong>Ingresso Premium:</strong> Todos os benefícios do ingresso básico, acesso antecipado, áreas exclusivas e brindes.</li>
            <li className="mb-2">💼 <strong>Ingresso Empresarial:</strong> Pacote especial para empresas com grupos de participantes.</li>
          </ul>
        </div>
        <a
          href="#"
          className="inline-block bg-white text-[#3864fb] px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          Compre agora
        </a>
        <p className="mt-8">
          Para dúvidas sobre ingressos ou pagamentos, entre em contato conosco pelo email: <strong>tickets@reactconf2025.com</strong>
        </p>
      </div>
    </section>
  );
}
