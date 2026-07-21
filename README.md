# 🧠 GenAI Client Intelligence Dashboard

An AI-powered dashboard that analyzes client-coach conversations and generates actionable client intelligence using Large Language Models (LLMs).

This project was developed as a practical prototype for a GenAI Product Intern assignment.

---

## 🚀 Features

- 📄 Paste client-coach conversation
- 🤖 AI-powered conversation analysis
- 📊 Weekly client summary
- 🥗 Nutrition adherence tracking
- 🏃 Exercise & activity insights
- 😴 Sleep analysis
- 💧 Water intake tracking
- ❤️ Symptoms & stress detection
- 🚩 Risk flags identification
- 💡 Coach recommendations
- 📝 Supporting evidence from conversation
- 👨‍⚕️ Human Review Panel
- 📥 Download report as PDF

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Icons
- jsPDF

### Backend
- Node.js
- Express.js
- OpenRouter API (DeepSeek/OpenAI Compatible)
- dotenv
- CORS

---

## 📂 Project Structure

```
Fronted/
│
├── Backend/
│   └── server/
│       ├── controllers/
│       ├── routes/
│       ├── services/
│       ├── server.js
│       └── package.json
│
└── genai-client-intelligence/
    └── client/
        ├── src/
        │   ├── components/
        │   ├── pages/
        │   └── services/
        ├── package.json
        └── vite.config.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/TANIYADHIMAN008/genai-client-intelligence-dashboard.git
```

---

### Backend Setup

```bash
cd Backend/server
npm install
```

Create a `.env` file:

```env
OPENROUTER_API_KEY=your_api_key_here
```

Run the backend:

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd genai-client-intelligence/client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📌 Workflow

1. Paste the client conversation.
2. Click **Analyze Conversation**.
3. Backend sends the conversation to the AI model.
4. AI returns structured JSON insights.
5. Dashboard displays:
   - Weekly Summary
   - Health Metrics
   - Risk Flags
   - Recommendations
   - Supporting Evidence
6. Human reviewer can edit or approve the analysis.
7. Download the report as a PDF.

---

## 📷 Screenshots

Add screenshots of:

- Home Page
- Conversation Input
- AI Analysis
- Review Panel
- PDF Report

---

## 🔒 Environment Variables

Backend requires:

```env
OPENROUTER_API_KEY=your_api_key_here
```

> Never commit your `.env` file.

---

## 🎯 Future Improvements

- Authentication
- Database Integration
- Conversation History
- User Dashboard
- Export to Excel
- Email Reports
- Real-time Analytics
- Multiple AI Model Support

---

## 👩‍💻 Author

**Taniya Dhiman**

GitHub:
https://github.com/TANIYADHIMAN008

---

## 📄 License

This project is developed for educational and demonstration purposes.
