import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import hero from "./hero.jpg";
import { chevronDownOutline } from "ionicons/icons";
const HeroSection: React.FC = () => {
  return (
    <>
      <div className="relative mb-10">
        <div className="container m-auto px-6 pt-5 md:px-12 lg:-mt-[1rem] lg:pl-[4.75rem]">
          <div className="flex items-center flex-wrap px-2 md:px-0 ">
            <div className="relative px-5 lg:w-6/12 -mt-2 ">
              <h1 className="font-bold text-4xl text-blue-700 md:text-5xl lg:w-10/12">
                Your favorite dishes, right at your door
              </h1>
              <IonButton className="mt-3">
                Shop now
                <IonIcon slot="end" icon={chevronDownOutline}></IonIcon>
              </IonButton>
              <p className="mt-5 text-gray-700 lg:w-10/12">
                Discover delightful cuisine, savor the flavors, and embark on a
                culinary adventure.
              </p>
            </div>
            <div className="ml-auto -mb-24 lg:-mb-[5rem] lg:w-6/12">
              <img
                src={hero}
                className="relative bg-transparent -mt-2"
                alt="Hero"
                loading="lazy"
                width="4500"
                height="4000"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
