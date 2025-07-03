<template>
    <div class="Browse-section">
        <div class="container">
            <div class="header">
                <!-- Header Section -->
                 <h3 class="section-title">Browse by Type</h3>
                 <a href=""><button>View All<i class="bi bi-arrow-up-right"></i></button></a>
            </div>
            <div class="images-container">
                <div class="images-subcontainer-1">
                    <img src="/images/1st.jpg" alt="photo">
                    <img src="/images/2nd.jpg" alt="photo">
                </div>
                <div class="images-subcontainer-2">
                    <img src="/images/3rd.jpg" alt="photo">
                    <img src="/images/4th.jpg" alt="photo">
                    <img src="/images/5th.jpg" alt="photo">
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

.Browse-section{
    padding:120px;
    padding-top: 30px;
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

.images-subcontainer-1{
    display: flex;
    row-gap: 0.5cm;
    column-gap: 0.5cm;
    padding-top: 25px;
}

.images-subcontainer-1 img{
    width: 100%;
    height: 290px;
}

.images-subcontainer-2{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5cm;
    padding-top: 20px;
}

.images-subcontainer-2 img{
    width: 100%;
    height: 290px;
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

   .Browse-section{
    padding:10px;
    padding-top: 10px;
   }

   .images-subcontainer-1{
    display: flex;
    flex-direction: column;
    row-gap: 0.5cm;
    column-gap: 0.5cm;
    padding-top: 25px;
   }

   .images-subcontainer-2{
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5cm;
    padding-top: 20px;
    }
}
</style>