<style>
.home_hero_page{
    background-image: url(/public/images/9fa419ec2abcb24a9fc1024787f16aaa.jpeg);
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
}
.home_inside{
  padding-top: 5cm;
  text-align: center;
  color: white;
  position: relative;
}
.home_inside p{
  color:white;
  margin-bottom: 1cm;
}
.home_inside h2{
  margin-bottom: 1cm;
  font-size: 220%;
}
.home_inside button{
  border-radius: 25px;
  padding: 10px;
  font-size: 100%;
  background-color: #ffffff2b;
  color: white;
  font-weight: 800;
}
.home_inside_button{
  display: flex;
  gap: 20px;
  justify-content: center;
}
@media screen and (max-width: 1200px){
  *{
    margin: 0;
    padding: 0;
  }
 .home_inside{
  padding-left:10px;
  padding-right: 10px;
 }
 .home_inside_button{
  gap: 10px;
 }
 .home_inside h2{
  font-size: clamp(1rem, 2vw + 1rem, 2rem);
 }

}
</style>
<template>
    <div class="home_hero_page">
      <div class="home_inside">
        <p>Find your Dream car ready for use</p>
        <h2>Welcome To The Home Of Luxury Cars</h2>
    <Search/>
    <p>Or Browse Featured Model</p>
    <div class="home_inside_button">
      <button>Gasoline</button>
      <button>Hybrid</button>
      <button>Electric</button>
      <button>Emerging</button>
      </div>
    </div>
    </div>
    <Explore/>
    <Explorevehicles/>
    <fairprice/>
</template>
<script>
// Import the Search component using relative path
import Search from '@/components/Search.vue'
import Explore from '@/components/Explore.vue';
import Explorevehicles from '@/components/Explorevehicles.vue';
import fairprice from '@/components/fairprice.vue';
export default {
  name: 'Home',
  // Register the component
  components: {
    Search,
    Explore,
    Explorevehicles,
    fairprice
  },
  // Rest of your component options
}
</script>