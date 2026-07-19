import { useState } from "react";
import { Upload, FileText, X } from "lucide-react";

function ResumeUpload({ onFileChange }) {
  const [file, setFile] = useState(null);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    onFileChange(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    onFileChange(null);
  };

  return (
    <div>
      {/* Upload Box */}
      <label className="border-2 border-dashed border-blue-500 rounded-2xl bg-slate-800 p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700 transition">
        <Upload size={60} className="text-blue-400 mb-4" />

        <h2 className="text-3xl font-bold text-white">Drag & Drop Resume</h2>

        <p className="text-slate-400 mt-2">or click below to browse</p>

        <div className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold">
          Choose PDF
        </div>

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => handleFile(e.target.files[0])}
        />
      </label>

      {/* Uploaded Resume */}
      {file && (
        <div className="mt-6 bg-green-500/10 border border-green-500 rounded-xl p-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FileText size={40} className="text-green-400" />

            <div>
              <h3 className="text-green-400 font-bold">
                ✅ Resume Uploaded Successfully
              </h3>

              <p className="text-white text-lg">{file.name}</p>

              <p className="text-slate-400 text-sm">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>

          <button
            onClick={removeFile}
            className="bg-red-600 hover:bg-red-700 p-3 rounded-lg text-white"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
