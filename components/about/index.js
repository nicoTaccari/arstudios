import React from "react";
import SectionHeader from "../../common/section-header";

const About = () => {
  const title = "About";
  const subtitle =
    "Bienvenido al lugar donde se reúne la cultura y el arte.\
    Artspace Barcelona es el sitio ideal para músicos, fotógrafos y todos los profesionales del mundo audiovisual. Estamos ubicados en el centro de Barcelona, calle madrazo 54 esquina con calle Brusi.\
    Nuestra estrategia es proporcionar el mejor servicio y la mejor \
    calidad con el mejor ambiente a nuestros clientes en todas sus ideas creativas,\
    desde su producción hasta incluso descubriendo nuevos talentos, para así contribuir\
    con la riqueza artística de nuestra generación.";

  return (
    <section className="section bg-light" id="about">
      <SectionHeader title={title} subtitle={subtitle} />
    </section>
  );
};

export default About;
