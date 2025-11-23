import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUpload({ onFileSelected }) {
  const onDrop = useCallback((files) => {
    if (files && files.length > 0) onFileSelected(files[0]);
  }, [onFileSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles: 1 });

  return (
    <div {...getRootProps()} className={`p-6 rounded-xl border-2 border-dashed ${isDragActive ? 'border-accent bg-opacity-5' : 'border-gray-700 bg-card'}`}>
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="text-4xl">📤</div>
        <div className="text-sm text-gray-300">
          {isDragActive ? 'Drop file to upload' : 'Drag & drop PDF or image here'}
        </div>
        <div className="text-xs text-gray-500">Supports: .pdf, .png, .jpg (max 30MB)</div>
      </div>
    </div>
  );
}
