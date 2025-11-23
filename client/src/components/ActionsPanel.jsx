import { copyToClipboard } from '../utils/clipboard';

export default function ActionsPanel({ extracted, fileName, clearText }) {
  const downloadText = () => {
    const blob = new Blob([extracted], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (fileName || 'extracted') + '.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-4 p-4 rounded-lg bg-card">
      <div className="text-sm text-gray-400 mb-2">Quick actions</div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700" onClick={() => { copyToClipboard(extracted); }}>Copy</button>
        <button className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700" onClick={downloadText}>Download Text</button>
        <button className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700" onClick={clearText}>Clear</button>
      </div>
    </div>
  );
}
