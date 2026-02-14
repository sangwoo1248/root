
import React from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../constants';
import { useNavigate } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('신청이 성공적으로 접수되었습니다. 24시간 이내에 안내 메일을 보내드립니다.');
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 bg-white min-h-screen"
    >
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-rootGreen mb-4 block">Reservation</span>
          <h2 className="text-5xl font-serif font-bold mb-6">시작을 위한 대화</h2>
          <p className="text-rootCharcoal/60 leading-relaxed">
            나만의 기준을 세우는 첫걸음입니다.<br />
            아래 정보를 기재해주시면 담당 컨설턴트가 연락드립니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-rootGreen mb-2 transition-colors group-focus-within:text-black">Full Name</label>
            <input 
              type="text" 
              required 
              className="w-full p-4 bg-rootBeige border-none outline-none focus:ring-1 focus:ring-rootGreen transition-all text-lg font-light"
              placeholder="홍길동"
            />
          </div>
          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-rootGreen mb-2">Contact Method</label>
            <input 
              type="text" 
              required 
              className="w-full p-4 bg-rootBeige border-none outline-none focus:ring-1 focus:ring-rootGreen transition-all text-lg font-light"
              placeholder="이메일 혹은 전화번호"
            />
          </div>
          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-rootGreen mb-2">Interested Program</label>
            <select className="w-full p-4 bg-rootBeige border-none outline-none focus:ring-1 focus:ring-rootGreen transition-all text-lg font-light appearance-none">
              {PROGRAMS.map(p => <option key={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div className="group">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-rootGreen mb-2">Message (Context)</label>
            <textarea 
              required
              className="w-full p-4 bg-rootBeige border-none outline-none focus:ring-1 focus:ring-rootGreen transition-all text-lg font-light h-40 resize-none"
              placeholder="현재 상황이나 컨설팅을 통해 얻고 싶은 점을 적어주세요."
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-rootGreen text-white py-6 text-lg font-bold hover:bg-black transition-all shadow-2xl active:scale-[0.98]"
          >
            Confirm Application
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default BookingPage;
