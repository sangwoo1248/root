import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const CustomerPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "심마니가 뭔가요?",
      answer: "심마니는 캐릭터입니다.",
    },
    {
      question: "프로그램은 어떻게 신청하나요?",
      answer: "서포터즈 신청하기 또는 고객센터 문의방법 신청하기 눌러주세요.",
    },
    {
      question: "준비중....",
      answer: "준비중....",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 px-6 bg-rootBeige/30 min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rootGreen mb-6">
            ROOT 고객센터
          </h1>
          <p className="text-rootCharcoal/70 text-lg leading-relaxed">
            안녕하세요. ROOT 고객센터입니다.
            <br />
            무엇을 도와드릴까요?
          </p>
        </header>

        {/* 정보 카드 섹션 */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
            <div className="text-3xl mb-4">🕘</div>
            <h3 className="text-xl font-bold mb-4">이용 시간</h3>
            <ul className="space-y-2 text-rootCharcoal/70 text-sm">
              <li>
                고객 상담:{" "}
                <strong className="text-rootCharcoal">
                  평일 09:00 - 18:00
                </strong>
              </li>
              <li>
                점심 시간:{" "}
                <strong className="text-rootCharcoal">12:00 - 13:00</strong>
              </li>
              <li>
                주말 및 공휴일:{" "}
                <strong className="text-rootCharcoal">휴무</strong>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-4">문의 방법</h3>
              <p className="text-sm text-rootCharcoal/70 mb-6">
                이메일:{" "}
                <a
                  href="mailto:root.office120@gmail.com"
                  className="text-rootGreen font-medium underline"
                >
                  root.office120@gmail.com
                </a>
              </p>
            </div>
            <Link
              to="/supporters"
              className="w-full py-3 bg-rootGreen text-white text-center rounded-xl font-bold hover:bg-black transition-colors"
            >
              더 알아보기
            </Link>
          </div>
        </div>

        {/* FAQ 섹션 */}
        <div className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
          <div className="p-6 border-b border-black/5 bg-rootBeige/10">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-rootGreen">❓</span> 자주 묻는 질문
            </h2>
          </div>

          <div className="divide-y divide-black/5">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-rootBeige/20 transition-colors"
                >
                  <span className="font-medium text-rootCharcoal">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-rootGreen" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-rootBeige/10 text-rootCharcoal/70 border-t border-black/5 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerPage;
