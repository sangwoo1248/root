import React from "react";
import { motion } from "framer-motion";

const ContentsPage: React.FC = () => {
  // 콘텐츠 데이터 배열 (유지보수를 위해 데이터로 분리)
  const contents = [
    {
      id: 1,
      title: "심마니 프로젝트",
      img: "/img/poster.jpg",
      description: (
        <>
          색을 통한 심리를 다루고 있고,
          <br />
          잠재력에 대한 설명 뿐 아니라 다른 컬러가 나에게 의미하는 것이
          무엇인지에 대한 해석을 해드릴 뿐 아니라
          <br />
          추가적인 검사를 통해서 "룻북-상담 결과 책자"을 선물로 드리고 있습니다.
        </>
      ),
    },
    {
      id: 2,
      title: "별자리 테스트",
      img: "/img/star.jpg",
      description: (
        <>
          ✨ 7월 첫째 주, 별자리가 전하는 메시지 ✨<br />
          이번 주, 별들은 너에게 어떤 이야기를 들려줄까? 사소한 하루도, 별의
          흐름을 따라가면 조금 더 특별해질지 몰라요.
        </>
      ),
    },
    {
      id: 3,
      title: "사물심리 테스트",
      img: "/img/object.jpg",
      description:
        "이 테스트는 당신의 무의식과 인간관계, 스트레스 반응 등을 가볍게 반영합니다.",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-24 pb-20"
    >
      <section className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-black text-rootGreen text-center mb-20 tracking-widest">
          CONTENTS
        </h2>

        <div className="space-y-32">
          {contents.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 이미지 영역 (원형 유지) */}
              <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 overflow-hidden rounded-full shadow-2xl border-4 border-rootBeige">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* 텍스트 영역 */}
              <div
                className={`flex-grow text-center md:text-left ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-rootCharcoal mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg break-keep font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default ContentsPage;
