import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    // 배경색: rootBeige (#F9F8F6), 텍스트: rootCharcoal (#2D2D2D) 적용
    // 만약 tailwind.config.js에 색상 설정이 안 되어 있다면 bg-[#F9F8F6] text-[#2D2D2D]로 변경하세요.
    <footer className="bg-rootBeige text-rootCharcoal py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* [왼쪽] 로고, SNS 아이콘, 회사 정보 */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="flex items-center mb-4">
              {/* 로고 이미지 */}
              <img src="/img/logo2.png" alt="Root 로고" className="h-10 mr-4" />

              {/* SNS 아이콘 */}
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/root.office_?igsh=djF5cGo0bGtnZm1l"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <img
                    src="/img/instar.jpg"
                    alt="인스타그램"
                    className="h-6 w-6"
                  />
                </a>
                <a
                  href="https://pf.kakao.com/_yourchannel"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <img
                    src="/img/ca.png"
                    alt="카카오톡 채널"
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </div>

            {/* 회사 정보 텍스트 */}
            <div className="text-sm leading-relaxed text-gray-600 font-sans">
              <p className="mb-1">
                <strong>root</strong> | 대표이사 김가희
              </p>
              <p className="mb-1">
                사업자번호 697-24-02166 | 전화번호 031-730-6222
              </p>
              <p className="mb-1">
                경기도 성남시 분당구 성남대로 916번길 7, 703호(야탑동, 서일빌딩)
              </p>
              <p className="mt-3 text-gray-400 text-xs">
                &copy; 2025 root all rights reserved
              </p>
            </div>
          </div>

          {/* [오른쪽] 메뉴 링크 */}
          <div className="w-full md:w-1/2 md:text-right">
            <ul className="space-y-2 text-sm font-medium">
              {/* React Router의 Link 컴포넌트를 사용하거나, 아직 페이지가 없다면 a 태그 유지 */}
              <li>
                <Link
                  to="/info"
                  className="hover:text-rootGold transition-colors"
                >
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link
                  to="/contents"
                  className="hover:text-rootGold transition-colors"
                >
                  콘텐츠
                </Link>
              </li>
              {/* App.tsx에 정의된 경로(/programs)와 연결 */}
              <li>
                <Link
                  to="/programs"
                  className="hover:text-rootGold transition-colors"
                >
                  프로그램
                </Link>
              </li>
              <li>
                <Link
                  to="/supporters"
                  className="hover:text-rootGold transition-colors"
                >
                  문의하기
                </Link>
              </li>
              <li>
                <Link
                  to="/customer"
                  className="hover:text-rootGold transition-colors"
                >
                  고객센터
                </Link>
              </li>
              <li>
                <Link
                  to="/subscription"
                  className="hover:text-rootGold transition-colors"
                >
                  서포터즈
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
