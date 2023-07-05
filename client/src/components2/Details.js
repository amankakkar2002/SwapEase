import React, { useEffect, useState } from "react";
import Navbar2 from "./Navbar2";
import { useNavigate } from "react-router-dom";
import image from "../images/batch.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Details = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callDetails = async () => {
    try {
      const res = await fetch("/details", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callDetails();
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="container px-4">
        <div className="container wrapper pb-5 px-4 pt-3">
          <div className="row">
            <div className="">
              <div className="h3 profile-img">
                <strong>USER DETAILS</strong>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 px-3 py-2">
              <div className=" h4 p-3">About</div>
              <div className="row py-2">
                <div className="col-3 col-md-4 fw-bold">Name</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.name}
                </div>
              </div>
              <div className="row py-2">
                <div className="col-3 col-md-4 fw-bold">Email</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  <div>{userData.email}</div>
                </div>
              </div>
              <div className="row py-2">
                <div className="col-3 col-md-4 fw-bold">Enroll</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.enrollment}
                </div>
              </div>
              <div className="row py-2">
                <div className="col-3  col-md-4 fw-bold">Sector</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.sector}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row py-2">
                <div className="h4 p-3 ">Form Details</div>
                <div className="col-3 col-md-4 fw-bold">Course</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.course}
                </div>
              </div>
              <div className="row py-2">
                <div className="col-3 col-md-4 fw-bold">Branch</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.branch}
                </div>
              </div>
              <div className="row py-2">
                <div className="col-3 col-md-4 fw-bold">Batch</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.batch}
                </div>
              </div>
              <div className="row py-2">
                <div className="col-3 col-md-4 fw-bold">Year of Admission:</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.year}
                </div>
              </div>
              <div className="row py-2">
                <div className="col-3 col-md-4 fw-bold">Desired Subject</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.dsubject}
                </div>
              </div>
              <div className="row py-2">
                <div className="col-3 col-md-4 fw-bold">Existing Subject</div>
                <div className="col-1">-</div>
                <div
                  className="col-8 col-md-7 span1 fw-bold"
                  style={{ overflowX: "auto" }}
                >
                  {userData.esubject}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
