import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonPage, IonCard, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { Redirect } from "react-router";

interface OwnProps extends RouteComponentProps { }



const Signup: React.FC = (props) => {

  const [username, setUsername] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const Signup = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!username) {
      setUsernameError(true);
    } else {
      console.log('inside');
      // return <Redirect to={"/signupcamera"} />;
      goForward();


    }




  };
  let goForward = () => {
    (props as any).history.push("/")
  }

  return (
    <IonPage id="signup-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
      
        <IonRow>
          <IonCol col-6>
              <IonButton routerLink="/phone" className="next next-special" color="success" expand="block">
               Do Payment
              </IonButton>
          </IonCol>

          <IonCol col-6>
              <IonButton routerLink="/phone" className="next next-special" color="success" expand="block">
                Alfanumeric Pay
              </IonButton>
          </IonCol>

        </IonRow>

      
        <IonRow>
        <IonCol col-6>
            <IonButton routerLink="/saleslist" className="next next-special" color="success" expand="block">Sales List</IonButton>
          </IonCol>
          <IonCol col-6>
          <IonButton routerLink="/signupcamera" className="next next-special" color="success" expand="block">New User </IonButton>
        </IonCol>
        </IonRow>

      </IonContent>

    </IonPage>
  );
};

export default Signup;
