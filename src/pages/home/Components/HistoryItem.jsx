import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";
import { getHistory } from "../../../redux/actions/Transfer";

export default function HistoryItems(props) {
  // let [data, setData] = React.useState([])
  const dispatch = useDispatch();

  const Auth = useSelector((s) => s.Auth);
  let { data, loading } = useSelector((s) => s.History);

  React.useEffect(() => {
    dispatch(
      getHistory({
        token: Auth.data.token,
        id: Auth.data.id,
      })
    );
  }, [dispatch, Auth.data.id, Auth.data.token]);

  if (props !== null) {
    const slice = (start, end) => {
      return data = data.slice(start, end);
    };
    slice(props.start, props.end);
  }
  return data.map((item) => {
    return (
      <div className="container mb-3">
        <div className="row text-sm-center text-center">
          <div className="col-sm-8 col-md-8">
            <div className="row small mb-1">
              <div className="col-sm-4 col-md-4 ml-sm-0 ml-md-n3 ml-lg-n3">
                {loading ? (
                  <RectShape
                    delay
                    showLoadingAnimation
                    style={{ width: 75, height: 75, borderRadius: 10 }}
                    color="#f0f0f0"
                  />
                ) : (
                  <img
                    src={
                      item.income === 1
                        ? (item.sender_avatar==='') ? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.sender_avatar
                        : (item.receiver_avatar==='')? "https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/prof/blank.png?raw=true": item.receiver_avatar
                    }
                    alt=""
                  />
                )}
              </div>
              <div className="col-sm-8 col-md-8 text-left">
                <div className="container">
                  {loading ? (
                    <TextBlock
                      delay
                      showLoadingAnimation
                      rows={2}
                      style={{
                        width: 200,
                        height: 20,
                      }}
                      color="#f0f0f0"
                    />
                  ) : (
                    <>
                      <p>
                        <b>
                          {item.income === 1
                            ? item.sender_name
                            : item.receiver_name}
                        </b>
                      </p>
                      <p className="description">{item.type}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 text-center">
            <div className="row small mb-3 text-sm-center text-center">
              <div
                className={
                  item.income === 1
                    ? "mx-auto small plus"
                    : "mx-auto small minus"
                }
              >
                {loading ? (
                  <TextBlock
                    delay
                    showLoadingAnimation
                    rows={1}
                    style={{
                      width: 100,
                      height: 20,
                    }}
                    color="#f0f0f0"
                  />
                ) : (
                  <h6>
                    {item.income === 1
                      ? `+Rp` + item.amount
                      : `-Rp` + item.amount}
                  </h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
