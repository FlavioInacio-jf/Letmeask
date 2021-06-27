import EmptyQuestionsIcon  from "../../assets/imagens/empty-questions.svg";
import './styles.scss';

export function EmptyQuestions() {
  return (
    <div id="content">
      <img src={EmptyQuestionsIcon} alt="Empty questions" />
      <span>Nenhuma pergunta por aqui...</span>
      <span>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</span>
    </div>
  );
}