import React, { useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

function FileSharingSection108() {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleChooseFiles = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div className="w-full max-w-sm bg-[#1E293B] rounded-3xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <FiUploadCloud className="text-[#8B8CFF] text-lg" />
        <h2 className="text-white text-lg font-bold">
          File Sharing
        </h2>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-[#334155] rounded-2xl min-h-48 flex flex-col items-center justify-center text-center p-4">
        <FiUploadCloud className="text-gray-400 text-5xl mb-3" />

        <h3 className="text-white text-md font-semibold">
          Upload files
        </h3>

        <p className="text-gray-400 text-xs mt-1">
          PDF, DOC, PNG, JPG, MP4
        </p>

        {/* Selected Files */}
        {files.length > 0 && (
          <div className="mt-4 w-full text-left">
            <p className="text-white text-sm font-medium mb-2">
              Selected Files:
            </p>
            {files.map((file, index) => (
              <p
                key={index}
                className="text-gray-300 text-xs truncate"
              >
                {file.name}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Hidden Input */}
      <input
        type="file"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Choose Files Button */}
      <button
        onClick={handleChooseFiles}
        className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-[#5B4CFF] to-[#B31BFF] text-white text-md font-semibold hover:opacity-90 transition"
      >
        Choose Files
      </button>
    </div>
  );
}

export default FileSharingSection108;