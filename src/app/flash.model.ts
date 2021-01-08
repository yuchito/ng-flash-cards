export type IFlash = {
  id: number;
  question: string;
  answer: string;
  show: boolean;
  remembered?: 'correct' | 'incorrect';
}
