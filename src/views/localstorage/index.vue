<template>
    <ion-page> 
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Local Storage</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="p-3">
                <div class="mb-3">
                  <label class="form-label">Key Name</label>
                  <input v-model="form.key" type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <label class="form-label">Value</label>
                  <input v-model="form.value" type="text" class="form-control">
                </div>
                <button class="btn btn-primary w-100" @click="save()">Save Storage</button>
                <button class="btn btn-primary w-100 mt-3" @click="getData()">Get Data</button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter } from '@ionic/vue';
import { Preferences } from '@capacitor/preferences';

export default defineComponent({
    name: "LocalStorageScreen",
    components: { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter },
    data() {
        return {
            form: {
                key: '',
                value: ''
            }
        }
    },
    methods: {
        async save() {
            await Preferences.set({
                key: this.form.key,
                value: this.form.value
            });
        },
        async getData() {
            const data = await Preferences.get({
                key: this.form.key 
            });

            if (data.value) {
                this.form.value = data.value;
            }
        }
    }
});
</script>

<style scoped>
.banner{
    width: 100vw;
    height: 260px;
    object-fit: cover;
    object-position: center;
}
</style>