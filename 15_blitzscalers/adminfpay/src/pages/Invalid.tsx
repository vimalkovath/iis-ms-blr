import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom'

import './invalid.css';

const Invalid: React.FC = (props) => {


  const res = props;

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
        </IonButtons>
          <IonTitle>Invalid</IonTitle>
        </IonToolbar>
     
       
      </IonHeader>
      <IonContent>

        <div className="login-logo contentblock" >
        <span className="plese center">
        Please try other method
</span>
        </div>

<IonRow>
<IonCol>
  <IonButton routerLink="/security" className="alphabutton" color="success" expand="block">TRY ALPHA-NUMERIC</IonButton>
</IonCol>
</IonRow>
      </IonContent>
      <IonRow>
        <IonCol>
        <IonButtons >
        <Link to={{
          pathname: '/'
        }} color="success" >
       Back
         </Link>
        </IonButtons>
        </IonCol>
      </IonRow>


    </IonPage>
  );
};

export default Invalid;

