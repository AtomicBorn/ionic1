<template>
    <ion-page> 
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>GPS | Geolocation</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="p-3">
                <button class="btn btn-primary btn-lg w-100" @click="getGeo()">Get Geolocation</button>
                <div class="mt-4">
                    <p>Latitude</p>
                    <input v-model="coords.latitude" class="form-control" type="text" />
                </div>
                <div>
                    <p>Longitude</p>
                    <input v-model="coords.longitude" class="form-control" type="text" />
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter } from '@ionic/vue';
import { Geolocation } from '@capacitor/geolocation';

export default defineComponent({
    name: "GPSScreen",
    components: { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter },
    data() {
        return {
            coords: {} as any
        }
    },
    methods: {
        async getGeo() {
            const coordinates = await Geolocation.getCurrentPosition();
            this.coords = coordinates.coords;
        }
    }
});
</script>