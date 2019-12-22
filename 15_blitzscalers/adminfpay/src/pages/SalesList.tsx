import {
    IonContent, useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    withIonLifeCycle,
    useIonViewWillLeave,
    IonHeader, IonPage,IonRow ,IonCol ,IonButtons,IonButton ,IonCard,IonCardContent, IonTitle, IonToolbar, IonSlide, IonImg, IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import React, { Component } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Redirect } from "react-router";
import axios from 'axios';
import './phone.css';

const { Camera } = Plugins;

const INITIAL_STATE = {
    data:[]
};




class SalesList extends React.Component{

    state: { data: any[] } = {
        data:[]
      }

     componentDidMount() {
        this.salesList();
    }
    
    async salesList() {

        axios.get(`https://paynodeapi.herokuapp.com/business`)
            .then(res => {
                console.log(res.data);
                const resData = res.data
                this.setState({
                    data: resData
                })
            })
    }
  
    render(){
      return(
        <IonPage id="login-page">
          <IonCard>
          <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
          <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
          </IonButtons>
            <IonTitle>Sales List</IonTitle>
          </IonToolbar>
        </IonHeader>

            <IonCardContent>
              {this.state.data.map((bus , i) => (
                <div key={i}>
                  <p> {bus.person_name} - {bus.amount} </p>
                </div>
              ))}
            </IonCardContent>
          </IonCard>
          <IonRow>
          <IonCol>
            <IonButton routerLink="/" className="next" color="success" expand="block">Return</IonButton>
          </IonCol>
        </IonRow>
          </IonPage >
      )
    }
  }
  
  export default SalesList;
  