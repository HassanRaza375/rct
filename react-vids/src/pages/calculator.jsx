import React from "react";
import Appname from "../components/appname";
import Buttonscal from "../components/calcomponent/buttonscal";
import Container from "../components/Custom/container";
const calculator = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Appname title="Calculator" />
          </div>
        </div>
      </div>
      <div className="container center-flex">
        <div className="card-b">
          <input type="text" className="input-cal" />
          <div className="operations-cal">
            <Container>
              <Buttonscal />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default calculator;
