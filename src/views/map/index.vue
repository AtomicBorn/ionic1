<template>
    <ion-page> 
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Map Implementation</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div id="map"></div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter } from '@ionic/vue';
import { GoogleMap } from '@capacitor/google-maps';


export default defineComponent({
    name: "MapScreen",
    components: { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter },
    data() {
        return {
            apiKey: 'PRIVATE'
        }
    },
    methods: {
        async initMap() {
            const mapRef = document.getElementById('map') as HTMLElement;
            const newMap = await GoogleMap.create({
                id: 'my-map', 
                element: mapRef, 
                apiKey: this.apiKey, 
                config: {
                    center: {
                        lat: 10.243445089176971, 
                        lng: 123.7534772303561,
                    },
                    zoom: 16, 
                },
            });
        }
    },
    async mounted() {
        this.initMap();
    }
});
</script>

<style scoped>
#map {
  display: inline-block;
  width: 100vw;
  height: 100vh;
}
</style>
