import React from "react";
import Axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import InputPin from "../../../Components/pin";

function MyVerticallyCenteredModal(props) {
  let history = useHistory();
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter PIN to transfer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Enter your 6 digits PIN for confirmation to continue transferring
          money.
        </p>
        <div class="form-group form-group-lg pin mr-lg-4 mr-md-3 mr-sm-1 mr-1 mb-md-5 mt-md-4">
          <InputPin />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => history.replace("/transfer-status")}
          size="lg"
          className="btn btn-lg text-white"
        >
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ButtonPinModal(props) {
  const [modalShow, setModalShow] = React.useState(false);
  // let history = useHistory();
  const {
    location: { input, receiver },
  } = props;

  const handleSubmit = () => {
    Axios({
      method: "post",
      url: `https://zwallet-api-wafa.herokuapp.com/transfer/`,
      data: {
        amount: input.amount,
        notes: input.notes,
        receiver_name: receiver.fullName,
        income: 1,
        sender_name: "Robert Chandler"
      },
    })
      .then((res) => {
        setModalShow(false);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Button
        variant=""
        onClick={() => handleSubmit}
        className="btn btn-lg text-white"
      >
        Continue
      </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </>
  );
}
export default ButtonPinModal;
