function EvidenceCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-5">
        📄 Supporting Evidence
      </h2>

      <div className="space-y-5">

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="font-semibold">Sleep</h3>
          <p className="text-gray-600">
            "Slept only around 5 hours."
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-semibold">Exercise</h3>
          <p className="text-gray-600">
            "Did around 20 minutes walking."
          </p>
        </div>

        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="font-semibold">Stress</h3>
          <p className="text-gray-600">
            "There is a lot of office pressure."
          </p>
        </div>

      </div>
    </div>
  );
}

export default EvidenceCard;