import { Container, Row, Col, Button } from "react-bootstrap";
import AICPAImg from "../Pages//assesst/image/aicpa-img.png";
import GetAppImg from "../Pages/assesst/image/getapp-img.png";
import G2Img from "../Pages/assesst/image/g-2-img.png";
import Metalogo from "../Pages/assesst/image/meta-logo.svg";
import Linkdinlogo from "../Pages/assesst/image/linkdin.svg";
import Youtubelogo from "../Pages/assesst/image/youtube.svg";
import Xlogo from "../Pages/assesst/image/tweeter.svg";

const Footer = () => {
  return (
    <footer className="section-1 mt-5 p-4 text-center">
      <Container>
        <Row className="w-100 justify-content-between text-left">
          <Col md={2}>
            <img src={Metalogo} alt="" className="img-fluid" />
          </Col>
          <Col md={2}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a className="social-media-logo" href="#liknkdin">
                  <img
                    src={Linkdinlogo}
                    height={20}
                    width={20}
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <a className="social-media-logo" href="#youtube">
                  <img
                    src={Youtubelogo}
                    alt=""
                    height={30}
                    width={30}
                    className="img-fluid"
                  />
                </a>
                <a className="social-media-logo" href="#tweeter">
                  <img
                    src={Xlogo}
                    height={20}
                    width={20}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Integrations</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#google-drive">Google Drive</a>
              </li>
              <li>
                <a href="#slack">Slack</a>
              </li>
              <li>
                <a href="#teams">Teams</a>
              </li>
              <li>
                <a href="#zendesk">Zendesk</a>
              </li>
              <li>
                <a href="#github">GitHub</a>
              </li>
              <li>
                <a href="#chagpt">ChatGPT</a>
              </li>
              <li>
                <a href="#nation">Nation</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Platform</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#data-discovery">Data Discovery</a>
              </li>
              <li>
                <a href="#data-loss-prevention">Data Loss Prevention</a>
              </li>
              <li>
                <a href="#access-control">Access Control</a>
              </li>
              <li>
                <a href="#dspm-tool">DSPM Tool</a>
              </li>
              <li>
                <a href="#humun-firewall">DSPM Tool</a>
              </li>
              <li>
                <a href="#insider-threat">Insider Threat</a>
              </li>
              <li>
                <a href="#compllance">Compllance</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#guides">Guides</a>
              </li>
              <li>
                <a href="#whitepapers-&-Reports">Whitepapers & Reports</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
              <li>
                <a href="#video"> Video</a>
              </li>
              <li>
                <a href="#product">Product</a>
              </li>
              <li>
                <a href="#email-subscription-center">
                  Email Subscription Management Centre
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row className="justify-content-between align-items-center py-4">
          <Col className="text-left">
            <h4>Check if your Google Drive is leaking sensitive data</h4>
            <p>
              Scan your Google Drive company account and get full risk resport
              for your comapany in mintues
            </p>
            <Button variant="light" className="my-3 p-3">
              Run a free scan
            </Button>
          </Col>
          <Col>
            <div className="footer-logo-div">
              <img
                className="footer-logo"
                src={AICPAImg}
                alt=""
                loading="lazy"
              />
              <img
                className="footer-logo getapp-img"
                src={GetAppImg}
                alt=""
                loading="lazy"
              />
              <img
                className="footer-logo getapp-img"
                src={G2Img}
                alt=""
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row className="align-items-center">
          <Col className="text-left">
            <p>Copyright &copy; Metomic 2024</p>
          </Col>
          <Col className="text-right">
            <div className="d-inline-flex justify-content-end w-100">
              <p>Terms & consition</p>
              <p className="ps-4">Privacy Policy</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
