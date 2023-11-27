import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";
import { arrowForwardCircleOutline } from "ionicons/icons";

const data = [
  {
    title: "Jewelry & Watch",
    image: "https://i.ebayimg.com/images/g/kEwAAOSwnZJcG8vM/s-l200.webp",
  },
  {
    title: "Beauty",
    image: "https://i.ebayimg.com/images/g/FVIAAOSwFURcG8vK/s-l200.webp",
  },
  {
    title: "Computer & Tablets",
    subtitle: "Embarking on a journey",
    image: "https://i.ebayimg.com/images/g/gE4AAOSwgnJcG8vI/s-l200.webp",
  },
  {
    title: "Toys",
    image: "https://i.ebayimg.com/images/g/MyIAAOSwsrlcG8vM/s-l200.webp",
  },
  {
    title: "Phones",
    image: "https://i.ebayimg.com/images/g/WREAAOSwh7tcG8vJ/s-l200.webp",
  },
  {
    title: "Home",
    image: "https://i.ebayimg.com/images/g/idwAAOSwgcdcG8vJ/s-l200.webp",
  },
  {
    title: "FootWare",
    subtitle: "Breathtaking evening hues",
    image: "https://i.ebayimg.com/images/g/hIgAAOSwyTtcJkbp/s-l200.webp",
  },
];
const CategoryCarousal: React.FC = () => {
  return (
    <>
      <div className="mt-[4rem]">
        <IonButton fill="clear" slot="start" className="ml-5">
          <h1 className="text-2xl  text-black">Category's </h1>
          <IonIcon
            slot="end"
            size="large"
            icon={arrowForwardCircleOutline}
          ></IonIcon>
        </IonButton>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={4}
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center ml-5"
            >
              <IonImg src={item.image} alt={item.title} className="mb-2 ml-5" />

              <IonText className="inline font-bold text-sm md:text-lg lg:text-xl ml-5">
                {item.title}
              </IonText>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CategoryCarousal;
