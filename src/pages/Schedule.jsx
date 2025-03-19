export default function Schedule() {
  const scheduleData = [
    { time: "09:00 - 10:00", topic: "Opening Keynote", speaker: "John Johnson" },
    { time: "10:15 - 11:00", topic: "React State Management", speaker: "Bob Smith" },
    { time: "11:15 - 12:00", topic: "Hooks Avançados no React", speaker: "Davi Davis" },
    { time: "13:00 - 14:00", topic: "React Performance Optimization", speaker: "David Lee" },
    { time: "14:15 - 15:00", topic: "Testando Aplicações React", speaker: "Renato Garcia" },
    { time: "14:15 - 15:00", topic: "Deploy Contínuo com React e DevOps", speaker: "Frank Wilson" },
    { time: "14:15 - 15:00", topic: "Gerenciamento de Estado Global com Redux", speaker: "John Johnson" },
    { time: "15:15 - 16:00", topic: "Migrando para React 18", speaker: "Bob Smith" },
    { time: "16:15 - 17:00", topic: "Acessibilidade em Aplicações React", speaker: "Renato Garcia" },
    { time: "16:15 - 17:00", topic: "React e Typescript na prática", speaker: "Frank Wilson" },
  ];

  return (
    <section className="py-16 w-full bg-[#61DAFB] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Event Schedule</h2>
        <table className="w-full border-collapse bg-white text-gray-800 shadow rounded overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4">Time</th>
              <th className="p-4">Topic</th>
              <th className="p-4">Speaker</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="p-4">{item.time}</td>
                <td className="p-4">{item.topic}</td>
                <td className="p-4">{item.speaker}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}