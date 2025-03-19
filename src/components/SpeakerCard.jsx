export default function SpeakerCard({ speaker }) {
    return (
    <div className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow duration-300">
        <img
        src={speaker.photo}
        alt={speaker.name}
        className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
        <p className="text-gray-700">{speaker.bio}</p>
    </div>
    );
}
