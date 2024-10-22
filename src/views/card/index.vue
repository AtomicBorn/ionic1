<template>
  <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
                <ion-title>Cards</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content>
        <!-- Card 1 -->
        <ion-card>
          <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>

        <!-- Card 2 -->
        <ion-card>
          <img alt="" src="https://ionic.io/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fionicframeworkcom%2Fd784b88d-9379-49f6-a7ca-502cfe1ea5f0_ionic%2Blogotype%2Bblue.png&w=384&q=75" />
          <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>

        <!-- Card 3 -->
        <ion-card>
          <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
          <ion-button fill="clear">Action 1</ion-button>
          <ion-button fill="clear">Action 2</ion-button>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
  });
</script>
