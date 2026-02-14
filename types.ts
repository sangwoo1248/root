
export interface Program {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  price?: string;
  features: string[];
  tag?: string;
}

export interface Step {
  number: number;
  title: string;
  subtitle: string;
  focus: string[];
  result: string;
  questions: string[];
}

export enum NavigationTab {
  HOME = 'home',
  PROGRAMS = 'programs',
  BOOKING = 'booking'
}
