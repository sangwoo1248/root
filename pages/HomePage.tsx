
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STEPS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#F1F0ED]">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560" className="w-full h-full object-cover" alt="Nature" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm font-bold tracking-[0.6em] text-rootGreen/60 uppercase block mb-8"
          >
            Exclusive Structural Consulting
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-10 text-rootCharcoal tracking-tight"
          >
            문제를 고치기 전에,<br />
            <span className="text-rootGreen italic">뿌리</span>를 다시 세운다.
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-2xl text-rootCharcoal/70 font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            당신이 느끼는 공허함과 혼란은 의지의 문제가 아닙니다.<br />
            내면의 기준점이 타인에게 가 있기 때문입니다.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/programs" className="bg-rootGreen text-white px-12 py-5 text-sm font-bold hover:bg-black transition-all shadow-2xl flex items-center gap-3 group">
              Start Re-Alignment <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introspection Section */}
      <section className="py-32 px-6 bg-white border-y border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-20">
            혹시 이런 <span className="text-rootGreen italic font-black">감각</span>에 익숙하신가요?
          </h2>
          <div className="grid gap-4 mb-20">
            {[
              "열심히 사는데 자꾸 공허하다",
              "나답게 산다는 게 뭔지 모르겠다",
              "관계에서 늘 내가 손해 보는 느낌이다",
              "많은 조언을 들어도 늘 다시 제자리다"
            ].map((text, i) => (
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.1 }}
                key={i}
                className="bg-rootBeige p-8 text-xl md:text-2xl font-light text-rootCharcoal/80 border-l-2 border-rootGreen/20 italic"
              >
                "{text}"
              </motion.div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-rootCharcoal/50 mb-4 uppercase tracking-widest text-xs font-bold">The Verdict</p>
            <h3 className="text-4xl md:text-6xl font-light leading-tight">
              당신은 <span className="font-serif italic font-black text-rootGreen underline decoration-rootGold underline-offset-8">기준을 잃은 상태</span>입니다.
            </h3>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-rootBeige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-rootGreen mb-4 block">The Methodology</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold">4-Step Structural Re-Alignment</h2>
            </div>
            <p className="text-rootCharcoal/60 max-w-xs text-sm leading-relaxed">
              ROOT는 감정을 달래지 않습니다. 대신 당신의 사고 회로를 해체하고 다시 조립합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border border-black/5 hover:border-rootGreen transition-colors group h-full flex flex-col"
              >
                <span className="text-6xl font-serif italic text-rootGreen/10 group-hover:text-rootGreen/20 transition-colors mb-4 block">
                  0{step.number}
                </span>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-xs text-rootCharcoal/40 mb-8 uppercase tracking-widest">{step.subtitle}</p>
                <div className="flex-grow">
                  <ul className="space-y-3 mb-10">
                    {step.focus.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-rootCharcoal/70">
                        <CheckCircle2 size={14} className="mt-1 text-rootGreen/40" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-dashed border-black/10">
                  <span className="text-[10px] font-bold text-rootGreen uppercase tracking-tighter block mb-1">Deliverable</span>
                  <p className="text-sm font-semibold">{step.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
