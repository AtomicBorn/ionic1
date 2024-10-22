<template>
  <ion-page>
  <ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
             <ion-back-button></ion-back-button> 
        </ion-buttons>
      <ion-title>Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
     <ion-button id="open-modal" expand="block">Open</ion-button>
    <p>{{ message }}</p>
    <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Welcome</ion-title>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-input
            label="Enter your name"
            label-placement="stacked"
            ref="input"
            type="text"
            placeholder="Your name"
          ></ion-input>
        </ion-item>
      </ion-content>
    </ion-modal>
  </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import { IonBackButton, IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonItem, IonInput,} from '@ionic/vue';
  import { OverlayEventDetail } from '@ionic/core/components';
  import { ref } from 'vue';

  const message = ref('This modal example uses triggers to automatically open a modal when the button is clicked.');

  const modal = ref();
  const input = ref();

  const cancel = () => modal.value.$el.dismiss(null, 'cancel');

  const confirm = () => {
    const name = input.value.$el.value;
    modal.value.$el.dismiss(name, 'confirm');
  };

  const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    if (ev.detail.role === 'confirm') {
      message.value = `Hello, ${ev.detail.data}!`;
    }
  };
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import {  IonPage, IonButtons, IonFooter } from '@ionic/vue';

    export default defineComponent({
        name: "ModalScreen",
        components: {IonPage, IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader,  IonContent, IonFooter },
        
    });

</script>