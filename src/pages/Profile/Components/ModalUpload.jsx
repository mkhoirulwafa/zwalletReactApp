import React, { useState } from "react";
// import Axios from "axios";
import { RectShape } from "react-placeholder/lib/placeholders";
import { Modal, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "../../../redux/actions/Users";

const MyVerticallyCenteredModal = (props) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.Users);
  const Auth = useSelector((s) => s.Auth);
  // useEffect(() => {

  // }, [dispatch, Auth.data.id, Auth.data.token, data.avatar]);
  console.log(data);
  // let history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatarUrl);

    dispatch(
      updateUsers({
        id: Auth.data.id,
        token: Auth.data.token,
        data: {
          avatar: avatarUrl,
        },
        history: props.history,
      })
    );
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div className="row mb-3">
          <div className="ml-5">
            <img
              src={
                loading ? (
                  <RectShape
                    delay
                    showLoadingAnimation
                    style={{ width: 75, height: 75, borderRadius: 10 }}
                    color="#f0f0f0"
                  />
                ) : (
                  data.avatar
                )
              }
              alt=""
              className="m-auto rounded"
              width="70px"
            />
            <br />
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p>Upload an image to change your profile picture.</p>
        <div className="form-group form-group-lg pin mr-lg-4 mr-md-3 mr-sm-1 mr-1 mb-md-5 mt-md-4">
          <form onSubmit={(e) => onFormSubmit(e)} encType="multipart/form-data">
            <input
              type="file"
              name="avatar"
              onChange={(e) => setAvatarUrl(e.target.file[0])}
            />{" "}
            <br />
            <br />
            <br />
            <div className="button btn second w-100">
              <button type="submit" className="btn btn-lg btn-block">
                <b>Upload Image</b>
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button
          onClick={(e) => history.replace("/transfer-status")}
          size="lg"
          className="btn btn-lg text-white"
        >
          Continue
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

function ButtonModal(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const handleSubmit = () => {
    setModalShow(true);
  };

  return (
    <>
      <center>
        <Button
          variant=""
          onClick={() => handleSubmit()}
          className="btn btn-sm"
        >
          Edit
        </Button>
      </center>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default ButtonModal;
