import React from "react";
import palestrante1 from "../assets/Palestrante 1.jpg";
import palestrante2 from "../assets/Palestrante 2.jpg";
import palestrante3 from "../assets/Palestrante 3.jpg";
import palestrante4 from "../assets/Palestrante 4.jpg";
import palestrante5 from "../assets/Palestrante 5.jpg";
import palestrante6 from "../assets/Palestrante 6.jpg";

export default function Speakers() {
  const speakersData = [
    {
      id: 1,
      name: "John Johnson",
      bio: "Especialista em Front-end e entusiasta do design responsivo, John traz inovações para a experiência do usuário.",
      photo: palestrante1,
    },
    {
      id: 2,
      name: "Bob Smith",
      bio: "Desenvolvedor experiente em JavaScript, Bob compartilha insights sobre a evolução das bibliotecas front-end.",
      photo: palestrante2,
    },
    {
      id: 3,
      name: "Davi Davis",
      bio: "Especializado em UI/UX, Davi desenvolve interfaces intuitivas e acessíveis para aplicações web modernas.",
      photo: palestrante3,
    },
    {
      id: 4,
      name: "David Lee",
      bio: "Expert em Node.js e back-end escalável, David implementa soluções robustas para grandes projetos.",
      photo: palestrante4,
    },
    {
      id: 5,
      name: "Renato Garcia",
      bio: "Com vasta experiência em arquiteturas de microserviços, Renato é referência em desenvolvimento de sistemas distribuídos.",
      photo: palestrante5,
    },
    {
      id: 6,
      name: "Frank Wilson",
      bio: "Especialista em DevOps, Frank otimiza processos de integração e entrega contínua para times ágeis.",
      photo: palestrante6,
    },
  ];

  return (
    <section className="py-16 w-full bg-[#61DAFB] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakersData.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-600">
                {speaker.name}
              </h3>
              <p className="text-gray-700">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
