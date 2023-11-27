import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonInput,
  IonText,
  IonBackButton,
  IonRouterLink,
} from "@ionic/react";

import { logoFacebook, logoGoogle, eye, eyeOff } from "ionicons/icons";
import React from "react";

const Signup: React.FC = () => {
  const [ViewPassword, setViewPassword] = React.useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" size="small" fill="clear">
            <IonBackButton defaultHref="/" />
          </IonButton>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="h-full">
          {/* Left column container with background*/}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>
            {/* Right column container */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form>
                {/*Sign in section*/}
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <IonText className="mb-0 mr-4 text-lg">Sign up with</IonText>
                  {/* Facebook */}
                  <IonButton fill="clear">
                    {/* Facebook */}
                    <IonIcon icon={logoFacebook} size="large" />
                  </IonButton>
                  <IonButton fill="clear">
                    {/* Google */}
                    <IonIcon icon={logoGoogle} size="large" />
                  </IonButton>
                </div>
                {/* Separator between social media sign in and email/password sign in */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <IonText className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </IonText>
                </div>

                <div className="relative mb-6">
                  <IonInput
                    fill="outline"
                    id="custom-input"
                    labelPlacement="floating"
                    label="Email input"
                    type="email"
                    placeholder="email@domain.com"
                    required
                  ></IonInput>
                </div>
                <div className="relative mb-6">
                  <IonInput
                    fill="outline"
                    id="custom-input"
                    labelPlacement="floating"
                    label="Your Password"
                    type={ViewPassword ? "text" : "password"}
                    required
                    placeholder="Your Password"
                  ></IonInput>
                </div>
                <div className="flex relative mb-6">
                  <IonInput
                    fill="outline"
                    id="custom-input"
                    labelPlacement="floating"
                    label="Confirm Password"
                    type={ViewPassword ? "text" : "password"}
                    required
                    placeholder="Confirm Password"
                  ></IonInput>{" "}
                  {ViewPassword ? (
                    <IonButton
                      fill="clear"
                      onClick={() => setViewPassword(false)}
                    >
                      <IonIcon
                        className="absolute top-1/2 transform -translate-y-1/2 "
                        icon={eyeOff}
                        size="large"
                      />{" "}
                    </IonButton>
                  ) : (
                    <IonButton
                      fill="clear"
                      onClick={() => setViewPassword(true)}
                    >
                      {" "}
                      <IonIcon
                        className="absolute top-1/2 transform -translate-y-1/2 "
                        icon={eye}
                        size="large"
                      />
                    </IonButton>
                  )}
                </div>

                {/* Sign up button */}
                <div className="text-center lg:text-left">
                  {/* Remember me checkbox */}

                  <IonButton type="submit">Sign up</IonButton>

                  {/* Register link */}
                  <IonText className="block mb-0 mt-2 pt-1 text-sm font-semibold">
                    Not have an account?
                    <IonRouterLink
                      className="text-black hover:underline ml-2"
                      routerLink="/login"
                    >
                      Login
                    </IonRouterLink>
                  </IonText>
                </div>
              </form>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
