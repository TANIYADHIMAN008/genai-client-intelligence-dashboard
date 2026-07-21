import { useState } from "react";
import axios from "axios";
import {
  FaRobot,
  FaMagic,
  FaTrash,
} from "react-icons/fa";

function ConversationInput({ setAnalysis }) {
  const [conversation, setConversation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!conversation.trim()) {
      alert("Please paste a client conversation.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/analyze",
        {
          conversation,
        }
      );

      setAnalysis(res.data);

      localStorage.setItem(
        "analysis",
        JSON.stringify(res.data)
      );
    } catch (err) {
      console.error(err);
      alert("Analysis Failed");
    } finally {
      setLoading(false);
    }
  };

  const clearConversation = () => {
    setConversation("");
    setAnalysis(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
          <FaRobot className="text-blue-600 text-2xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Client Conversation
          </h2>

          <p className="text-slate-500">
            Paste the conversation between coach and client.
          </p>
        </div>
      </div>

      <textarea
        rows={14}
        value={conversation}
        onChange={(e) =>
          setConversation(e.target.value)
        }
        placeholder="Paste conversation here..."
        className="w-full rounded-xl border border-slate-300 p-5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
      />

      <div className="flex justify-between items-center mt-3">

        <span className="text-sm text-slate-500">
          Characters: {conversation.length}
        </span>

        <button
          onClick={clearConversation}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
        >
          <FaTrash />
          Clear
        </button>

      </div>

      <div className="mt-8">

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition disabled:opacity-60"
        >
          {loading ? (
            <span className="flex justify-center items-center gap-3">
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              AI is analyzing...
            </span>
          ) : (
            <span className="flex justify-center items-center gap-3">
              <FaMagic />
              Analyze Conversation
            </span>
          )}
        </button>

      </div>

    </div>
  );
}

export default ConversationInput;