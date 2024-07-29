import React from "react";
import Certificates from "./Certificates";

const Certifications = () => {
  const no_of_certification = 2;
  return (
    <div>
      <h3 className="my-20 bg-gradient-to-b from-white to-gray-700 bg-clip-text text-center text-6xl font-bold leading-none text-transparent">
        Certifications
      </h3>
      <div
        className={`grid md:grid-cols-${
          no_of_certification > 2 ? 3 : no_of_certification
        } justify-center`}
      >
        <Certificates certificate="CS50" image="" />
        <Certificates
          certificate="Machine Learning Specialization"
          image="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LF6NJDFWUX9B/CERTIFICATE_LANDING_PAGE~LF6NJDFWUX9B.jpeg"
        />
      </div>
    </div>
  );
};

export default Certifications;
