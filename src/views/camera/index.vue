<template>
    <ion-page> 
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Camera Implementation</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="p-3">
                <button class="btn btn-primary btn-lg w-100" @click="takePhoto()">Take Photo</button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter } from '@ionic/vue';
import { Camera, CameraResultType } from '@capacitor/camera';

export default defineComponent({
    name: "CameraScreen",
    components: { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter },
    data() {
        return {
            
        }
    },
    methods: {
        async takePhoto() {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri
            });
            var imageUrl = image.webPath;
            // imageElement.src = imageUrl;
            }
        }
});
</script>