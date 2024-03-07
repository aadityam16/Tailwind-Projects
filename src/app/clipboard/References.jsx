import React from "react";
import LogoGoogle from "../../../public/images/logo-google.png";
import LogoMicrosoft from "../../../public/images/logo-microsoft.png";
import LogoIbm from "../../../public/images/logo-ibm.png";
import LogoHp from "../../../public/images/logo-hp.png";
import LogoVectorGraphics from "../../../public/images/logo-vector-graphics.png";
import Image from "next/image";
function References() {
  return (
    <section id="references">
      <div className="flex flex-col justify-between items-center max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <Image src={LogoGoogle} />
        <Image src={LogoIbm} />
        <Image src={LogoMicrosoft} />
        <Image src={LogoHp} />
        <Image src={LogoVectorGraphics} />
      </div>
    </section>
  );
}

export default References;
