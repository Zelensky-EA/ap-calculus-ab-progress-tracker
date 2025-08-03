import React, { useEffect } from 'react';
import { vocabularyDefs } from '../constants';

interface VocabularyModalProps {
  term: string | null;
  onClose: () => void;
}

const VocabularyModal: React.FC<VocabularyModalProps> = ({ term, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!term) return null;

  const definition = vocabularyDefs[term as keyof typeof vocabularyDefs] || "Definition not found.";

  return (
    <div 
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in"
        onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-xl shadow-2xl p-6 border border-slate-700 max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-cyan-300" style={{ textShadow: '0 0 8px #67e8f9' }}>{term}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
        </div>
        <p className="text-slate-300 leading-relaxed">{definition}</p>
      </div>
    </div>
  );
};

export default VocabularyModal;