import {
  FaBed,
  FaTint,
  FaRunning,
  FaAppleAlt,
} from "react-icons/fa";

function SummarySection({ analysis }) {
  const cards = [
    {
      title: "Sleep",
      value: analysis?.sleep || "N/A",
      icon: <FaBed />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      title: "Water Intake",
      value: analysis?.waterIntake || "N/A",
      icon: <FaTint />,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200",
    },
    {
      title: "Exercise",
      value: analysis?.exerciseSteps || "N/A",
      icon: <FaRunning />,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
    },
    {
      title: "Nutrition",
      value: analysis?.nutritionAdherence || "N/A",
      icon: <FaAppleAlt />,
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
  ];

  return (
    <section className="space-y-6">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Health Overview
          </h2>

          <p className="text-slate-500 mt-1">
            AI extracted health metrics from the conversation.
          </p>
        </div>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Live AI Analysis
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl border ${card.border} shadow-sm hover:shadow-xl transition-all duration-300 p-6`}
          >
            <div
              className={`w-14 h-14 rounded-xl ${card.bg} flex items-center justify-center text-3xl ${card.color}`}
            >
              {card.icon}
            </div>

            <h3 className="mt-6 text-slate-500 font-medium">
              {card.title}
            </h3>

            <h2 className="text-xl font-bold text-slate-800 mt-2 break-words">
              {card.value}
            </h2>

            <div className="mt-5">
              {card.value !== "N/A" ? (
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  ✓ Detected
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
                  Not Found
                </span>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default SummarySection;