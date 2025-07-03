<template>

  <div class="Shop-section">

    <div class="container">

      <div class="header">
        <h3 class="section-title">
          Shop Polanco Your Way
        </h3>
        <a href=""><button>View All<i class="bi bi-arrow-up-right"></i></button></a>
      </div>

      <div class="shop-body">

        <div class="tags">
          <b>New Cars for sale</b>
        </div>

        <div class="shop-body-list">
          <div>
            <ul>
              <li>Bugatti </li>
              <li>Koenigsegg</li>
              <li>Pagani</li>
              <li>McLaren</li>
              <li>Lamborghini</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Ferrari</li>
              <li>Maserati</li>
              <li>Aston Martin</li>
              <li>Bentley</li>
              <li>Rolls-Royce</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Spyker</li>
              <li>Noble</li>
              <li>Gumpert</li>
              <li>Zenvo</li>
              <li>Rimac</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Lotus</li>
              <li>Ariel</li>
              <li>Caterham</li>
              <li>Donkervoort</li>
              <li>Radical</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Hennessey</li>
              <li>SSC (Shelby SuperCars)</li>
              <li>Devel</li>
              <li>Czinger</li>
              <li>Rimac</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}

.Shop-section{
    padding:120px;
    padding-top: 10px;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section-title{
    font-weight: 700;
    /* background-color: yellowgreen; */
    font-size: 180%;
}

.header button{
    padding: 10px;
    border-radius: 7px;
    background-color: inherit;
}

.tags{
  padding-top: 10px;
  padding-bottom: 10px;
}

.shop-body-list{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

ul li{
  padding: 10px 3px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.616);
}
ul li:hover{
  color: black;
  cursor: pointer;
}

@media screen and (max-width: 768px ) {
    *{
        padding: 0;
        margin: 0;
    }

    .header{
    display: flex;
    flex-direction: column;
    row-gap: 0.5cm;
   }

   .Shop-section{
    padding:10px;
    padding-top: 10px;
   }

   .shop-body-list{
  display: grid;
  grid-template-columns:1fr;
  text-align: center;
  row-gap: 30px;
   }
  }

</style>