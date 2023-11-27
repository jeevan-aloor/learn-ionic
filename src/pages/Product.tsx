import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { chevronDown, close, filter } from "ionicons/icons";
const products = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
  img: "https://ionicframework.com/docs/img/demos/card-media.png",
}));
const Products: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

  function confirm() {
    modal.current?.dismiss();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Header />
        </IonToolbar>

        <IonSearchbar />
        <div className="flex justify-center gap-5 mt-1 mb-1">
          <IonButton id="open-sort-modal" fill="clear">
            Sort
            <IonIcon slot="end" icon={filter}></IonIcon>
          </IonButton>
          <IonButton id="open-SubCategories-modal" fill="clear">
            Sub Categories
            <IonIcon slot="end" icon={chevronDown}></IonIcon>
          </IonButton>
        </div>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {products.map((product) => (
              <IonCol
                key={product.id}
                size="12"
                size-md="6"
                size-lg="4"
                size-xl="3"
              >
                <IonCard>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="m-auto h-auto"
                  />
                  <IonCardContent>
                    <p>{product.name}</p>
                    <p>Price: ${product.price}</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonModal ref={modal} trigger="open-sort-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                  <IonIcon slot="end" icon={close}></IonIcon>
                </IonButton>
              </IonButtons>
              <IonTitle>Sort</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonRadioGroup
            //   value={selectedRadio}
            //   onIonChange={(e) => setSelectedRadio(e.detail.value)}
            >
              <IonItem>
                <IonLabel>Option 1</IonLabel>
                <IonRadio slot="start" value="option1" />
              </IonItem>

              <IonItem>
                <IonLabel>Option 2</IonLabel>
                <IonRadio slot="start" value="option2" />
              </IonItem>

              <IonItem>
                <IonLabel>Option 3</IonLabel>
                <IonRadio slot="start" value="option3" />
              </IonItem>

              <IonItem>
                <IonLabel>Option 4</IonLabel>
                <IonRadio slot="start" value="option4" />
              </IonItem>

              <IonItem>
                <IonLabel>Option 5</IonLabel>
                <IonRadio slot="start" value="option5" />
              </IonItem>
            </IonRadioGroup>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Products;
