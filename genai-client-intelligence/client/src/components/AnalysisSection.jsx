import {
  FaHeartbeat,
  FaUserCheck,
  FaExclamationTriangle,
  FaClipboardList,
  FaLightbulb,
  FaQuoteLeft,
} from "react-icons/fa";

function AnalysisSection({
  analysis,
  setAnalysis,
  isEditing,
}) {
  if (!analysis) {
    return (
      <div className="mt-8 bg-white rounded-xl shadow-md p-8 text-center text-gray-500">
        Paste a conversation and click{" "}
        <strong>Analyze Conversation</strong> to generate AI insights.
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">

      {/* Weekly Summary */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaClipboardList className="text-blue-600" />
          Weekly Summary
        </h2>

        {isEditing ? (
          <textarea
            value={analysis.weeklySummary || ""}
            onChange={(e) =>
              setAnalysis({
                ...analysis,
                weeklySummary: e.target.value,
              })
            }
            rows={6}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <p className="text-gray-700 leading-7">
            {analysis.weeklySummary || "No summary generated."}
          </p>
        )}
      </div>

      {/* Symptoms & Stress */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FaHeartbeat className="text-red-500" />
          Symptoms & Stress
        </h2>

        {isEditing ? (
          <textarea
            value={analysis.symptomsStress || ""}
            onChange={(e) =>
              setAnalysis({
                ...analysis,
                symptomsStress: e.target.value,
              })
            }
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <p className="text-gray-700 leading-7">
            {analysis.symptomsStress ||
              "No symptoms or stress information available."}
          </p>
        )}
      </div>
            {/* Client Engagement */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FaUserCheck className="text-green-600" />
          Client Engagement
        </h2>

        <p className="text-gray-700 leading-7">
          {analysis.engagementLevel ||
            "No engagement information available."}
        </p>
      </div>

      {/* Key Barriers */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">
          🚧 Key Barriers
        </h2>

        {analysis.keyBarriers?.length > 0 ? (
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {analysis.keyBarriers.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No key barriers identified.
          </p>
        )}
      </div>

      {/* Pending Actions */}
      <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">
          📌 Pending Actions
        </h2>

        {analysis.pendingActions?.length > 0 ? (
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {analysis.pendingActions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No pending actions.
          </p>
        )}
      </div>

      {/* Risk Flags */}
      <div className="bg-red-50 border border-red-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-red-700 flex items-center gap-2 mb-4">
          <FaExclamationTriangle />
          Risk Flags
        </h2>

        {analysis.riskFlags?.length > 0 ? (
          <ul className="list-disc ml-6 text-red-700 space-y-2">
            {analysis.riskFlags.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No risk flags detected.
          </p>
        )}
      </div>
            {/* Coach Recommendation */}
      <div className="bg-green-50 border border-green-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-green-700 flex items-center gap-2 mb-4">
          <FaLightbulb />
          Coach Recommendation
        </h2>

        {isEditing ? (
          <textarea
            value={analysis.coachRecommendation || ""}
            onChange={(e) =>
              setAnalysis({
                ...analysis,
                coachRecommendation: e.target.value,
              })
            }
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ) : (
          <p className="text-gray-700 leading-7">
            {analysis.coachRecommendation ||
              "No recommendation generated."}
          </p>
        )}
      </div>

      {/* Supporting Evidence */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <FaQuoteLeft className="text-blue-600" />
          Supporting Evidence
        </h2>

        {analysis.supportingEvidence?.length > 0 ? (
          <div className="space-y-3">
            {analysis.supportingEvidence.map((item, index) => (
              <blockquote
                key={index}
                className="border-l-4 border-blue-500 pl-4 italic text-gray-700"
              >
                {item}
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No supporting evidence available.
          </p>
        )}
      </div>

      {/* AI Classification */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">
          AI Classification
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
                  {/* Confirmed Facts */}
          <div>
            <h3 className="font-semibold text-green-700 mb-2">
              ✅ Confirmed Facts
            </h3>

            {analysis.confirmedFacts?.length > 0 ? (
              <ul className="list-disc ml-6 space-y-1">
                {analysis.confirmedFacts.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">None</p>
            )}
          </div>

          {/* Client Reported */}
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">
              💬 Client Reported
            </h3>

            {analysis.clientReported?.length > 0 ? (
              <ul className="list-disc ml-6 space-y-1">
                {analysis.clientReported.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">None</p>
            )}
          </div>

          {/* AI Inference */}
          <div>
            <h3 className="font-semibold text-orange-700 mb-2">
              🤖 AI Inference
            </h3>

            {analysis.aiInference?.length > 0 ? (
              <ul className="list-disc ml-6 space-y-1">
                {analysis.aiInference.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">None</p>
            )}
          </div>

          {/* Missing Information */}
          <div>
            <h3 className="font-semibold text-red-700 mb-2">
              ❓ Missing Information
            </h3>

            {analysis.missingInformation?.length > 0 ? (
              <ul className="list-disc ml-6 space-y-1">
                {analysis.missingInformation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">None</p>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default AnalysisSection;