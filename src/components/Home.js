import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <Link to="/choose-template">Get Started</Link>
    </div>
  );
};

export default Home;
