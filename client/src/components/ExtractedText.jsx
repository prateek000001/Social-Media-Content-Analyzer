export default function ExtractedText({ extracted, setExtracted }) {
  return (
    <div className="p-4 rounded-xl bg-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg">Extracted text</h2>
        <div className="text-xs text-gray-500">Editable area</div>
      </div>
      <textarea
        className="flex-1 p-3 bg-transparent outline-none text-sm font-mono resize-none scrollbar-thin scrollbar-thumb-gray-700"
        placeholder="Extracted text will appear here..."
        value={extracted}
        onChange={(e) => setExtracted(e.target.value)}
      />
      <div className="mt-4 p-4 rounded-lg bg-card text-sm text-gray-400">
        Tip: Good-quality images give better results.
      </div>
    </div>
  );
}
