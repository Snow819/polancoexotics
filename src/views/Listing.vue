<template>
    <div class="Listing_heading">
        <div class="Listing_heading_wrap">
            <div class="Listing_text">
                <p>Shop Online. Pickup Today. It’s Fast, Simple and Easy.</p>
                <h1>Fast, Simple and Easy</h1>
                <Search/>

            </div>
        </div>
    </div>
    <div>
        <Mostsearched/>
    </div>
    <div>
        <searchingfor/>
    </div>
    <div>
        <Popularmakes/>
    </div>
    <div>
        <Reviews/>
    </div>
    <footer>
        <footervue/>
    </footer>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    border: none;
}
.Listing_heading{
    background-image: url(/public/Listing_bi.jpg);
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.Listing_heading_wrap{
    display: flex;
    justify-content: start;
    padding-top: 7cm;
    padding-left: 2cm;
    color: whitesmoke;
}
.Listing_text h1,.Listing_text p{
    padding-bottom: 30px;
}
.Listing_text h1{
    font-size: 5.9vh;
    font-weight: 800;
}
.Listing_text p{
    font-weight: 800;
    color: rgba(255, 255, 255, 0.651);
}
@media screen and (max-width: 1200px){
    *{
        padding: 0;
        margin: 0;
    }
    .Listing_heading{
    background-image: url(/public/Listing_bi.jpg);
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   }
   .Listing_heading_wrap{
    display: block;
    color: whitesmoke;
    padding: 250px 20px;
   }
   .Listing_text{
    padding: 0;
    margin: 0;
    text-align: center;
   }
   .Listing_text h1{
    font-size: clamp(20px, 5vh, 25px);
   }
   .Listing_text p{
    font-size: clamp(15px, 1vh, 18px);
   }

}
</style>
<script>
import Search from '@/components/Search.vue';
import Mostsearched from '@/components/Mostsearched.vue';
import searchingfor from '@/components/searchingfor.vue';
import Popularmakes from '@/components/Popularmakes.vue';
import Reviews from '@/components/Reviews.vue';
import footervue from '@/components/footer.vue';
export default {
    name:'Listing',
    components: {
        Search,
        Mostsearched,
        searchingfor,
        Popularmakes,
        Reviews,
        footervue
    },
}
</script>