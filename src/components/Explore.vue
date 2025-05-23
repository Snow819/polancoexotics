<style scoped>
  .Explore_brands{
    padding-top: 2.5cm;
    padding-left: 70px;
    padding-right: 70px;
    padding-bottom: 1.5cm;
    background-color: #F9FBFC;
    position: relative;
    top: -40px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
  .Explore_brands_header{
    display: flex;
    justify-content: space-between;
  }
  .Explore_brands_header button{
    border: none;
    background-color: inherit;
    padding: 7px;
    border-radius: 7px;
  }
  .Explore_brands_header button:hover{
    background-color:  #9966CC;
    color: white;
    cursor: pointer;
  }
  .Explore_brands_brands img{
     height: 100px;
     width: 100px;
  }
  .Explore_brands_brands{
    display: flex;
    justify-content: space-between;
    /* gap: 10px; */
    text-align: center;
    margin-top: 1cm;
  }
  .Explore_brands_brands div{
    background-color: white;
    padding: 30px;
    outline: 2px solid rgba(0, 0, 0, 0.059);
    border-radius: 10px;
  }
  .Explore_brands_brands div:hover{
    padding: 35px;
    transition: 0.9s;
    cursor: pointer;
  } 
  /* =====================Explore All Vehicles===================== */
  .Explore_vehicles{
    padding-top: 2.5cm;
    padding-left: 70px;
    padding-right: 70px;
    padding-bottom: 1.5cm;
  }
  /* ===================Explore All Vehicles End============ */
  
  @media screen and (max-width: 1200px) {
    *{
    padding: 0;
    margin: 0;
   } 
   .Explore_brands{
    padding: 35px;
   }
   .Explore_brands_brands{
    display: block;
    column-gap: 20px;
   }
   .Explore_brands_header{
    display: block;
   }
   .Explore_brands_header h2{
    padding-bottom: 20px;
   }
   .Explore_brands_brands div{
    margin-bottom: 1cm;
   } 
  }
</style>
<template>
    <div class="Explore_brands">
        <div class="Explore_brands_header">
            <h2>Explore Our Premium Brands</h2>
            <button>Show All Brands <i class="bi bi-arrow-up-right"></i></button>
        </div>
         <div class="Explore_brands_brands">
          <div>
            <img src="../../public/ferrari.png" alt="image">
            <p>Ferrari</p>
          </div>
          <div>
            <img src="../../public/lamborghini.png" alt="image">
            <p>Lamborghini</p>
          </div>
          <div>
            <img src="../../public/maserati.png" alt="image">
            <p>Maserati</p>
          </div>
          <div>
            <img src="../../public/Audi.png" alt="">
            <p>Audi</p>
          </div>
          <div>
            <img src="../../public/koenisegg.png" alt="">
            <p>koenisegg</p>
          </div>
          <div>
            <img src="../../public/astonmartin.png" alt="">
            <p>Aston martin</p>
          </div>
         </div>   
    </div>
    <div class="Explore_vehicles">
      <div class="Explore_brands_header">
            <h2>Explore All Vehicles</h2>
            <button>View All <i class="bi bi-arrow-up-right"></i></button>
        </div>
           <div>
            
           </div>
    </div>

    
</template>
