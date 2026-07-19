import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import ATSCard from "../components/ATSCard";
import AnalysisCard from "../components/AnalysisCard";
import Loader from "../components/Loader";
import API from "../services/api";
import StatsCard from "../components/StatsCard";
import ResumePreview from "../components/ResumePreview";
import DownloadReport from "../components/DownloadReport";

function Resume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [score, setScore] = useState(0);

  const [strengths, setStrengths] = useState([]);
  const [improvements, setImprovements] = useState([]);

  const analyzeResume = async () => {
    if (!file) {
      alert("Please upload a resume.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("resume", file);

      const res = await API.post("/analyze-resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setScore(res.data.score);

      setStrengths(res.data.strengths);

      setImprovements(res.data.improvements);
    } catch (err) {
      console.log("Frontend Error:", err);
      console.log("Response:", err.response);

      alert(
        err.response?.data?.message || err.response?.data?.error || err.message,
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-10">
      <h1 className="text-4xl font-bold text-white mb-8">Resume Analyzer</h1>

      <ResumeUpload onFileChange={setFile} />

      {/* Resume Preview */}
      <ResumePreview file={file} />

      <button
        onClick={analyzeResume}
        className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold"
      >
        Analyze Resume
      </button>
      {loading && <Loader text="Analyzing Resume..." />}

      {!loading && score > 0 && (
        <>
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-8">
            <StatsCard title="ATS Score" value={`${score}%`} icon="ats" />

            <StatsCard
              title="Strengths"
              value={strengths.length}
              icon="skills"
            />

            <StatsCard
              title="Improvements"
              value={improvements.length}
              icon="projects"
            />

            <StatsCard title="Resume Sections" value="7" icon="sections" />
          </div>

          {/* Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ATSCard score={score} />

            <AnalysisCard title="Strengths" items={strengths} type="strength" />

            <AnalysisCard
              title="Improvements"
              items={improvements}
              type="improvement"
            />
          </div>
          <div className="flex justify-center mt-8">
            <DownloadReport
              score={score}
              strengths={strengths}
              improvements={improvements}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Resume;
