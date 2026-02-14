
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PROGRAMS } from '../constants';
import ProgramCard from '../components/ProgramCard';

const ProgramsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-rootGreen mb-4 block">Our Solutions</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">당신을 위한 <span className="text-rootGreen">정렬</span>의 경로</h2>
          <p className="text-xl text-rootCharcoal/60 leading-relaxed font-light">
            어떤 단계에 계시든, ROOT는 당신의 본질을 찾아가는 가장 명확한 지도를 제공합니다.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-full max-w-sm"
            >
              <ProgramCard
                program={program}
                onSelect={() => navigate('/booking')}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramsPage;
