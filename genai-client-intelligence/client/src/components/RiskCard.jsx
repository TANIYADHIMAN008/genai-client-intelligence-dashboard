function RiskCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">
        🚩 Risk & Attention Flags
      </h2>

      <ul className="space-y-3">

        <li className="bg-red-100 text-red-700 p-3 rounded-lg">
          Poor Sleep Pattern
        </li>

        <li className="bg-yellow-100 text-yellow-700 p-3 rounded-lg">
          Meal Skipping
        </li>

        <li className="bg-orange-100 text-orange-700 p-3 rounded-lg">
          High Work Stress
        </li>

        <li className="bg-blue-100 text-blue-700 p-3 rounded-lg">
          Recurring Bloating
        </li>

      </ul>
    </div>
  );
}

export default RiskCard;