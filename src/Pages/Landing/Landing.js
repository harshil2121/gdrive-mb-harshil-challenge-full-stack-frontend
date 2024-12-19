import { useState } from "react";
import Header from "../../components/Header";
import { Row, Col, Button, Card, Modal, Spinner } from "react-bootstrap";
import Footer from "../../components/Footer";
import Report_img from "../assesst/image/demo-img.png";
import GooglwDriveIcon from "../assesst/image/google-drive.png";
import formikEnhancer from "./enhancer/landingEnhancer";
import { googleAuthCheckApi } from "../../apiServices/googleAuthServices";

const Landing = (props) => {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    submitCount,
    setFieldValue,
    isValid,
    handleSubmit,
  } = props;
  const [modalShow, setModalShow] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);

  const Error = (props) => {
    const field1 = props.field;
    if ((errors[field1] && touched[field1]) || submitCount > 0) {
      return (
        <span class={props.class ? props.class : "error-msg"}>
          {errors[field1]}
        </span>
      );
    } else {
      return <span />;
    }
  };

  const handlegoogleAccount = async (e) => {
    e.preventDefault();
    handleSubmit();
    if (isValid) {
      await googleAuthCheckApi(values)
        .then((res) => {
          if (res.success) {
            window.location.href = res?.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const revireArray = [
    {
      ratingImg:
        "https://assets-global.website-files.com/633d92770fc68548a10ca623/64ba8c9b7a2f4f4dde830c52_5%20star.svg",
      date: "02/28/2023",
      discription:
        "Metomic helps us identify sensitive information in applications where we previously had no or limited visibility.",
      logo: "https://assets-global.website-files.com/633d92770fc68548a10ca623/64ba8b0b557c2eb8d09b32f2_g2-logo.svg",
      name: "Bud B",
    },
    {
      ratingImg:
        "https://assets-global.website-files.com/633d92770fc68548a10ca623/64ba8c9b7a2f4f4dde830c52_5%20star.svg",
      date: "02/28/2023",
      discription:
        "We use Metomic to uncover sensitive company data and prevent it from being shared or residing in places it shouldn't.",
      logo: "https://assets-global.website-files.com/633d92770fc68548a10ca623/64ba8b0b557c2eb8d09b32f2_g2-logo.svg",
      name: "Colin O",
    },
    {
      ratingImg:
        "https://assets-global.website-files.com/633d92770fc68548a10ca623/64ba8c9b7a2f4f4dde830c52_5%20star.svg",
      date: "02/28/2023",
      discription:
        "We are a Slack and Google shop, and Metomic had out-of-the-box integrations that made implementation a breeze.",
      logo: "https://assets-global.website-files.com/633d92770fc68548a10ca623/64ba8b0b557c2eb8d09b32f2_g2-logo.svg",
      name: "Tim C",
    },
    {
      ratingImg:
        "https://assets-global.website-files.com/633d92770fc68548a10ca623/64ba8c9b7a2f4f4dde830c52_5%20star.svg",
      date: "02/28/2023",
      discription:
        "It's helping us to control any sensitive information being shared across the organisation.",
      logo: "https://assets-global.website-files.com/633d92770fc68548a10ca623/64ba8b0b557c2eb8d09b32f2_g2-logo.svg",
      name: "Vamshi N",
    },
  ];

  return (
    <div className="content mx-0 p-0">
      <Header />
      <div>
        <section className="section-1">
          <Row>
            <Col md={6} className="my-4">
              <p className="text-start">DATA BREACH FINDER</p>
              <h1>Check if your Google Drive is leaking sensitive data</h1>
              <Button
                variant="light"
                onClick={() => setModalShow(true)}
                className="my-4 google-dirve-report-btn"
              >
                <img
                  src={GooglwDriveIcon}
                  className="google-drive-icon"
                  height={20}
                  width={20}
                  alt="google-drive"
                />{" "}
                Free Google Drive Risk Report
              </Button>
              <hr />
              <p>
                <img
                  src="https://assets-global.website-files.com/633d92770fc68548a10ca623/63500d2f382c0c05ff32d00a_Discovery.svg"
                  loading="eager"
                  width="32"
                  alt="Discovery icon"
                  className="mg-right-16px"
                />
                <span>
                  See how secure your Google Drive account is in seconds
                </span>
              </p>
              <p>
                <img
                  src="https://assets-global.website-files.com/633d92770fc68548a10ca623/63c6dc1fda9ed849130fe416_workflow.svg"
                  loading="eager"
                  width="32"
                  alt="Workflow icon"
                  className="mg-right-16px"
                />
                <span>
                  Discover who still has access to your files, and who they were
                  created by
                </span>
              </p>
              <p>
                <img
                  src="https://assets-global.website-files.com/633d92770fc68548a10ca623/63c6d991bac69888b1158aa4_Notifications.svg"
                  loading="eager"
                  width="32"
                  alt="Notification icon"
                  className="mg-right-16px"
                />
                <span>
                  Find risky files exposed publicly to anyone on the internet
                </span>
              </p>
              <div className="my-2">
                After your scan is completed, we'll delete all collected data
                and remove our access permissions within 24 hours. We will not
                read any of your files' content at any time.
              </div>
            </Col>
            <Col md={6} className="my-4">
              <img
                src={Report_img}
                alt="Google Drive Risk Report"
                className="img-fluid"
              />
            </Col>
          </Row>
        </section>
        <section className="section-2">
          <Row className="text-center mt-5">
            <Col md={12}>
              <h5>Don't wait until it's too late</h5>
              <h3>Join Infosec leaders securing their data</h3>
            </Col>
            {revireArray.map((s, idx) => {
              return (
                <Col key={idx} md={6}>
                  <Card className="mb-3 review-card">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-auto">
                        <img src={s.ratingImg} loading="lazy" alt="" />
                      </div>
                      <div className="col-auto text-right">{s.date}</div>
                    </div>

                    <p className="text-left py-3">{s.discription}</p>
                    <div className="d-inline-flex justify-content-flex-start align-items-center">
                      <img
                        src={s.logo}
                        loading="lazy"
                        height={40}
                        width={40}
                        alt=""
                      />
                      <span className="ps-3">
                        <h4>{s.name}</h4>
                      </span>
                    </div>
                    {/* </a> */}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </section>
        <section className="section-3">
          <div className="sec-3-div">
            <h5>UNCOVER</h5>
            <h2>See the data Google Drive doesn't show you</h2>
            <Row className="text-center mt-5 justify-content-end">
              <Col md="auto">
                <ul className="list-sec-3">
                  <li>Personal data (PII)</li>
                  <li>Protected health information (PHI)</li>
                  <li>Payment card data (PCI)</li>
                  <li>Confidential data</li>
                  <li>Specific category data</li>
                  <li>Secrets, keys, and passwords</li>
                </ul>
              </Col>
              <Col md={6}>
                <div className="inner-container">
                  <img
                    src="https://assets-global.website-files.com/633d92770fc68548a10ca623/634d87ffab29043dc7567063_GDRIVE%20DISCOVERW.png"
                    loading="eager"
                    sizes="(max-width: 479px) 86vw, (max-width: 767px) 89vw, (max-width: 991px) 88vw, (max-width: 1439px) 45vw, 38vw"
                    srcSet="https://assets-global.website-files.com/633d92770fc68548a10ca623/634d87ffab29043dc7567063_GDRIVE%20DISCOVERW-p-500.png 500w, https://assets-global.website-files.com/633d92770fc68548a10ca623/634d87ffab29043dc7567063_GDRIVE%20DISCOVERW-p-800.png 800w, https://assets-global.website-files.com/633d92770fc68548a10ca623/634d87ffab29043dc7567063_GDRIVE%20DISCOVERW-p-1080.png 1080w, https://assets-global.website-files.com/633d92770fc68548a10ca623/634d87ffab29043dc7567063_GDRIVE%20DISCOVERW.png 1381w"
                    alt="Discovering healthcare records in Google Drive"
                    className="graph-card"
                  />
                  <img
                    src="https://assets-global.website-files.com/633d92770fc68548a10ca623/634d888fb42aa4bc76f251b4_GDRIVE%20DISCOVER%202.png"
                    loading="eager"
                    sizes="(max-width: 479px) 52vw, (max-width: 767px) 54vw, (max-width: 991px) 53vw, (max-width: 1439px) 22vw, 19vw"
                    srcSet="https://assets-global.website-files.com/633d92770fc68548a10ca623/634d888fb42aa4bc76f251b4_GDRIVE%20DISCOVER%202-p-500.png 500w, https://assets-global.website-files.com/633d92770fc68548a10ca623/634d888fb42aa4bc76f251b4_GDRIVE%20DISCOVER%202.png 724w"
                    alt="Close-up of healthcare records found in Google Drive"
                    className="graph-card-left"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section-4">
          <Row className="text-center mt-5 ">
            <Col>
              <h5>Get Started</h5>
              <h3>Choose Your Free Google Drive Risk Report</h3>
            </Col>
          </Row>
          <Row className="my-4">
            <Col md={4}>
              <div className="plan-type-card">
                <span className="recommand-tag">Recommended</span>
                <Card className="recommand-card">
                  <h4>Scan your Google Drive company account</h4>
                  <hr />
                  <h5>Get a full risk report for your company in minutes</h5>
                  <p>
                    After your scan is completed, we'll delete all collected
                    data and remove our access permissions within 24 hours. We
                    will not read any of your files' content at any time.
                  </p>
                  <Button
                    variant="light"
                    className="my-4 google-dirve-report-btn"
                  >
                    <img
                      src={GooglwDriveIcon}
                      className="google-drive-icon"
                      height={20}
                      width={20}
                      alt="google-drive"
                    />{" "}
                    Free Google Drive Risk Report
                  </Button>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <Card className="other-card">
                <h4>Run a dummy scan using our demo account</h4>
                <hr />
                <h5>Get a sample report using dummy data.</h5>
                <p>
                  See how our scanner detects sensitive data such as Driving
                  licenses, Credit card numbers and ID’s
                </p>
                <Button variant="primary">Scan our Demo Account</Button>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="other-card">
                <h4>See all our Metomic features in action. Book a demo.</h4>
                <hr />
                <h5>Let's see how Metomic can help your business.</h5>
                <p>
                  Request a demo to see how our platform can give you
                  unparalleled visibility and control over your sensitive data.
                </p>
                <Button variant="secondary">Book a Demo</Button>
              </Card>
            </Col>
          </Row>
        </section>
      </div>
      <Footer />
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="modalheading"
            id="contained-modal-title-vcenter"
          >
            Get a Free Risk Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              handlegoogleAccount(e);
              setBtnDisable(true);
            }}
          >
            <div className="row modal-form">
              <div className="col-6">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    First name<sup className="sup">*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your first name"
                    name="first_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.first_name}
                  />
                  <Error field="first_name" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Last name<sup className="sup">*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your last name"
                    name="last_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.last_name}
                  />
                  <Error field="last_name" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Job title<sup className="sup">*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your job title"
                    name="jobtitle"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.jobtitle}
                  />
                  <Error field="jobtitle" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Country/Region<sup className="sup">*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your country/region"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                  />
                  <Error field="country" />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Business Email<sup className="sup">*</sup>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your business email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <Error field="email" />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Company name<sup className="sup">*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your company name"
                    name="company_name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.company_name}
                  />
                  <Error field="company_name" />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your phone number"
                    name="phone"
                    onChange={(e) => {
                      if (e.target.value !== "") {
                        setFieldValue("phone", e.target.value);
                        setFieldValue("hasPhone", true);
                      } else {
                        setFieldValue("phone", "");
                        setFieldValue("hasPhone", false);
                      }
                    }}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <Error field="phone" />
                </div>
              </div>
              <div className="col-12">
                Metomic needs the contact information you provide to us to
                contact you about our products and services. You may unsubscribe
                from these communications at anytime. For information on how to
                unsubscribe, as well as our privacy practices and commitment to
                protecting your privacy, check out our Privacy Policy.
              </div>
              <div className="col-12 my-2">
                <Button
                  className="text-left"
                  disabled={btnDisable && isValid ? true : false}
                  type="submit"
                >
                  {btnDisable && isValid ? (
                    <span>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </span>
                  ) : (
                    "Scan Now"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default formikEnhancer(Landing);
