import React from 'react';
import { KeyConcept as KeyConceptType, ProgressStatus } from '../types';
import { CheckCircleIcon, QuestionMarkCircleIcon, XCircleIcon } from './icons';

interface KeyConceptProps {
  concept: KeyConceptType;
  status: ProgressStatus;
  onStatusChange: (conceptId: string, status: ProgressStatus) => void;
}

const statusConfig = {
    [ProgressStatus.Yes]: {
        button: "bg-lime-400/20 text-lime-300 hover:bg-lime-400/40",
        icon: <CheckCircleIcon className="w-5 h-5" />
    },
    [ProgressStatus.Maybe]: {
        button: "bg-yellow-400/20 text-yellow-300 hover:bg-yellow-400/40",
        icon: <QuestionMarkCircleIcon className="w-5 h-5" />
    },
    [ProgressStatus.No]: {
        button: "bg-red-500/20 text-red-400 hover:bg-red-500/40",
        icon: <XCircleIcon className="w-5 h-5" />
    },
     [ProgressStatus.Unselected]: {
        button: "bg-slate-600/50 text-slate-400 hover:bg-slate-600/80",
        icon: null
    }
}

const KeyConcept: React.FC<KeyConceptProps> = ({ concept, status, onStatusChange }) => {
  return (
    <div className="py-3 px-4 bg-slate-900/50 rounded-lg flex items-start gap-4">
      <div className="flex-1">
        <p className="text-slate-300">{concept.text}</p>
      </div>
      <div className="flex gap-2">
        {(Object.keys(ProgressStatus) as Array<keyof typeof ProgressStatus>)
            .filter(key => ProgressStatus[key] !== ProgressStatus.Unselected)
            .map(key => {
            const currentStatus = ProgressStatus[key];
            const isActive = status === currentStatus;
            return (
                 <button
                    key={currentStatus}
                    onClick={() => onStatusChange(concept.id, isActive ? ProgressStatus.Unselected : currentStatus)}
                    className={`p-2 rounded-full transition-all duration-200 ${
                        isActive ? statusConfig[currentStatus].button : 'bg-slate-700 hover:bg-slate-600 text-slate-400'
                    }`}
                    aria-label={`Mark as ${currentStatus}`}
                    title={`Mark as ${currentStatus}`}
                >
                    {statusConfig[currentStatus].icon}
                </button>
            )
        })}
      </div>
    </div>
  );
};

export default KeyConcept;