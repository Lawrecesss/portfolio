import React from "react";
import Certificates from "./Certificates";
import { stringify } from "querystring";

const Certifications = () => {
  return (
    <div>
      <h3 className="my-20 bg-gradient-to-b from-white to-gray-700 bg-clip-text text-center text-6xl font-bold leading-none text-transparent">
        Certifications
      </h3>
      <div className={`grid md:grid-cols-2 justify-center`}>
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
