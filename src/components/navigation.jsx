import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/#page-top">
            ВТБ Активности
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to={"/marketplace"}>Маркетплейс</Link>
            </li>
            <li>
              <a href='/#activities' className='page-scroll'>
                Активности
              </a>
            </li>
            <li>
              <Link to={"/users"}>Список пользователей</Link>
            </li>
            <li>
              <Link to={"/profile"}>Профиль</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
