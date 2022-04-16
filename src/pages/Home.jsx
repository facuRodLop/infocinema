import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar/Navbar";
import Movies from "../components/Movies/Movies";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className="page-background">
        <Container>
          <Movies />
        </Container>
      </div>
    </>
  );
}

export default Home;
