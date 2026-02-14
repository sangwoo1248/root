
import React from 'react';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
  onSelect: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, onSelect }) => {
  return (
    <div className="bg-white border border-[#E5E3DF] p-8 flex flex-col h-full hover:shadow-2xl transition-all group relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div>
          {program.tag && (
            <span className="text-[10px] font-bold tracking-widest text-rootGreen uppercase block mb-2">
              {program.tag}
            </span>
          )}
          <h3 className="text-2xl font-serif font-bold group-hover:text-rootGreen transition-colors">{program.name}</h3>
          <p className="text-sm text-[#5E5A54] mt-1">{program.subtitle}</p>
        </div>
      </div>
      
      <p className="text-sm text-rootCharcoal leading-relaxed mb-8 flex-grow">
        {program.description}
      </p>

      <div className="space-y-3 mb-8">
        {program.features.map((feature, i) => (
          <div key={i} className="flex items-center text-xs text-[#5E5A54]">
            <span className="w-1.5 h-1.5 bg-rootGreen mr-3 opacity-60"></span>
            {feature}
          </div>
        ))}
      </div>

      <button 
        onClick={onSelect}
        className="w-full border border-rootGreen text-rootGreen py-3 text-sm font-semibold hover:bg-rootGreen hover:text-white transition-all duration-300"
      >
        View Details
      </button>
    </div>
  );
};

export default ProgramCard;
