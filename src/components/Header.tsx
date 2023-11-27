import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { cart, personCircle, storefront } from "ionicons/icons";
import React from "react";
import CategoryDropdown from "./CategoryDropdown";

const Header: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle slot="start">Jony-Jee</IonTitle>
          <IonButtons slot="primary">
            <IonButton>
              {" "}
              <IonIcon slot="start" icon={cart} />
              <IonLabel>Cart</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
