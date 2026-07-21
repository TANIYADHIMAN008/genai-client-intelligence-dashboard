const { analyzeConversation } = require("../services/geminiService");

const analyze = async (req, res) => {
  try {
    const { conversation } = req.body;

    if (!conversation) {
      return res.status(400).json({
        message: "Conversation is required",
      });
    }

    const result = await analyzeConversation(conversation);

    res.json(result);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Analysis failed",
    });
  }
};

module.exports = {
  analyze,
};