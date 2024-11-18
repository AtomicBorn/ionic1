<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Ionic Components</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <h5 class="text-center py-3">Midterm Activity</h5>
            <ion-list>
                <ion-item routerLink="/card">
                    <ion-label>
                        <h2>Cards</h2>
                        <p><small>Cards are containers that display content such as text, images, buttons, and lists.</small></p>
                    </ion-label>
                </ion-item>

                <ion-item routerLink="/modal">
                    <ion-label>
                        <h2>Modal</h2>
                        <p><small>A modal is a dialog that appears on top of the app's content.</small></p>
                    </ion-label>
                </ion-item>

                <ion-item routerLink="/reorder">
                    <ion-label>
                        <h2>Reorder</h2>
                        <p><small>Reorder is a component that allows items to be dragged and to change its order.</small></p>
                    </ion-label>
                </ion-item>

                <ion-item routerLink="/floating">
                    <ion-label>
                        <h2>Floating Action Button</h2>
                        <p><small>FABs are container elements that contain one or more action buttons.</small></p>
                    </ion-label>
                </ion-item>
            </ion-list>
            <h5 class="text-center py-3">Pre-final Activity</h5>
            <ion-list>
                <ion-item routerLink="/swiper">
                    <ion-label>
                        <h2>Activity 1: Swiper Slider</h2>
                        <p><small>Learn how to implement slider.</small></p>
                    </ion-label>
                </ion-item>
            </ion-list>
            <ion-list>
                <ion-item routerLink="/loop">
                    <ion-label>
                        <h2>Activity 2: For loop with components</h2>
                        <p><small>Learn how to implement loop around reusable components.</small></p>
                    </ion-label>
                </ion-item>
            </ion-list>
            <ion-list>
                <ion-item routerLink="/localstorage">
                    <ion-label>
                        <h2>Activity 3: Local device storage</h2>
                        <p><small>Learn how to implement device storage.</small></p>
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

