// rrd imports
import { useParams } from "react-router-dom";

//custom hooks
import { useFetch } from "../hooks/useFetch";

//react hooks
import { useEffect } from "react";

//pages
import Test from "../pages/Test"

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/quizzes?title=${title}`);

  //console.log(quizzes);
  
  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);
  
  return (
    <section className="quiz-container container">
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {quizzes && <Test questions={quizzes[0]} />}
    </section>
  );
}

export default Quiz;
