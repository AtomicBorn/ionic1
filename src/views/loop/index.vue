<template>
    <ion-page> 
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Loop</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" >
                <swiper-slide v-for="(banner, i) in banners" :key="i">
                    <img class="banner" :src="banner" />
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
    name: "LoopScreen",
    components: { Swiper, SwiperSlide, IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter },
    data() {
        return {
            swiper: {} as any,
            banners: [
                "https://reallygooddesigns.com/wp-content/uploads/2021/07/baner-ads-examples-tf.jpg",
                "https://i2.wp.com/www.invoiceberry.com/blog/wp-content/uploads/2017/09/banner-example.png?fit=810%2C677&ssl=1",
                "https://www.creatopy.com/blog/wp-content/uploads/2018/07/banner-design-ideas.png",
                "https://designshifu.com/wp-content/uploads/2022/11/Ad-banner-design-ideas-examples-that-get-the-maximum-clicks.jpg"
            ]
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