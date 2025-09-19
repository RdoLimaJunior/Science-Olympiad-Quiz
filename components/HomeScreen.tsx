import { BookOpenIcon, PencilSquareIcon, ChartBarIcon } from './icons';

interface HomeScreenProps {
  onNavigate: (screen: 'practice' | 'study' | 'performance') => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-4xl w-full border border-slate-700">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">Olimpíada de Ciências</h1>
        <p className="text-slate-300 mb-8 text-lg">Seu centro de preparação para a Vanda</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NavButton onClick={() => onNavigate('study')} text="Estudar" icon={<BookOpenIcon className="w-8 h-8"/>} color="teal" />
          <NavButton onClick={() => onNavigate('practice')} text="Praticar" icon={<PencilSquareIcon className="w-8 h-8"/>} color="cyan" />
          <NavButton onClick={() => onNavigate('performance')} text="Meu Desempenho" icon={<ChartBarIcon className="w-8 h-8"/>} color="sky" />
        </div>
      </div>
    </div>
  );
};

const NavButton: React.FC<{onClick: () => void; text: string; icon: React.ReactNode; color: string}> = ({ onClick, text, icon, color }) => {
    const colorClasses: Record<string, string> = {
        teal: 'bg-teal-500/80 hover:bg-teal-500/100',
        cyan: 'bg-cyan-500/80 hover:bg-cyan-500/100',
        sky: 'bg-sky-500/80 hover:bg-sky-500/100',
    };

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-4 text-white font-bold py-6 px-6 rounded-lg text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl ${colorClasses[color]}`}
        >
            {icon}
            <span>{text}</span>
        </button>
    );
}

export default HomeScreen;