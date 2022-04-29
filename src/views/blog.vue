<template>
<div class="head">
<a href="" class="blog"><img src="@/assets/images/blog.jpg" alt=""></a>
   </div>
    <article>
       <div class="container">
    
   <!-- <h1>Chào mừng</h1> -->
   <section class="item">
      <h1>Tin tức</h1>
      <a href=""> 
          <img src="@/assets/images/no_images.jpg" alt=""></a>
    

      <div class="article-right">
          <h3>Bài Viết Mẫu</h3>
           <p>Đây là trang blog của cửa hàng. Bạn có thể dùng blog để quảng bá sản phẩm mới, chia sẻ trải nghiệm của khách hàng, các mẹo mua hàng hoặc bất kì điều gì bạn....</p>
      </div>
   </section>
       </div>
     </article>

</template>
<style scoped>
.container{ 
    width: 900px;
    height: 500px;
    /* border: 1px solid red; */
}

.item {
    width:900px;
    height: 500px;
    /* border: 2px solid red; */

}
.article-right{
    display: inline-block;
    width:560px;
    margin-left: 20px;
     
}

.item img{
    width: 300px;
    height: 300px;
    display: inline-block;

}
h3{
    font-size: 20px;
    font-family:Arial, Helvetica, sans-serif;
}
.blog img{
    width:100%;
}
</style>