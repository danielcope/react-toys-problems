import React from "react";
import blahface from "../assets/img/face-removebg-preview.png";

function Face() {
  return (
    <section className="h-full flex justify-center items-center">
      {/* <FontAwesomeIcon icon={faFaceGrin} className="elephant" /> */}
      <img src={blahface} alt="face" className="elephant" />
    </section>
  );
}

export default Face;
