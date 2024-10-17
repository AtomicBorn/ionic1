<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Home Screen</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent } from '@ionic/vue';

    export default defineComponent({
        name: "IndexScreen",
        components: { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent }
    });

</script>

