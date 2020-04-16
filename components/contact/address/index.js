import React from "react";

const Address = () => {
  return (
    <div className="col-md-5">
      <div className="p-4 mb-3 bg-white">
        <address>
          <p className="mb-0 font-weight-bold">April Road Studios</p>
          <p className="mb-4">
            <i class="fas fa-map-marker-alt mr-2"></i>
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>

          <p className="mb-0 font-weight-bold">Phone</p>
          <p className="mb-4">
            <i class="fas fa-phone mr-2"></i>+1 232 3235 324
          </p>

          <p className="mb-0 font-weight-bold">Email Address</p>
          <p className="mb-0">
            <i class="fas fa-envelope mr-2"></i>arstudios@gmail.com
          </p>
        </address>
      </div>
    </div>
  );
};

export default Address;
