
import React from 'react';
import { Program, Step } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'root-single',
    name: 'ROOT 1:1 컨설팅',
    subtitle: '단 한 번의 정렬',
    description: '감정 소모가 아닌 사고 구조의 설계를 다룹니다. 삶의 우선순위가 엉켜있을 때 단번에 매듭을 풉니다.',
    duration: '90분',
    features: ['사전 질문지 분석', '사고 구조 해체', '세션 요약 리포트'],
    tag: 'Recommended'
  },
  {
    id: 'rooted-4weeks',
    name: 'ROOTED: 4주 프로그램',
    subtitle: '무너지지 않는 내면 설계',
    description: '흔들려도 다시 돌아올 수 있는 당신만의 뿌리(Root)를 완성하는 4주간의 집중 컨설팅입니다.',
    duration: '4주 (주 1회)',
    features: ['개인 Root Map', '기준 선언문(Declaration)', '근본 복구 매뉴얼'],
    tag: 'Premium'
  }
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'ROOT SCAN',
    subtitle: '내면의 뿌리 진단',
    focus: ['반복되는 감정 패턴', '자존감의 출처', '불안의 근원'],
    result: '내면 구조 맵 (Root Map)',
    questions: ['나는 언제 나를 잃는가?', '결정할 때 작동하는 주된 감정은?']
  },
  {
    number: 2,
    title: 'CLEANSING',
    subtitle: '왜곡된 기준 제거',
    focus: ['타인의 욕망 필터링', '자동 반응 패턴', '공허함의 이유'],
    result: '기준 선별 리스트',
    questions: ['이 노력은 누구를 위한 것인가?', '버려야 할 가짜 욕망은?']
  },
  {
    number: 3,
    title: 'RE-ALIGN',
    subtitle: '근본 기준 재정렬',
    focus: ['맞춤형 경쟁 방식', '관계의 거리감', '가치관 우선순위'],
    result: '개인 기준 선언문 (Root Declaration)',
    questions: ['이 선택은 나를 확장시키는가?', '지금의 불안은 성장인가 경고인가?']
  },
  {
    number: 4,
    title: 'ROOTED ACTION',
    subtitle: '흔들리지 않는 실행',
    focus: ['복구 루틴 설계', '의사결정 프레임', '감정 정박지'],
    result: '근본 복구 매뉴얼',
    questions: ['다시 무너질 때 무엇을 볼 것인가?', '최소한의 복구 행동은?']
  }
];
