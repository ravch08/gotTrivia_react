import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-24 bg-slate-600 p-6 text-center">
      <Link to="/">
        <span className="text-3xl font-light text-white">GOT </span>
        <span className="text-3xl font-extrabold uppercase text-slate-200">
          Trivia
        </span>
      </Link>
    </header>
  );
};

export default Header;
