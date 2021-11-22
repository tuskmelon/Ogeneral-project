import { Row, Col } from "react-bootstrap";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menubar from "./Components/Menubar";
import Aboutus from "./Components/Middle/Aboutus";
import Offer from "./Components/Middle/Offer";
import Review from "./Components/Middle/Review";
import Questions from "./Components/Questions";
import RecentArticles from "./Components/RecentArticles";
import Slider from "./Components/Slider";
import SocialHeader from "./Components/SocialHeader";

function App() {
  return (
    <>
      <>
        <div className="App">
          <>
            <Header />
            <Slider />
            <SocialHeader />
            <Menubar />
          </>
          <>
            <div className="Ro mt-3">
              <Row>
                <Col md={8} className="pr-1">
                  <div className="">
                    <Offer />
                  </div>
                </Col>
                <Col className=" pt-2 pl-1">
                  <div className=" ">
                    <Review />
                  </div>
                </Col>
              </Row>
            </div>
          </>
          <Col>
            <Col md={8} className="p-0 m-0">
              <RecentArticles />
            </Col>
            <Col md={8} className="p-0 m-0">
              <Questions />
            </Col>
          </Col>
        </div>
        <Col md={12} className="p-2 mt-5 bg-danger">
          <Footer />
        </Col>
      </>
    </>
  );
}

export default App;
