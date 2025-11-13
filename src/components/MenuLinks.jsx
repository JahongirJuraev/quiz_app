// rrd  imports
import { Link } from "react-router-dom";
//hooks
import { useFetch } from "../hooks/useFetch";

function MenuLinks() {
  const {
    data: quizzess,
    error,
    isPending,
  } = useFetch(`https://my-json-server.typicode.com/JahongirJuraev/frontend_quiz_app_api/quizzes`);
  
  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <div className="menu-list">
        
        {quizzess &&
          quizzess.map((quiz) => {
            return (
              <Link
                to={`/quiz`}
                key={quiz.title}
                className="header-logo menu-item"
              >
                <figure style={{ backgroundColor: quiz.color }}>
                  <img src={quiz.icon} alt={quiz.title} />
                </figure>
                <span>{quiz.title}</span>
              </Link>
            );
          })}
      </div>
      
    </div>
  );
}

export default MenuLinks;
