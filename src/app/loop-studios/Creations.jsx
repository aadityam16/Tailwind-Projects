import React from "react";
import Item from "./Item";
import DEarthImage from "../../../public/loopstudios-website-images/desktop/image-deep-earth.jpg";
import MEarthImage from "../../../public/loopstudios-website-images/mobile/image-deep-earth.jpg";
import DNightImage from "../../../public/loopstudios-website-images/desktop/image-night-arcade.jpg";
import MNightImage from "../../../public/loopstudios-website-images/mobile/image-night-arcade.jpg";
import DSoccerImage from "../../../public/loopstudios-website-images/desktop/image-soccer-team.jpg";
import MSoccerImage from "../../../public/loopstudios-website-images/mobile/image-soccer-team.jpg";
import DGridImage from "../../../public/loopstudios-website-images/desktop/image-grid.jpg";
import MGridImage from "../../../public/loopstudios-website-images/mobile/image-grid.jpg";
import DFisheyeImage from "../../../public/loopstudios-website-images/desktop/image-fisheye.jpg";
import MFisheyeImage from "../../../public/loopstudios-website-images/mobile/image-fisheye.jpg";
import DBorealisImage from "../../../public/loopstudios-website-images/desktop/image-pocket-borealis.jpg";
import MBorealisImage from "../../../public/loopstudios-website-images/mobile/image-pocket-borealis.jpg";
import DCuriosityImage from "../../../public/loopstudios-website-images/desktop/image-curiosity.jpg";
import MCuriosityImage from "../../../public/loopstudios-website-images/mobile/image-curiosity.jpg";
import DFromAboveImage from "../../../public/loopstudios-website-images/desktop/image-from-above.jpg";
import MFromAboveImage from "../../../public/loopstudios-website-images/mobile/image-from-above.jpg";
function Creations() {
  return (
    <section id="creations">
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Creations Header */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl font-josefin">
            Our Creations
          </h2>

          <button className="btn hidden md:block">See All</button>
        </div>
        {/* Items Container 1*/}
        <div className="item-container">
          <Item
            deskImgSrc={DEarthImage}
            mobImgSrc={MEarthImage}
            text={"Deep Earth"}
          />
          <Item
            deskImgSrc={DNightImage}
            mobImgSrc={MNightImage}
            text={"Night Arcade"}
          />
          <Item
            deskImgSrc={DSoccerImage}
            mobImgSrc={MSoccerImage}
            text={"Soccer Team VR"}
          />
          <Item
            deskImgSrc={DGridImage}
            mobImgSrc={MGridImage}
            text={"The Grid"}
          />
        </div>
        {/* Items Container 2 */}
        <div className="item-container mt-10">
          <Item
            deskImgSrc={DFromAboveImage}
            mobImgSrc={MFromAboveImage}
            text={"From Above VR"}
          />
          <Item
            deskImgSrc={DBorealisImage}
            mobImgSrc={MBorealisImage}
            text={"Pocket Borealis"}
          />
          <Item
            deskImgSrc={DCuriosityImage}
            mobImgSrc={MCuriosityImage}
            text={"The Curiosity"}
          />
          <Item
            deskImgSrc={DFisheyeImage}
            mobImgSrc={MFisheyeImage}
            text={"Make It Fisheye"}
          />
        </div>
        {/* Bottom button container */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
}

export default Creations;
