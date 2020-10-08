import React from "react";
import Axios from "axios";
import { TextBlock } from "react-placeholder";

export default function Nav() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    Axios.get(`https://zwallet-api-wafa.herokuapp.com/profile`, {
      params: { id: 7 },
    }).then((res) => {
      const data = res.data.data[0];
      setData(data);
    });
  }, []);

  let imgDefault = "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true"

  return (
    <nav className="navbar navbar-expand-lg bg-light my-navbar">
      <div className="container">
        <a className="navbar-brand active pl-3 ml-5" href="#a">
          <b>Zwallet</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <div className="navbar-nav ml-auto mt-lg-0">
            <div className="container profile-badge col-sm-12">
              <div className="row">
                <div className="col-3 col-sm-3 col-md-3">
                  <div className="container">
                    <img
                      src={data.avatar !== null ? data.avatar : imgDefault}
                      className="avatar"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7 col-sm-3 col-md-6 mr-n2">
                  <div className="row">
                    <div className="col-sm-12 col-md-10 mt-2">
                      <p>
                        <b>
                          {data ? (
                            data.fullName
                          ) : (
                            <TextBlock
                              rows={1}
                              style={{
                                width: 170,
                                marginBottom: 10,
                                height: 25,
                              }}
                              color="#f0f0f0"
                            />
                          )}
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <span>
                        {data ? (
                          data.phone
                        ) : (
                          <TextBlock
                            rows={1}
                            style={{ width: 150 }}
                            color="#f0f0f0"
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-2 col-sm-3 col-md-3 mt-2">
                  <div className="container w-10">
                    <img
                      src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/bell.png?raw=true"
                      className="icon notification"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
