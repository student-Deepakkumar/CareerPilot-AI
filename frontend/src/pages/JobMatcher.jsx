import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import API from "../services/api";
import Loader from "../components/Loader";

function JobMatcher() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const analyzeMatch = async () => {
    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please paste a Job Description.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resume);
      formData.append("jobDescription", jobDescription);

      const res = await API.post("/job-match", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data);
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          err.response?.data?.error ||
          "Something went wrong.",
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-10">
      <h1 className="text-4xl font-bold text-white mb-8">
        AI Job Match Analyzer
      </h1>

      <ResumeUpload onFileChange={setResume} />

      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Paste complete Job Description here..."
        className="w-full h-64 mt-8 bg-slate-800 text-white rounded-xl p-5 outline-none"
      />

      <button
        onClick={analyzeMatch}
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold"
      >
        Analyze Match
      </button>

      {loading && <Loader text="Matching Resume with Job Description..." />}

      {result && (
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl text-white font-bold mb-5">Match Score</h2>

            <p className="text-6xl font-bold text-green-400">
              {result.matchScore}%
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl text-white font-bold mb-5">
              Matching Skills
            </h2>

            <ul className="space-y-2">
              {result.matchingSkills.map((skill, index) => (
                <li key={index} className="text-green-400">
                  ✅ {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl text-white font-bold mb-5">
              Missing Skills
            </h2>

            <ul className="space-y-2">
              {result.missingSkills.map((skill, index) => (
                <li key={index} className="text-red-400">
                  ❌ {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl text-white font-bold mb-5">
              AI Suggestions
            </h2>

            <ul className="space-y-2">
              {result.suggestions.map((item, index) => (
                <li key={index} className="text-yellow-300">
                  💡 {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobMatcher;
