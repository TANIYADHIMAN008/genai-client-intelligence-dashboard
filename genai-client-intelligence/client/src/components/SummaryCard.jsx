import {
  FaBed,
  FaTint,
  FaRunning,
  FaAppleAlt,
} from "react-icons/fa";

function SummaryCard({ analysis }) {
  const cards = [
    {
      title: "Sleep",
      value: analysis?.sleep || "N/A",
      color: "bg-blue-100",
      icon: <FaBed className="text-blue-600 text-3xl" />,
    },
    {
      title: "Water",
      value: analysis?.waterIntake || "N/A",
      color: "bg-cyan-100",
      icon: <FaTint className="text-cyan-600 text-3xl" />,
    },
    {
      title: "Exercise",
      value: analysis?.exerciseSteps || "N/A",
      color: "bg-green-100",
      icon: <FaRunning className="text-green-600 text-3xl" />,
    },
    {
      title: "Nutrition",
      value: analysis?.nutritionAdherence || "N/A",
      color: "bg-orange-100",
      icon: <FaAppleAlt className="text-orange-600 text-3xl" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${card.color}`}
          >
            {card.icon}
          </div>

          <h3 className="mt-4 text-gray-500">
            {card.title}
          </h3>

          <p className="text-2xl font-bold mt-1">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCard;