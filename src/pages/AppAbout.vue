<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    name: 'AppAbout',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>
<template>
    <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide><img width="500px" src="/public/img/about.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/img/about.webp" alt=""></swiper-slide>
        <swiper-slide><img src="/public/background.jpg" alt=""></swiper-slide>
        ...
    </swiper>
</template>