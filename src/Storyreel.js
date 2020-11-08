import React from "react";
import Story from "./Story";
import "./Storyreel.css";

function Storyreel() {
  return (
    <div className="storyreel">
      <Story
        image="https://www.smartertravel.com/uploads/2016/07/Niagara-Falls-e1501435218194.jpg"
        profilesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYze4d2NZJ5haPtVjJkC2E1xjl6M0O6ID4mA&usqp=CAU"
        title="Ranbir Kapoor"
      />
      <Story
        image="https://pix10.agoda.net/hotelImages/5076278/0/7ec23fba522007933686b1e138a05ae1.jpg?s=1024x768"
        profilesrc="https://www.thenewsminute.com/sites/default/files/DeepikaPadukone-PTI.jpg"
        title="Deepika"
      />
      <Story
        image="https://g.foolcdn.com/editorial/images/596696/las-vegas-sign-at-dusk.jpg"
        profilesrc="https://media.vogue.in/wp-content/uploads/2017/02/VogueAlia1Y3A4310_CMYK.jpg"
        title="Alia Bhat"
      />
      <Story
        image="https://media-cdn.tripadvisor.com/media/photo-s/16/e0/7b/c2/picture-clicked-at-the.jpg"
        profilesrc="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ayushmann-khurrana-29002-05-09-2019-06-04-30.jpg"
        title="Ayushmann"
      />
      <Story
        image="https://www.miamibeachguest.com/wp-content/uploads/2018/08/miami-beaches-for-surfing-and-party.jpg"
        profilesrc="https://images.yourstory.com/cs/wordpress/2017/12/isha-talwar-bangalore-days.jpg?fm=png&auto=format"
        title="Isha Talwar"
      />

      {/* Story */}
    </div>
  );
}

export default Storyreel;
