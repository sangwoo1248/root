import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectPage: React.FC = () => {
  // 프로그램 데이터를 배열로 관리하여 유지보수를 편하게 합니다.
  const projects = [
    {
      id: 1,
      title: "심마니 프로젝트",
      img: "/img/poster.jpg",
      description:
        "심봤다~! 당신은 어떤 산삼이 되고 싶으신가요? 숨어있던 나의 잠재력을 알아보는 프로젝트",
      path: "/explanation", // 자세히 보기 클릭 시 이동할 경로
      status: "active",
    },
    {
      id: 2,
      title: "IN(side)-LINE 프로그램",
      img: "/img/inline.jpg",
      description:
        "몰랐던 나의 무의식 궁금하지 않으신가요? 무의식의 심리로 나를 찾아 떠나보아요",
      path: "/explanation",
      status: "active",
    },
    {
      id: 3,
      title: "AI 상담",
      img: null,
      description:
        "이제는 비대면 상담의 시대! 정확한 분석을 통해 나의 심리를 상담해주는 시드(SEED)와 대화해보세요 (준비중....)",
      path: "#",
      status: "disabled",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container mx-auto px-6 py-24 min-h-screen"
    >
      <div className="text-4xl font-serif font-black text-rootGreen mb-16 text-center tracking-widest">
        OUR PROJECT
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center gap-8 p-8 bg-white shadow-lg rounded-2xl border border-black/5 transition-all hover:shadow-xl ${
              project.status === "disabled" ? "opacity-50" : ""
            }`}
          >
            {project.img && (
              <div className="w-40 h-40 flex-shrink-0">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-full border-4 border-rootBeige"
                />
              </div>
            )}
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-bold text-rootCharcoal mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              {project.status === "active" && (
                <Link
                  to={project.path}
                  className="inline-block bg-rootGreen text-white px-8 py-2 rounded-lg hover:bg-black transition-colors"
                >
                  자세히 보기
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectPage;
