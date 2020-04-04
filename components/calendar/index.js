import React from "react";

import { SectionHeader } from "../../common/section-header/index";

const Calendar = () => {
  const title = "Check when to book a session";
  const subtitle =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita  atque corrupti reiciendis.";
  return (
    <section className="section bg-light" id="calendar">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} />
      </div>
    </section>
  );
};

export default Calendar;
