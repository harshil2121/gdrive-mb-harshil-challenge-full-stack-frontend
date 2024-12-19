import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Table, Button, Accordion } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  accessRevoke,
  googleCallbackApi,
} from "../../apiServices/googleAuthServices";
import Metalogo from "../assesst/image/meta-logo.svg";
import Linkdinlogo from "../assesst/image/linkdin.svg";
import Xlogo from "../assesst/image/tweeter.svg";
import { File, FileText, Globe, Lock, Mail, User, Users } from "react-feather";
import GooglwDriveIcon from "../assesst/image/google-drive.png";

const GoogleDriveRiskReport = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const code = urlParams.get("code");

  const [analytics, setAnalytics] = useState(null);
  const [totalRiskScore, setTotalRisjScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const isInitialMount = useRef(true);

  const fetchDataAndStore = async () => {
    if (!code) return; // Ensure code is present
    setLoading(true);
    await googleCallbackApi(code)
      .then(async (res) => {
        if (res.success) {
          await localStorage.setItem("userId", res.data.user._id);
          await localStorage.setItem("token", res.data.user.token);
          setAnalytics(res.data.analytics);

          setTotalRisjScore(
            res?.data?.analytics?.totalRiskScore
              ? Number(
                  (
                    (res?.data?.analytics?.totalRiskScore / 1000) *
                    100
                  )?.toFixed(0)
                )
              : 0
          );
          setLoading(false);
          // setFiles(res.data.files);
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      fetchDataAndStore();
    }
    // eslint-disable-next-line
  }, []);

  const revokeAccess = async (e) => {
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");
    e.preventDefault();
    if (userId) {
      await accessRevoke({ token, userId })
        .then((res) => {
          if (res.success) {
            localStorage.removeItem("userId");
            localStorage.removeItem("token");
            window.location.href = "/";
          }
        })
        .catch((err) => {
          console.log("eee", err);
        });
    }
  };

  return (
    <>
      {loading ? (
        <div className="fullscreen-backdrop">
          <div className="spinner-container">
            <div className="spinner-grow text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid p-0">
          <div className="analitic-bg">
            <Row className="justify-content-between align-items-center">
              <Col md="auto">
                <Button
                  variant="outline-warning"
                  onClick={(e) => revokeAccess(e)}
                >
                  {" "}
                  Rewoke access{" "}
                </Button>
              </Col>
              <Col md={6} className="text-center">
                <img src={Metalogo} height={20} alt="" />
              </Col>
              <Col md="auto">
                <span>Terms & consition</span>
                <span className="ps-3">Privacy Policy</span>
                <span className="ps-3">
                  <img
                    src={Linkdinlogo}
                    height={20}
                    width={20}
                    alt=""
                    className="img-fluid"
                  />
                </span>
                <span className="ps-3">
                  <img
                    src={Xlogo}
                    height={20}
                    width={20}
                    alt=""
                    className="img-fluid"
                  />
                </span>
              </Col>
              <Col md={12} className="never-store">
                <p>
                  <span>
                    {" "}
                    <Lock />{" "}
                  </span>
                  We do not scan the contents of files. Scan results are never
                  stored.
                </p>
              </Col>
            </Row>
          </div>

          <div className="data-report-bg">
            <div className="report-card">
              <Row className="mb-4 align-items-center justify-content-between">
                <Col md="auto" className="text-center">
                  <span className="risk-report-heading">
                    <img src={GooglwDriveIcon} alt="" />
                    Google Drive Risk Report
                  </span>
                </Col>
                <Col md="auto">
                  <div>
                    Risk Score:
                    {totalRiskScore ? (
                      Number(totalRiskScore) === 0 ? (
                        <span className="risk-type low">Nor Risk</span>
                      ) : Number(totalRiskScore) <= 25 ? (
                        <span className="risk-type low">Low</span>
                      ) : Number(totalRiskScore) <= 50 ? (
                        <span className="risk-type mediun">Medium</span>
                      ) : Number(totalRiskScore) <= 75 ? (
                        <span className="risk-type high">High</span>
                      ) : (
                        <span className="risk-type critical">Critical</span>
                      )
                    ) : (
                      <>0</>
                    )}
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="mb-4 align-items-center">
                <Col className="text-center">
                  {/* <ProgressBar striped variant="info" now={20} /> */}
                  <div className="speedometer">
                    <div className="speedometer-text">
                      <span>RISK SCORE</span>
                      <div className="score-red">
                        {totalRiskScore ? Number(totalRiskScore) : 0}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="text-center">
                  <div className="total-data-card">
                    <div className="globe-icon">
                      {" "}
                      <Globe />{" "}
                    </div>
                    <div className="public-files">
                      {analytics?.publiclyAccessibleFiles
                        ? analytics?.publiclyAccessibleFiles?.length
                        : 0}
                    </div>
                    <p>Public files</p>
                    <small>
                      {" "}
                      Files that are avialable to anyone over the web via like
                      sharing.
                    </small>
                  </div>
                </Col>
                <Col className="text-center">
                  <div className="total-data-card">
                    <div className="users-icon">
                      {" "}
                      <Users />{" "}
                    </div>
                    <div className="people-with-access">
                      {analytics?.peopleWithAccess?.length
                        ? analytics?.peopleWithAccess?.length
                        : 0}
                    </div>
                    <p>People with access</p>
                    <small>
                      People who access to files in youe Google Drive.
                    </small>
                  </div>
                </Col>
                <Col className="text-center">
                  <div className="total-data-card">
                    <div className="filetask-icon">
                      {" "}
                      <FileText />{" "}
                    </div>
                    <div className="files-shared-externally">
                      {analytics?.filesSharedExternally
                        ? analytics?.filesSharedExternally?.length
                        : 0}
                    </div>
                    <p>Files shared externally</p>
                    <small>
                      Files that have been shared directly with other people.
                    </small>
                  </div>
                </Col>
              </Row>
              <hr />
              <Row className="mb-4 align-items-center  text-left">
                <Col md={12}>
                  <span className="details-heading">
                    1.{" "}
                    {analytics?.publiclyAccessibleFiles
                      ? analytics?.publiclyAccessibleFiles?.length
                      : 0}{" "}
                    files are publicly accessible for anyone with the link
                  </span>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="w-40">File name</th>
                        <th>Access setting</th>
                        <th>Shared with</th>
                        <th>Created by</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {analytics?.publiclyAccessibleFiles &&
                      analytics?.publiclyAccessibleFiles?.length > 0 ? (
                        analytics?.publiclyAccessibleFiles?.map((r, dd) => {
                          return (
                            <tr key={dd}>
                              <td>{r?.fileName}</td>
                              <td>
                                {" "}
                                <span className="tbl-globe-icon">
                                  {" "}
                                  <Globe /> Anyone woth link
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <Users /> {r?.sharedWithCount}
                              </td>
                              <td>
                                {r?.createdBy?.photoLink ? (
                                  <img
                                    src={r?.createdBy?.photoLink}
                                    alt=""
                                    className="profile-img-icon"
                                    loading="eager"
                                  />
                                ) : (
                                  <User />
                                )}
                                <span className="file-name">
                                  {r?.createdBy?.displayName}
                                </span>
                              </td>
                              <td>
                                <Mail />
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <hr />
              <Row className="mb-4">
                <Col md={12} className="text-left">
                  <span className="details-heading">
                    2. There are{" "}
                    {analytics?.peopleWithAccess?.length
                      ? analytics?.peopleWithAccess?.length
                      : 0}{" "}
                    people with access to your Google Drive
                  </span>
                  <Accordion defaultActiveKey={0} flush>
                    {analytics?.peopleWithAccess &&
                    analytics?.peopleWithAccess?.length > 0 ? (
                      analytics?.peopleWithAccess?.map((d, idx) => {
                        return (
                          <Accordion.Item key={idx} eventKey={idx}>
                            <Accordion.Header>
                              <div className="row w-100">
                                <div className="col-6">
                                  {d?.files[0]?.createdBy?.photoLink ? (
                                    <img
                                      src={d?.files[0]?.createdBy?.photoLink}
                                      alt=""
                                      className="profile-img-icon"
                                      loading="eager"
                                    />
                                  ) : (
                                    <User />
                                  )}
                                  <span className="file-name">{d?.email}</span>
                                </div>
                                <div className="col me-auto text-right">
                                  Has access to{" "}
                                  <span className="tbl-file-icon">
                                    {" "}
                                    <File /> {d?.count}{" "}
                                  </span>{" "}
                                  files
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Table responsive>
                                <thead>
                                  <tr>
                                    <th className="w-40">File name</th>
                                    <th>Access setting</th>
                                    <th>Shared with</th>
                                    <th>Created by</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {d?.files?.map((ff, iddd) => {
                                    return (
                                      <tr key={iddd}>
                                        <td>{ff?.fileName}</td>
                                        <td>
                                          {" "}
                                          <span className="tbl-globe-icon">
                                            {" "}
                                            <Globe /> Anyone woth link
                                          </span>{" "}
                                        </td>
                                        <td>
                                          {" "}
                                          <Users /> {ff?.sharedWithCount}
                                        </td>
                                        <td>
                                          {ff?.createdBy?.photoLink ? (
                                            <img
                                              src={ff?.createdBy?.photoLink}
                                              alt=""
                                              className="profile-img-icon"
                                              loading="eager"
                                            />
                                          ) : (
                                            <User />
                                          )}
                                          <span className="file-name">
                                            {ff?.createdBy?.displayName}
                                          </span>
                                        </td>
                                        <td>
                                          <Mail />
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      })
                    ) : (
                      <Accordion.Item eventKey="0">
                        <Accordion.Body>No data</Accordion.Body>
                      </Accordion.Item>
                    )}
                  </Accordion>
                </Col>
              </Row>
              <hr />
              <Row className="mb-4 text-left">
                <Col md={12}>
                  <span className="details-heading">
                    3.{" "}
                    {analytics?.filesSharedExternally?.length
                      ? analytics?.filesSharedExternally?.length
                      : 0}{" "}
                    files are shared externally
                  </span>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="w-40">File name</th>
                        <th>Access setting</th>
                        <th>Shared with</th>
                        <th>Created by</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {analytics &&
                      analytics?.filesSharedExternally?.length > 0 ? (
                        analytics?.filesSharedExternally?.map((ex, idxx) => {
                          return (
                            <tr key={idxx}>
                              <td>{ex?.fileName}</td>
                              <td>
                                {" "}
                                <span className="tbl-globe-icon">
                                  {" "}
                                  <Globe /> Anyone woth link
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <Users /> {ex?.sharedWithCount}
                              </td>
                              <td>
                                {ex?.createdBy?.photoLink ? (
                                  <img
                                    src={ex?.createdBy?.photoLink}
                                    alt=""
                                    className="profile-img-icon"
                                    loading="eager"
                                  />
                                ) : (
                                  <User />
                                )}
                                <span className="file-name">
                                  {ex?.createdBy?.displayName}
                                </span>
                              </td>
                              <td>
                                <Mail />
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <div className="demo-div">
                <Row className="justify-content-between align-items-center">
                  <Col className="text-left" style={{ marginLeft: "20px" }}>
                    <span>
                      For a more detialed and bespoke risk audit, followed with
                      plan of action, request a demo with us today.
                    </span>
                  </Col>
                  <Col md="auto" style={{ marginRight: "20px" }}>
                    <Button className="btn-req-demo" variant="primary">
                      Request a demo
                    </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleDriveRiskReport;
