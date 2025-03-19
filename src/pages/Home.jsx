// Home.jsx (ajustado)
import React from "react";
import Slider from "react-slick";
import palestrante1 from "../assets/Palestrante 1.jpg";
import palestrante2 from "../assets/Palestrante 2.jpg";
import palestrante3 from "../assets/Palestrante 3.jpg";
import palestrante4 from "../assets/Palestrante 4.jpg";
import palestrante5 from "../assets/Palestrante 5.jpg";
import palestrante6 from "../assets/Palestrante 6.jpg";
import palestra1 from "../assets/Palestra 1.jpg";
import palestra2 from "../assets/Palestra 2.jpg";
import palestra3 from "../assets/Palestra 3.jpg";

// Importa os CSS do react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {/* Carrossel com Banner Overlay */}
      <section className="relative">
        <Slider {...settings}>
          <div>
            <img
              src={palestra1}
              alt="Palestra 1"
              className="w-full h-[500px] object-cover filter blur-sm"
            />
          </div>
          <div>
            <img
              src={palestra2}
              alt="Palestra 2"
              className="w-full h-[500px] object-cover filter blur-sm"
            />
          </div>
          <div>
            <img
              src={palestra3}
              alt="Palestra 3"
              className="w-full h-[500px] object-cover filter blur-sm"
            />
          </div>
        </Slider>
        {/* Overlay com título, descrição e botão */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
          <h1 className="text-5xl font-bold mb-6">React Conference 2025</h1>
          <p className="text-xl mb-8">
            O maior evento de React do ano! Aprenda com especialistas e conecte-se com a comunidade.
          </p>
          <a
            href="/tickets"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Buy a Ticket
          </a>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 w-full bg-[#61DAFB] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img
                src={palestrante1}
                alt="Speaker"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-600">John Johnson</h3>
              <p className="text-gray-700">
                Especialista em Front-end e entusiasta do design responsivo, John traz inovações para a experiência do usuário.
              </p>
            </div>
            <div className="bg-white rounded p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img
                src={palestrante2}
                alt="Speaker"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-600">Bob Smith</h3>
              <p className="text-gray-700">
                Desenvolvedor experiente em JavaScript, Bob compartilha insights sobre a evolução das bibliotecas front-end.
              </p>
            </div>
            <div className="bg-white rounded p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img
                src={palestrante3}
                alt="Speaker"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-600">Davi Davis</h3>
              <p className="text-gray-700">
                Especializado em UI/UX, Davi desenvolve interfaces intuitivas e acessíveis para aplicações web modernas.
              </p>
            </div>
            <div className="bg-white rounded p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img
                src={palestrante4}
                alt="Speaker"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-600">David Lee</h3>
              <p className="text-gray-700">
                Expert em Node.js e back-end escalável, David implementa soluções robustas para grandes projetos.
              </p>
            </div>
            <div className="bg-white rounded p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img
                src={palestrante5}
                alt="Speaker"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-600">Renato Garcia</h3>
              <p className="text-gray-700">
                Com vasta experiência em arquiteturas de microserviços, Renato é referência em desenvolvimento de sistemas distribuídos.
              </p>
            </div>
            <div className="bg-white rounded p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img
                src={palestrante6}
                alt="Speaker"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-purple-600">Frank Wilson</h3>
              <p className="text-gray-700">
                Especialista em DevOps, Frank otimiza processos de integração e entrega contínua para times ágeis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
