import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { playCircle, radio, library, search } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import Home from "../pages/Home";

const FooterTabs: React.FC = () => {
  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          {/* <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/radio" render={() => <Home />} exact={true} />
          <Route path="/library" render={() => <Home />} exact={true} />
          <Route path="/search" render={() => <Home />} exact={true} /> */}
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={playCircle} />
            <IonLabel>Listen now</IonLabel>
          </IonTabButton>

          <IonTabButton tab="radio" href="/radio">
            <IonIcon icon={radio} />
            <IonLabel>Radio</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/library">
            <IonIcon icon={library} />
            <IonLabel>Library</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};

export default FooterTabs;
