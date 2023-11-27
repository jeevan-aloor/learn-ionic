import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  home,
  storefront,
  pricetag,
  search,
  cart,
  heart,
  person,
  notifications,
  settings,
  help,
  documentText,
  hammer,
  searchOutline,
  time,
  logOut,
} from "ionicons/icons";
import React from "react";

const SideMenu: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {/* Home */}
            <IonItem routerLink="/home">
              <IonIcon slot="start" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonItem>

            {/* Categories */}
            <IonItem routerLink="/categories">
              <IonIcon slot="start" icon={pricetag} />
              <IonLabel>Categories</IonLabel>
            </IonItem>

            {/* Cart */}
            <IonItem routerLink="/cart">
              <IonIcon slot="start" icon={cart} />
              <IonLabel>Cart</IonLabel>
            </IonItem>

            {/* Favorites/Wishlist */}
            <IonItem routerLink="/favorites">
              <IonIcon slot="start" icon={heart} />
              <IonLabel>Favorites</IonLabel>
            </IonItem>

            {/* Notifications */}
            <IonItem routerLink="/notifications">
              <IonIcon slot="start" icon={notifications} />
              <IonLabel>Notifications</IonLabel>
            </IonItem>

            {/* Help/Support */}
            <IonItem routerLink="/help">
              <IonIcon slot="start" icon={help} />
              <IonLabel>Help</IonLabel>
            </IonItem>

            {/* Terms and Conditions/Privacy Policy */}
            <IonItem routerLink="/terms">
              <IonIcon slot="start" icon={documentText} />
              <IonLabel>Terms & Privacy</IonLabel>
            </IonItem>

            {/* Your Bids */}
            <IonItem routerLink="/your-bids">
              <IonIcon slot="start" icon={hammer} />
              <IonLabel>Your Bids</IonLabel>
            </IonItem>

            {/* Order History */}
            <IonItem routerLink="/order-history">
              <IonIcon slot="start" icon={time} />
              <IonLabel>Order History</IonLabel>
            </IonItem>

            {/* Track Order */}
            <IonItem routerLink="/track-order">
              <IonIcon slot="start" icon={searchOutline} />
              <IonLabel>Track Order</IonLabel>
            </IonItem>

            {/* Shop/Store */}
            <IonItem routerLink="/shop">
              <IonIcon slot="start" icon={storefront} />
              <IonLabel>I'm Seller</IonLabel>
            </IonItem>

            {/* Profile */}
            <IonItem routerLink="/profile">
              <IonIcon slot="start" icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonItem>

            {/* Logout */}
            <IonItem routerLink="/profile">
              <IonIcon slot="start" icon={logOut} />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default SideMenu;
