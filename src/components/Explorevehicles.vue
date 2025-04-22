<template>
  <div class="app-container">
    <CardCarousel :cards="carouselItems" title="" />
  </div>
</template>

<script>
import CardCarousel from '@/components/CardCarousel.vue'

export default {
  name: 'App',
  components: {
    CardCarousel
  },
  data() {
    return {
      carouselItems: [
        {
          image: '/images/mercedes-benz-s-class.jpg',
          title: 'Mercedes-Benz S-Class',
          description: 'The epitome of luxury and comfort with cutting-edge technology.',
          price: '$110,000',
          badge: 'New'
        },
        {
          image: '/images/BMW_7.jpg',
          title: 'BMW 7 Series',
          description: 'A sophisticated blend of performance and executive comfort.',
          price: '$95,800',
          badge: 'Featured'
        },
        {
          image: '/images/Audi_A8.jpg',
          title: 'Audi A8',
          description: 'Advanced technology with Quattro all-wheel drive system.',
          price: '$88,500'
        },
        {
          image: '/images/Lexus_LS.jpg',
          title: 'Lexus LS',
          description: 'Japanese luxury with exceptional attention to detail.',
          price: '$77,250',
          badge: 'Sale'
        },
        {
          image: '/images/Tesla_model_s.jpg',
          title: 'Tesla Model S',
          description: 'Electric luxury with autopilot and incredible acceleration.',
          price: '$89,990'
        },
        {
          image: '/images/porsche_panamera.jpg',
          title: 'Porsche Panamera',
          description: 'Sports car performance with executive comfort.',
          price: '$92,400'
        },
        {
          image: '/images/ferarri_488_GTB.jpg',
          title: 'Ferrari 488 GTB',
          description: 'Experience the thrill of Italian engineering',
          price: '$1,200/day',
          badge: 'Popular'
        },
        {
          image: '/images/lamborghini-huracan.jpg',
          title: 'Lamborghini Huracan',
          description: 'Unleash your inner speed demon',
          price: '$1,500/day',
          badge: 'New'
        },
        {
          image: '/images/porsche_911_turbo.jpg',
          title: 'Porsche 911 Turbo',
          description: 'German precision and performance',
          price: '$950/day',
        },
        {
          image: '/images/mclaren_720s.jpg',
          title: 'McLaren 720S',
          description: 'Cutting-edge performance and design',
          price: '$1,800/day',
          badge: 'Limited'
        },
        {
          image: '/images/aston_martin_DB11.jpg',
          title: 'Aston Martin DB11',
          description: 'British luxury and sophistication',
          price: '$1,100/day',
        },
        {
          image: '/images/-mercedes-benz-amg-gt-background-image.jpg',
          title: 'Mercedes AMG GT',
          description: 'German engineering meets luxury',
          price: '$950/day',
        }, 
        {
          image: '/images/bentley-continental-gt-1200-x-900-wallpaper-llhgv8qtg7bg8aer.webp',
          title: 'Bentley Continental GT',
          description: 'The ultimate in luxury grand touring',
          price: '$1,400/day',
        },
        {
          image: '/images/R8.jpg',  
          title: 'Audi R8',
          description: 'Everyday supercar with exceptional handling',
          price: '$900/day',
        }
      ]
    };
  }
};
</script>

<style>
.app-container {
  font-family: 'Arial', sans-serif;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0rem 1.5rem;
}
</style>