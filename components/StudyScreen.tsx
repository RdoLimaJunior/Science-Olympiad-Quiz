import React, { useState } from 'react';
import { studyMaterials } from '../constants/studyMaterials';
import { ArrowLeftIcon } from './icons';

interface StudyScreenProps {
  onGoBack: () => void;
}

const studySubjects = Object.keys(studyMaterials);

const StudyScreen: React.FC<StudyScreenProps> = ({ onGoBack }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const currentMaterial = selectedSubject ? studyMaterials[selectedSubject] : null;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8 relative">
        <button
          onClick={selectedSubject ? () => setSelectedSubject(null) : onGoBack}
          className="absolute top-6 left-6 text-sm text-slate-400 hover:text-cyan-400 transition flex items-center gap-1 z-10"
          aria-label="Voltar"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          {selectedSubject ? 'Módulos' : 'Menu'}
        </button>
        
        {!currentMaterial ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 text-center pt-8">Área de Estudo</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studySubjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-bold p-8 rounded-lg text-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  {subject}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 text-center pt-8">{currentMaterial.title}</h2>
            <img 
              src={currentMaterial.imageUrl} 
              alt={`Ilustração para ${currentMaterial.title}`}
              className="w-full h-auto max-h-72 object-cover rounded-lg mb-6 shadow-lg"
            />
            <div className="prose prose-lg max-w-none">
                <p>{currentMaterial.summary}</p>

                <h3>Vídeo de Apoio</h3>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                        src={currentMaterial.videoUrl}
                        title={`Vídeo sobre ${currentMaterial.title}`}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full rounded-lg shadow-md"
                    ></iframe>
                </div>
                
                <h3>Dicas Rápidas</h3>
                <ul>
                    {currentMaterial.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyScreen;