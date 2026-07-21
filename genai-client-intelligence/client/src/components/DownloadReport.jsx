import jsPDF from "jspdf";

function DownloadReport({ analysis, reviewStatus }) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(18);
    doc.text("GenAI Client Intelligence Report", 20, y);

    y += 12;

    doc.setFontSize(11);
    doc.text(
      `Generated: ${new Date().toLocaleString()}`,
      20,
      y
    );

    y += 10;

    doc.text(`Review Status: ${reviewStatus}`, 20, y);

    y += 15;

    const addSection = (title, content) => {
      doc.setFontSize(14);
      doc.text(title, 20, y);

      y += 8;

      doc.setFontSize(11);

      const lines = doc.splitTextToSize(
        content || "N/A",
        170
      );

      doc.text(lines, 20, y);

      y += lines.length * 6 + 8;

      if (y > 270) {
        doc.addPage();
        y = 20;
      }
    };

    addSection("Weekly Summary", analysis.weeklySummary);

    addSection(
      "Symptoms & Stress",
      analysis.symptomsStress
    );

    addSection(
      "Client Engagement",
      analysis.engagementLevel
    );

    addSection(
      "Coach Recommendation",
      analysis.coachRecommendation
    );

    addSection(
      "Key Barriers",
      analysis.keyBarriers?.join(", ")
    );

    addSection(
      "Pending Actions",
      analysis.pendingActions?.join(", ")
    );

    addSection(
      "Risk Flags",
      analysis.riskFlags?.join(", ")
    );

    doc.save("Client_Intelligence_Report.pdf");
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <button
        onClick={downloadPDF}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        📄 Download PDF Report
      </button>
    </div>
  );
}

export default DownloadReport;