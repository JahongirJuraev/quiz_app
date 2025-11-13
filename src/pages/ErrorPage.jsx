import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  // console.log(error);

  if (error.status === 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>404 - PAGE NOT FOUND</h3>
        </div>
        <Link to={"/"} className="btn">
          GO TO HOME
        </Link>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <div>
        <h3>SOMETHING WENT WRONG :(</h3>
      </div>
      <Link to={"/"} className="btn">
        GO TO HOME
      </Link>
    </div>
  );
}

export default ErrorPage;
