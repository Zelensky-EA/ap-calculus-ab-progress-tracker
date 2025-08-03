import React from 'react';
import { Unit as UnitType, StudentProgress, ICanStatement, ProgressStatus } from '../types';
import Topic from './Topic';
import ProgressBar from './ProgressBar';

interface UnitViewProps {
  unit: UnitType;
  studentProgress: Record<string, ProgressStatus>;
  onStatusChange: (conceptId: string, status: ProgressStatus) => void;
  calculateICanProgress: (iCan: ICanStatement) => number;
  onVocabClick: (term: string) => void;
  unitProgress: number;
}

const InfoCard: React.FC<{title: string, children: React.ReactNode, className?: string}> = ({ title, children, className }) => {
    return (
        <div className={`bg-slate-800/40 p-4 rounded-lg border border-slate-700/50 ${className}`}>
            <h3 className="text-md font-semibold text-cyan-300 mb-2 uppercase tracking-wider" style={{ textShadow: '0 0 5px #67e8f9' }}>{title}</h3>
            <div className="text-slate-300 leading-relaxed text-sm">
                {children}
            </div>
        </div>
    );
};

const UnitView: React.FC<UnitViewProps> = ({ unit, studentProgress, onStatusChange, calculateICanProgress, onVocabClick, unitProgress }) => {
  return (
    <div className="p-4 md:p-6 animate-fade-in">
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold mb-1" style={{color: unit.color}}>{unit.name}</h1>
        <div className="flex gap-4 text-sm text-slate-400">
            <span>Exam Weighting: <strong>{unit.examWeighting}</strong></span>
            <span>Suggested Periods: <strong>{unit.classPeriods}</strong></span>
        </div>
      </header>

      <div className="mb-8 bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-md font-semibold text-slate-200">Unit Progress</h3>
          <span className="text-lg font-bold" style={{color: unit.color}}>{Math.round(unitProgress)}%</span>
        </div>
        <ProgressBar progress={unitProgress} color={unit.color} />
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard title="Key Understanding" className="md:col-span-2">
            <p>{unit.keyUnderstanding}</p>
        </InfoCard>
        <InfoCard title="Big Ideas & Essential Questions">
            <ul className="list-disc pl-5 space-y-2">
                {unit.bigIdeas.map((idea, i) => <li key={i}><strong>{idea.title}:</strong> {idea.question}</li>)}
            </ul>
        </InfoCard>
        <InfoCard title="Mathematical Practices Focus">
            <p>{unit.sciencePractices}</p>
        </InfoCard>
        <InfoCard title="Exam Tips & Boundaries" className="md:col-span-2">
            <p>{unit.examTips}</p>
        </InfoCard>
         <InfoCard title="Suggested Vocabulary" className="md:col-span-2">
            <div className="flex flex-wrap gap-2">
                {unit.vocabulary.map(term => (
                    <button 
                        key={term} 
                        onClick={() => onVocabClick(term)}
                        className="bg-cyan-400/10 text-cyan-300 px-2.5 py-1 text-sm rounded-md hover:bg-cyan-400/20 border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
                    >
                        {term}
                    </button>
                ))}
            </div>
        </InfoCard>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{borderColor: unit.color, textShadow: `0 0 8px ${unit.color}90`}}>Topics</h2>
        {unit.topics.map(topic => (
          <Topic
            key={topic.id}
            topic={topic}
            studentProgress={studentProgress}
            onStatusChange={onStatusChange}
            calculateICanProgress={calculateICanProgress}
            color={unit.color}
          />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 border-b-2 pb-2" style={{borderColor: unit.color, textShadow: `0 0 8px ${unit.color}90`}}>Unit Formula Sheet</h2>
        <div className="space-y-4">
            {unit.formulas && unit.formulas.length > 0 ? (
                unit.formulas.map((section, index) => (
                    <div key={index} className="bg-slate-800/40 p-5 rounded-lg border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-cyan-300 mb-3" style={{ textShadow: '0 0 6px #67e8f960' }}>{section.title}</h3>
                        <div className="text-slate-300 leading-relaxed space-y-3" dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                ))
            ) : (
                <div className="bg-slate-800/40 p-5 rounded-lg border border-slate-700/50">
                    <p className="text-slate-400">No specific formulas or theorems from the reference cheat sheet for this unit.</p>
                </div>
            )}
        </div>
      </div>

    </div>
  );
};

export default UnitView;