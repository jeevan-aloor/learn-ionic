import React from 'react';
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import CategoryCarousal from '../components/CategoryCarousal';
import HeroSection from '../components/HeroSection';
import FeaturedCarousal from '../components/FeaturedCarousal';
import CategoryDropdown from '../components/CategoryDropdown';
import FooterTabs from '../components/FooterTabs';

const Home: React.FC = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
          <Header />
        </IonToolbar>

        <IonSearchbar>
          <IonItem>
            <IonSelect placeholder="Category select">
              <IonSelectOption value="apple">Apple</IonSelectOption>
              <IonSelectOption value="banana">Banana</IonSelectOption>
              <IonSelectOption value="orange">Orange</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonSearchbar>
      </IonHeader>

      <IonContent>
        <CategoryDropdown />
        <HeroSection />
        <CategoryCarousal />
        <FeaturedCarousal />
      </IonContent>
    </IonPage>
  );
};

export default Home;
