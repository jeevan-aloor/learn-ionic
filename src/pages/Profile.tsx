import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { heart, person, pencil, bag, location, logOut } from "ionicons/icons";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
const cardData = [
  {
    title: "Favorites",
    imgSrc: heart,
  },
  {
    title: "History",
    imgSrc: bag,
  },
  {
    title: "Track",
    imgSrc: location,
  },
];
const Profile: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [username, setUsername] = useState("user1");
  const [email, setEmail] = useState("user1@gmail.com");
  const [address, setaddress] = useState("Your address");
  const [city, setcity] = useState("Your city");
  const [country, setcountry] = useState("Your country");

  function confirm() {
    modal.current?.dismiss();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Header />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* User Info Card */}
        <IonCard>
          <IonCardHeader>
            <IonRow>
              <IonIcon size="large" src={person} />
              <IonCardTitle className="mt-2">User Profile</IonCardTitle>
            </IonRow>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="none">
              <IonItem>
                <IonLabel>Email:</IonLabel>
                <IonLabel>user@example.com</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Username:</IonLabel>
                <IonLabel>JohnDoe</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Address:</IonLabel>
                <IonLabel>123 Main Street</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>City:</IonLabel>
                <IonLabel>Cityville</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Country:</IonLabel>
                <IonLabel>YourCountry</IonLabel>
              </IonItem>

              <IonButton id="open-modal">
                Edit
                <IonIcon slot="end" icon={pencil}></IonIcon>
              </IonButton>
              <IonButton>
                Logout
                <IonIcon slot="end" icon={logOut}></IonIcon>
              </IonButton>
              <IonModal ref={modal} trigger="open-modal">
                <IonHeader>
                  <IonToolbar>
                    <IonButtons slot="start">
                      <IonButton onClick={() => modal.current?.dismiss()}>
                        Cancel
                      </IonButton>
                    </IonButtons>
                    <IonTitle>Edit Profile</IonTitle>
                    <IonButtons slot="end">
                      <IonButton
                        fill="solid"
                        color="success"
                        strong={true}
                        onClick={() => confirm()}
                      >
                        Confirm
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                  <IonItem>
                    <IonInput
                      label="User Name"
                      labelPlacement="stacked"
                      type="text"
                      placeholder="User name"
                      value={username}
                      onIonChange={(e: any) => setUsername(e.target.value)}
                    />
                  </IonItem>
                  <IonItem>
                    <IonInput
                      label="Email"
                      labelPlacement="stacked"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onIonChange={(e: any) => setEmail(e.target.value)}
                    />
                  </IonItem>
                  <IonItem>
                    <IonInput
                      label="Address"
                      labelPlacement="stacked"
                      type="text"
                      placeholder="Address"
                      value={address}
                      onIonChange={(e: any) => setaddress(e.target.value)}
                    />
                  </IonItem>{" "}
                  <IonItem>
                    <IonInput
                      label="City"
                      labelPlacement="stacked"
                      type="text"
                      placeholder="City"
                      value={city}
                      onIonChange={(e: any) => setcity(e.target.value)}
                    />
                  </IonItem>
                  <IonItem>
                    <IonInput
                      label="country"
                      labelPlacement="stacked"
                      type="text"
                      placeholder="country"
                      value={country}
                      onIonChange={(e: any) => setcountry(e.target.value)}
                    />
                  </IonItem>
                </IonContent>
              </IonModal>
            </IonList>
          </IonCardContent>
        </IonCard>{" "}
        <IonGrid>
          <IonRow>
            {cardData.map((card, index) => (
              <IonCol key={index}>
                <IonCard>
                  <IonImg
                    alt={`Card ${index + 1}`}
                    className="max-w-[100px] mx-auto"
                    src={card.imgSrc}
                  />
                  <IonCardHeader>
                    <IonCardTitle className="text-center">
                      {card.title}
                    </IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
