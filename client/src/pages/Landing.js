import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby neutra woke banjo butcher normcore wolf mumblecore PBR&B,
            williamsburg poutine glossier sartorial keffiyeh. Tonx quinoa twee
            vape four loko tousled, mixtape DIY snackwave cornhole marfa.
            Adaptogen next level actually blue bottle cornhole waistcoat vice
            leggings vexillologist hot chicken pabst DIY mixtape enamel pin.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default landing;
