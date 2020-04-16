import React from "react";

import SectionHeader from "../../common/section-header";

const Calendar = () => {
  const calendarStyle = {
    borderWidth: 0,
  };
  const title = "Check when to book a session";
  const subtitle =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita  atque corrupti reiciendis.";
  return (
    <section className="section bg-light" id="calendar">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} />
        <iframe
          src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FArgentina%2FBuenos_Aires&amp;src=YXByaWxyb2Fkc3R1ZGlvc0BnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%234285F4&amp;color=%237986CB&amp;showCalendars=0&amp;showPrint=0&amp;showTitle=0&amp;showDate=0&amp;showNav=0&amp;showTz=0"
          style={calendarStyle}
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </section>
  );
};

export default Calendar;
