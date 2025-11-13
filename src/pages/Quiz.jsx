// rrd imports
import { useParams } from "react-router-dom";

//custom hooks
import { useFetch } from "../hooks/useFetch";

//react hooks
import { useEffect } from "react";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(`https://github.com/JahongirJuraev/frontend_quiz_app_api/blob/main/db.json/quizzes?title=${title}`);
  console.log(quizzes);
  



  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);
  return (
    <section className="quiz-container container">
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {quizzes &&
        quizzes.map((quiz) => {
          <h1>{quiz.title}</h1>;
        })}
    </section>
  );
}

export default Quiz;
