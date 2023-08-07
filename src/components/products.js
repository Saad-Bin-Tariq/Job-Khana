import React, { useState, useEffect } from "react";
import axios from "axios";
import Prodlist from "./Prodlist";
import AddProd from "./AddProd";

const Products = () => {
  const [useData, setData] = useState([]);
  const [dataError, setDataError] = useState("");

  const getApiData = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.token) {
        const apiUrl = process.env.REACT_APP_API_KEY;
        const res = await axios.get(`${apiUrl}/api/v1/jobs`, {
          headers: {
            Authorization: "Bearer " + storedUser.token,
          },
        });
        setData(res.data.jobs);
      }
    } catch (error) {
      setDataError(error.response.data.msg);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <section id="jobs" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Jobs Avalaible</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit.
            </p>
          </div>
          <AddProd />
          <div className="row">
            {dataError !== "" && <p>{dataError}</p>}
            {useData.length === 0 ? (
              <>
                <footer id="footer">
                  <div className="footer-newsletter">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-6">
                          <h4>No Jobs Available At The Moment</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </>
            ) : (
              <></>
            )}
            {useData.map((props) => {
              return <Prodlist {...props} key={props._id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
