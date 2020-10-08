import React from 'react';
import Descript from "../pages/login/src/components/Description";

const LeftSide = () => {
    return (
        <div className="container bg col-sm-12 col-md-7 col-lg-7">
        <div className="row ml-3 ml-sm-3 ml-md-2">
          <div className="offset-md-2 col-md-9">
            <h3 className="text-white">
              <b>Zwallet</b>
            </h3>
          </div>
        </div>
        <div className="row ml-3 ml-sm-3 ml-md-2">
          <div className="col-md text-center">
            <img
              src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/hp-home.png?raw=true"
              className="mx-auto d-block img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="row ml-3 ml-sm-3 ml-md-2">
          <div className="offset-md-2 col-md-10 col-sm-12">
            <h3 className="text-white">App that Covering Banking Needs.</h3>
          </div>
        </div>
        <div className="row ml-3 ml-sm-3 ml-md-2">
          <div className="col-sm-12 offset-md-2 col-md-8 col-xs mb-5">
            <Descript
              class="description light"
              content="Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in Zwallet everyday with
                worldwide users coverage."
            />
          </div>
        </div>
      </div>
    );
}

export default LeftSide;