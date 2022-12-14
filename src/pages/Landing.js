import main from "../assets/images/allio.png";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index.js";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Allio <span>IO</span> Dashboard
          </h1>
          <p>
          Allio is a virtual assistant that uses artificial intelligence to catch missed calls, answer the phone and recover missed revenues.
          </p>
          <Link to="/register">
            <button className="btn btn-hero">Login </button>
          </Link>
        </div>
        <img src={main} alt="Landing" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
