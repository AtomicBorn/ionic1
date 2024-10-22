<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Ionic Components</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item routerLink="/card">
                    <ion-label>
                        <h2>Cards</h2>
                        <p>Cards are containers that display content such as text, images, buttons, and lists.</p>
                    </ion-label>
                </ion-item>

                <ion-item routerLink="/modal">
                    <ion-label>
                        <h2>Modal</h2>
                        <p>A modal is a dialog that appears on top of the app's content.</p>
                    </ion-label>
                </ion-item>

                <ion-item routerLink="/reorder">
                    <ion-label>
                        <h2>Reorder</h2>
                        <p>Reorder is a component that allows items to be dragged and to change its order.</p>
                    </ion-label>
                </ion-item>

                <ion-item routerLink="/floating">
                    <ion-label>
                        <h2>Floating Action Button</h2>
                        <p>FABs are container elements that contain one or more action buttons.</p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent } from '@ionic/vue';

    export default defineComponent({
        name: "IndexScreen",
        components: { IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent },
        methods: {
            async nextScreen() {
                this.$router.push("");
            }
        }
    });

</script>

