import {
  IonBackButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
const cardData = [
  {
    title: "Men's Fashion",
    imgSrc:
      "https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg",
  },
  {
    title: "Women's Fashion",
    imgSrc:
      "https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg",
  },
  {
    title: "Kid's Fashion",
    imgSrc:
      "https://img.freepik.com/free-photo/group-beautiful-girls-boys-pastel-wall_155003-10578.jpg",
  },
  {
    title: "Men Watch",
    imgSrc:
      "https://img.freepik.com/free-photo/close-up-clock-with-time-change_23-2149241144.jpg",
  },
  {
    title: "Women Watch",
    imgSrc:
      "https://img.freepik.com/free-photo/woman-showing-her-nail-art-fingernails-with-watch_23-2149820446.jpg",
  },
  {
    title: "Phone",
    imgSrc:
      "https://img.freepik.com/free-vector/flat-design-smartphone-different-perspectives_52683-52558.jpg",
  },
  {
    title: "Men Footware",
    imgSrc:
      "https://img.freepik.com/free-photo/pair-brown-shoes-with-black-leather-sole-word-bottom_123827-23446.jpg",
  },
  {
    title: "Women Footware",
    imgSrc:
      "https://img.freepik.com/free-photo/flat-lay-feminine-elements-arrangement_23-2148418766.jpg",
  },
  {
    title: "Jewelry",
    imgSrc:
      "https://img.freepik.com/free-photo/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai_188544-10583.jpg",
  },
  {
    title: "Home Decor",
    imgSrc:
      "https://img.freepik.com/free-photo/interior-decoration-inspired-by-mexican-folklore_23-2150711269.jpg",
  },
  {
    title: "Collectibles & Art",
    imgSrc:
      "https://img.freepik.com/free-photo/earthenware-pottery-vase-with-ornate-multi-colored-design-generated-by-ai_188544-14015.jpg",
  },
  {
    title: "Beauty",
    imgSrc:
      "https://img.freepik.com/free-photo/skin-care-banner-concept-with-lotion_23-2149449116.jpg",
  },
  {
    title: "Toys",
    imgSrc:
      "https://img.freepik.com/free-photo/cute-plush-toys-arrangement_23-2150312314.jpg",
  },
  {
    title: "Sports",
    imgSrc:
      "https://img.freepik.com/free-photo/top-view-composition-with-neatly-arranged-organized-sport-items_23-2150275221.jpg",
  },
  {
    title: "Industrial equipment",
    imgSrc:
      "https://img.freepik.com/free-photo/top-view-steel-hammer-with-other-construction-elements-tools_23-2150576468.jpg",
  },
];
const Categories: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Header />
        </IonToolbar>
        <IonSearchbar />
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            {cardData.map((card, index) => (
              <IonCol
                key={index}
                size="12"
                size-sm="10"
                size-md="6"
                size-lg="4"
                size-xl="3"
              >
                <IonCard>
                  <IonImg
                    className="h-auto w-auto object-cover"
                    alt={`Card ${index + 1}`}
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

export default Categories;
