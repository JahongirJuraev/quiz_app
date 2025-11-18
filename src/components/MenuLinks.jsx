// rrd  imports
import { Link } from "react-router-dom";
// hooks
import { useFetch } from "../hooks/useFetch";

function MenuLinks() {
  const {
    data: quizzes,
    error,
    isPending,
  } = useFetch("https://api.jsonbin.io/v3/b/691c556ad0ea881f40effc28", {
    headers: {
     "X-Access-Key": "$2a$10$NHlq0o52lBvd4cdMyuarwej6zTL45EDN5gsUvu6ArHTeTE2un/TuK",
      "X-Bin-Meta": "false",
    },
  });

  const quizList = quizzes?.record?.quizzes;

  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <div className="menu-list">
        {quizList &&
          quizList.map((quiz) => (
            <Link
              to={`/quiz/${quiz.title}`}
              key={quiz.title}
              className="header-logo menu-item"
            >
              <figure style={{ backgroundColor: quiz.color }}>
                <img src={quiz.icon} alt={quiz.title} />
              </figure>
              <span>{quiz.title}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}


export default MenuLinks;
