<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Profile Screen</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div>
                <ion-list>
                    <ion-item>
                        <ion-input label="Name:"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-input label="Age:"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-input label="Address:"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-input label="Birthday:"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-input label="Gender:"></ion-input>
                    </ion-item>

                    <ion-item>
                        <ion-input label="Email:"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-input label="Contact No.:"></ion-input>
                    </ion-item>
                </ion-list>
            </div>
        </ion-content>
        <ion-footer>
            <ion-toolbar class="p-1">
                <button slot="end" class="btn btn-primary w-50" @click="nextScreen()" >Done</button>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonInput, IonItem, IonList, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

    export default defineComponent({
        name: "IndexScreen",
        components: { IonInput, IonItem, IonList, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
        methods: {
            async nextScreen() {
                this.$router.push('/login');
            }
        }
    });

</script>