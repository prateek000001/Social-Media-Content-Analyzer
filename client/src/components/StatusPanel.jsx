export default function StatusPanel({ status, message, fileName }) {
  return (
    <div className="mt-4 p-4 rounded-lg bg-card">
      <div className="text-sm text-gray-400 mb-2">Status</div>
      <div className="flex items-center justify-between">
        <div className="text-sm">{status === 'idle' ? 'Waiting' : message}</div>
        <div>
          {status === 'uploading' && <span className="loader inline-block mr-2" />}
          {status === 'success' && <span className="text-green-400">✓</span>}
          {status === 'error' && <span className="text-red-400">✕</span>}
        </div>
      </div>
      {fileName && <div className="mt-2 text-xs text-gray-500">File: {fileName}</div>}
    </div>
  );
}
