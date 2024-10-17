<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Log In Screen</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="px-4 py-5">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
            </div>
        </ion-content>
        <ion-footer>
            <ion-toolbar class="p-1">
                <button slot="end" class="btn btn-primary w-50" @click="nextScreen()">Log In</button>
            </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

    export default defineComponent({
        name: "LogInScreen",
        components: { IonBackButton, IonButtons, IonToolbar, IonTitle, IonHeader, IonPage, IonContent, IonFooter },
        methods: {
            async nextScreen() {
                this.$router.push('/tabs/home');
            }
        }
    });

</script>
