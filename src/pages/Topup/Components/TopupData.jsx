import React from 'react';
import Axios from 'axios';

export default class TopupData extends React.Component {
    state = {
      data: [],
    };
  
    componentDidMount() {
      Axios.get(`http://localhost:8000/api/v1/topup`).then((res) => {
        console.log(res.data);
        const data = res.data.data;
        this.setState({ data });
      });
    }
  
    render() {
      return this.state.data.map((item) => {
        return (
          <div className="row">
            <div className="col-sm-12 col-md-12 mb-2">
              <div className="card border-0">
                <div className="container mb-2 mt-n2">
                  <div className="row d-flex align-items-center mt-2">
                    <h5 className="active ml-2">
                      <b>{item.number}</b>
                    </h5>
                    <p className="list ml-4">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }