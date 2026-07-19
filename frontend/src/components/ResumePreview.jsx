import { FileText } from "lucide-react";

function ResumePreview({ file }) {
  if (!file) return null;

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-4">
        <FileText size={45} className="text-red-400" />

        <div>
          <h2 className="text-white font-bold text-lg">{file.name}</h2>

          <p className="text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>

          <p className="text-green-400 mt-1">✓ Ready for Analysis</p>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
