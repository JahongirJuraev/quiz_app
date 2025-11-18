//rrdom import
import { Link } from "react-router-dom";

function Result({ title, icon, color, correctAnswerCount, questions }) {
  return (
    <div className="tesr-container result-container">
      <div className="home-content">
        <h1 className="home-title">
          <span>Quiz completed</span>
          <span>Your SCORE {correctAnswerCount}</span>
        </h1>
      </div>
      <div className="test-completed">
        <div className="test-completed-body">
          <div className="menu-item header-logo">
            <figure style={{ backgroundColor: color }}>
              <img src={`.${icon}`} alt="logo" />
            </figure>
            <span>{title}</span>
          </div>
          <div className="big-text">{correctAnswerCount}</div>
          <p>out of {questions.length}</p>
        </div>
        <Link to="/" className="btn playagain">
          Play again
        </Link>
      </div>
    </div>
  );
}

export default Result;
