<template>
  <div class="Latest_blog_post">
    <div class="Latest_blog_header">
      <h2>Latest Blog Posts</h2>
      <button>View All <i class="bi bi-arrow-up-right"></i></button>
    </div>
    <div class="Latest_blog_container">
      <div>
      <img src="/images/firstcar.jpg" alt="img">
      <sub>Admin . November 22,2023</sub>
      <p>2024 BMW ALPINA XB7 with exclusive details,<br>
        extraordinary</p>
    </div>
    <div>
      <img src="/images/secondcar.jpg" alt="img">
      <sub>Admin . November 22,2023</sub>
      <p>BMW X6 M50i is designed to exceed your <br>
        sportiest.</p>
    </div>
    <div>
      <img src="/images/thirdcar.jpg" alt="img">
      <sub>Admin . November 22,2023</sub>
      <p>BMW X5 Gold 2024 Sport Review: Light on <br>
        Sport</p>
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
  border:none;
}
.Latest_blog_post{
  padding-top: 2.5cm;
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 1.5cm;
}
.Latest_blog_container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Latest_blog_container img{
  border-radius: 10px;
  padding-bottom: 15px;
  border-bottom-left-radius: 10px;
}
.Latest_blog_container sub{
  padding-bottom: 10px;
  font-weight: 800;
}
.Latest_blog_container p{
  font-weight: 800;
  padding-top: 10px;
  font-size: 115%;
}
.Latest_blog_header{
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.Latest_blog_header button{
  background-color: inherit;
}
.Latest_blog_header h2{
  font-weight: 400;
}
@media screen and (max-width: 1200px){
  *{
    padding: 0;
    margin: 0;
  }
  .Latest_blog_post{
  padding: 0;
  }
  .Latest_blog_container{
  display: flex;
  flex-direction:column;
  }
  .Latest_blog_container div{
    display: flex;
    flex-direction:column;
    padding: 10px;
  }
  .Latest_blog_header{
    display: flex;
    flex-direction:column;
    column-gap:10px;
  }
  .Latest_blog_container img{
    width: 100%;
  }
}
</style>