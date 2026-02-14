import React from "react";
import { motion } from "framer-motion";

const InfoPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12 max-w-5xl"
    >
      {/* 1. 상단 로고 및 소개 텍스트 섹션 */}
      <section className="text-center mb-20">
        <div className="flex justify-center mb-8">
          <img
            src="/img/logo2.png"
            alt="말풍선 로고"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>

        <div className="mx-auto text-center">
          <p className="text-rootCharcoal text-lg md:text-xl leading-loose font-medium break-keep">
            룻트는 나의 가치를 찾아가는 심리상담 플랫폼입니다.
            <br className="hidden md:block" />
            우리는 모두 '나'라는 사람이란 이유로 가치가 있지만 그것을 잊고
            살아가고 있습니다.
            <br className="hidden md:block" />
            내가 잊었던 나의 가치를, 나의 심리를 진단하고 알아보는 과정을 통해서
            <br className="hidden md:block" />
            진정한 나를 알아보면 내가 원하는 삶이 무엇이고 내 삶을 내 뜻대로
            살아갈 수 있습니다.
            <br className="hidden md:block" />
            <br />
            이것을 기반으로 저희 룻트는 다양한 심리 콘텐츠를 제작하며
            <br className="hidden md:block" />
            심리라고 하는 어려운 나의 마음을 좀 더 친숙하게 다가갈 수 있도록
            노력하고 있습니다.
            <br className="hidden md:block" />
            룻트를 통해 나의 가치를 찾고 나의 방향을 찾아보세요!
          </p>
        </div>
      </section>

      {/* 2. 하단 정보 카드 섹션 (ROOT, √ROOT, ROUTE) */}
      <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* 왼쪽: 텍스트 카드 영역 */}
        <div className="flex-grow space-y-10 w-full lg:w-3/5">
          {/* 카드 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <h4 className="text-2xl font-serif font-bold text-rootGreen mb-3">
              ROOT{" "}
              <span className="text-base text-rootCharcoal font-sans font-normal">
                나의 뿌리
              </span>
            </h4>
            <p className="text-gray-600 leading-relaxed">
              나의 근본을 찾아 ‘나’라는 사람이 누구인지 이해하며 가치를 찾아갈
              수 있습니다.
              <br />
              전문적인 분석 결과를 통해 나의 뿌리를 확인하세요.
            </p>
          </div>

          {/* 카드 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <h4 className="text-2xl font-serif font-bold text-rootGreen mb-3">
              √ROOT{" "}
              <span className="text-base text-rootCharcoal font-sans font-normal">
                나의 모든 수
              </span>
            </h4>
            <p className="text-gray-600 leading-relaxed">
              내가 가지고 있는 강점들과 약점들을 분석하여 내가 성장할 수 있는
              것들을 발견하며 나의 가치를 찾아보세요.
            </p>
          </div>

          {/* 카드 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <h4 className="text-2xl font-serif font-bold text-rootGreen mb-3">
              ROUTE{" "}
              <span className="text-base text-rootCharcoal font-sans font-normal">
                나의 방향
              </span>
            </h4>
            <p className="text-gray-600 leading-relaxed">
              불확실한 미래를 나라는 사람의 가치를 찾아 보다 확실한 방향 제시를
              해드립니다.
              <br />
              혹여 잘못 길을 가더라도 다시 바른 길로 갈 수 있도록 선택에 있어서
              확신을 가져보세요.
            </p>
          </div>
        </div>

        {/* 가운데 구분선 (PC버전에서만 보임) */}
        <div className="hidden lg:block w-px h-96 bg-gray-200"></div>

        {/* 오른쪽: 로고 이미지 */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <img
            src="/img/logo2.png"
            alt="Root 로고"
            className="w-full max-w-xs opacity-80"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default InfoPage;
