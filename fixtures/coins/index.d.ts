export interface CoinIntroQuestionProp {
  title: JSX.Element;
  answers: JSX.Element;
}

export interface CoinIntroProp {
  title: string | JSX.Element;
  coin: string;
  logo: string;
  questions: CoinIntroQuestionProp[];
}
