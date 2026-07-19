import { useState } from "react";
import InterviewForm from "../components/interview/InterviewForm";
import QuestionCard from "../components/interview/QuestionCard";
import AnswerBox from "../components/interview/AnswerBox";
import FeedbackCard from "../components/interview/FeedbackCard";
import ScoreCard from "../components/interview/ScoreCard";
import API from "../services/api";

function Interview() {
  const [company, setCompany] = useState("Google");
  const [role, setRole] = useState("Software Engineer Intern");
  const [difficulty, setDifficulty] = useState("Easy");

  const [question, setQuestion] = useState("Tell me about yourself.");

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState(null);

  const submitAnswer = async () => {
    if (!answer.trim()) {
      alert("Please enter your answer.");
      return;
    }

    setLoading(true);

    try {
      const res = await API.post("/interview", {
        company,
        role,
        difficulty,
        question,
        answer,
      });

      setFeedback(res.data);

      if (res.data.nextQuestion) {
        setQuestion(res.data.nextQuestion);
      }

      setAnswer("");
    } catch (err) {
      console.log(err);
      alert("Failed to analyze interview.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-10">
      <h1 className="text-4xl font-bold text-white mb-8">AI Interview Coach</h1>

      <InterviewForm
        company={company}
        setCompany={setCompany}
        role={role}
        setRole={setRole}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      <QuestionCard question={question} />

      <AnswerBox
        answer={answer}
        setAnswer={setAnswer}
        submitAnswer={submitAnswer}
        loading={loading}
      />

      {feedback && (
        <>
          <ScoreCard feedback={feedback} />
          <FeedbackCard feedback={feedback} />
        </>
      )}
    </div>
  );
}

export default Interview;
