import { useState } from 'react';
import FileUpload from '../components/FileUpload';
import StatusPanel from '../components/StatusPanel';
import ActionsPanel from '../components/ActionsPanel';
import ExtractedText from '../components/ExtractedText';
import Header from '../components/Header';
import { uploadFile } from '../services/extractService';

export default function Home() {
  const [extracted, setExtracted] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFile = async (file) => {
    setFileName(file.name);
    setStatus('uploading');
    setMessage('Uploading and extracting text...');
    try {
      const res = await uploadFile(file);
      setExtracted(res.text || '');
      setStatus('success');
      setMessage('Extraction finished');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage('Something went wrong');
    }
  };

  const clearText = () => {
    setExtracted('');
    setStatus('idle');
    setFileName('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-bg text-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <Header />
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-1">
            <FileUpload onFileSelected={handleFile} />
            <StatusPanel status={status} message={message} fileName={fileName} />
            <ActionsPanel extracted={extracted} fileName={fileName} clearText={clearText} />
          </section>
          <section className="md:col-span-2">
            <ExtractedText extracted={extracted} setExtracted={setExtracted} />
          </section>
        </main>
      </div>
    </div>
  );
}
