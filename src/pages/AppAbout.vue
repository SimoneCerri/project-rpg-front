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
    <section id="banner">
        <div class="container-fluid g-0">
            <img src="/public/img/about.webp" alt="">
        </div>
    </section>
    <div class="container py-5 text-center">
        <h2 class="">
            <strong>
                Let's find something about our Devs
            </strong>
        </h2>
    </div>
    <section id="carousel">
        <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide><img src="/public/img/about.webp" alt=""><span class="prova text-danger">Nome
                    Cognome</span></swiper-slide>
            <swiper-slide><img src="/public/img/about.webp" alt=""></swiper-slide>
            <swiper-slide><img src="/public/background.jpg" alt=""></swiper-slide>
            ...
        </swiper>
    </section>
    <section id="our_service">
        <h2 class="py-5">
            OUR SERVICES
        </h2>
        <div class="container py-5">
            <div class="row">
                <ul class="list-unstyled col-3">
                    <li class="text-white pb-3">
                        <strong>
                            Title
                        </strong>
                    </li>
                    <li class="">
                        lorem
                    </li>
                    <li class="">
                        lorem
                    </li>
                    <li class="">
                        lorem
                    </li>
                </ul>
                <ul class="list-unstyled col-3">
                    <li class="text-white pb-3">
                        <strong>
                            Title
                        </strong>
                    </li>
                    <li class="">
                        lorem
                    </li>
                    <li class="">
                        lorem
                    </li>
                    <li class="">
                        lorem
                    </li>
                </ul>
                <ul class="list-unstyled col-3">
                    <li class="text-white pb-3">
                        <strong>
                            Title
                        </strong>
                    </li>
                    <li class="">
                        lorem
                    </li>
                    <li class="">
                        lorem
                    </li>
                    <li class="">
                        lorem
                    </li>
                </ul>
                <ul class="list-unstyled col-3">
                    <li class="text-white pb-3">
                        <strong>
                            Title
                        </strong>
                    </li>
                    <li class="">
                        lorem
                    </li>
                    <li class="">
                        lorem
                    </li>
                    <li class="">
                        lorem
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section id="our_clients" class="py-5 text-center">
        <h2 class="py-5">
            SOME OF OUR CLIENTS
        </h2>
        <div class="container py-5">
            <div class="col-2"><img src="" alt=""></div>
            <div class="col-2"><img src="" alt=""></div>
            <div class="col-2"><img src="" alt=""></div>
            <div class="col-2"><img src="" alt=""></div>
            <div class="col-2"><img src="" alt=""></div>
        </div>
    </section>
</template>

<style scoped>
#banner {
    border-bottom: 2px solid rgb(59, 127, 204);

    img {
        width: 100%;
        max-height: 500px;
    }
}

h2 {
    font-size: 60px;
}

#carousel {
    border-top: 2px solid rgb(59, 127, 204);

    img {
        width: 100%;
        max-height: 800px;
    }

    /* .prova {
        position: absolute;
        top: 50%;
        z-index: 20;
    } */
}

#our_service {
    text-align: center;
    background-color: rgb(34, 101, 163);
}

#our_clients {
    background-color: white;
}
</style>