import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ResumeUpload = ({ onFileUpload, resumeFile }) => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [error, setError] = useState("");

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (rejectedFiles.length > 0) {
            setError("Invalid file type. Only PDF, DOC, and DOCX are allowed."); 
            return;
        }

        const file = acceptedFiles[0];
        setUploadedFile(file);
        setError(""); // Clear previous errors
        onFileUpload(file);
    }, [onFileUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
            "application/msword": [".doc"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"]
        },
        maxFiles: 1
    });

    return (
        <div>
            <label>Upload Your Resume Here:</label>
            <div {...getRootProps()} style={{ ...dropzoneStyles, borderColor: isDragActive ? "#007bff" : "#ccc" }}>
                <input {...getInputProps()} aria-label="Upload Resume" />
                <p>📂 <strong>Browse Files</strong></p>
                <p>Drag and drop files here</p>
            </div>

            {resumeFile !=="" && uploadedFile && (
                <p style={{ marginTop: "10px", color: "green" }}>
                    ✅ Uploaded: {uploadedFile.name}
                </p>
            )}

            {error && (
                <p style={{ marginTop: "10px", color: "red" }}>
                    ❌ {error}
                </p>
            )}
        </div>
    );
};

const dropzoneStyles = {
    border: "2px dashed #ccc",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    background: "#f8f8f8",
    borderRadius: "10px",
    transition: "border-color 0.3s ease-in-out"
};

export default ResumeUpload;
