<template>
    <ion-page> 
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Swiper</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" >
                <swiper-slide>
                    <img class="banner" src="https://www.creatopy.com/blog/wp-content/uploads/2018/07/banner-design-ideas.png" />
                </swiper-slide>
                <swiper-slide>
                    <img class="banner" src="https://reallygooddesigns.com/wp-content/uploads/2021/07/baner-ads-examples-tf.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <img class="banner" src="https://i2.wp.com/www.invoiceberry.com/blog/wp-content/uploads/2017/09/banner-example.png?fit=810%2C677&ssl=1"/>
                </swiper-slide>
            </swiper>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


export default defineComponent({
    name: "SwiperScreen",
    components: { Swiper, SwiperSlide, IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter },
    data() {
        return {
            swiper: {} as any
        }
    },
    methods: {
        async onSwiper(event: any) {
            this.swiper = event;
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