import { useState } from "react";
import ConversationInput from "./ConversationInput";
import SummarySection from "./SummarySection";
import AnalysisSection from "./AnalysisSection";
import ReviewPanel from "./ReviewPanel";
import DownloadReport from "./DownloadReport";

function Dashboard() {
  const [analysis, setAnalysis] = useState(null);
  const [reviewStatus, setReviewStatus] = useState("Pending");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <h1 className="text-4xl font-bold">
            🧠 GenAI Client Intelligence Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Analyze client conversations and generate structured AI insights.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        <ConversationInput setAnalysis={setAnalysis} />

        <SummarySection analysis={analysis} />

        <AnalysisSection
          analysis={analysis}
          setAnalysis={setAnalysis}
          isEditing={isEditing}
        />

        <ReviewPanel
          analysis={analysis}
          reviewStatus={reviewStatus}
          setReviewStatus={setReviewStatus}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />

        {analysis && (
          <DownloadReport
            analysis={analysis}
            reviewStatus={reviewStatus}
          />
        )}
      </main>
    </div>
  );
}

export default Dashboard;