<template lang="html">
<div class="">
    <loading-screen v-if="isLoading"></loading-screen>
  <link rel="stylesheet" href="static/css/about.css">
  <div class="about col-sm-12 no-padding">
<div class="parallax">
<h2>  درباره ی ما</h2>
</div>
    <div class="navbar-header">
      <ul>
        <li class="after-li"><router-link to="/">خانه</router-link></li>
        <li>درباره ی ما</li>
      </ul>
    </div>
    <h2>درباره ی آراز</h2>
<div class="col-sm-12 f-about-w">
  <div class="col-sm-12 col-md-7 one-flex-w">
<div class="box-2-about">
<img src="static/img/who we are.jpg" alt="">
</div>
  </div>
  <div class="col-sm-12 col-md-5 col-lg-4 ">
    <div class="box-1-about">
      <h3>بیش از 40 سال سابقه در  انواع خدمات حمل و نقل</h3>
      <p>شرکت حمل و نقل بین المللی بارفرابری آراز به عنوان یکی از شرکتهای پویا و پیشرو در زمینه حمل و نقل بین المللی کالا و ترخیص در اسرع وقت و  دارای لوح تقدیر از کانون انجمن های حمل و نقل بین المللی وهمچنین اخذ ثبت سفارش و کمیسیون ماده یک و استاندارد و خدمات بارفرابری در ایران در تمامی بنادر  وسایر   شهرهای  کشور دارای شعب   فعال  می باشد.</p>
      <ul class="about-tik">
        <li>حمل دریایی و ترانزیت از روسیه به بنادر ایران بصورت روزانه</li>
        <li>حمل و ترانزیت مستمر و ماهیانه خودرو به مقصد عراق</li>
        <li>حمل و ترخیص محمولات خاص به مناطق آزاد کشور</li>
        <li>حمل و ترخیص ماشین آلات سنگین و راهسازی</li>
        <li>حمل زمینی مواد غذایی به کشور ترکیه و عراق</li>
      </ul>
    </div>
  </div>
</div>
    <div class="clearfix"></div>
<section class="we-doing">
  <div class="col-sm-12 no-padding what-we-do">
  <div class="col-md-6 col-lg-5 no-padding">
  <div class="img-wedo">
  <img src="static/img/about-2-946x628.jpg" alt="">
  </div>
  </div>
  <div class="col-md-6 col-lg-7 no-padding box-about3">
<div class="content-abo">
  <h2>رویکرد ما</h2>
  <p>رویکرد اصلی این مجموعه همانا ارائه سرویس هایی با کیفیت بالا و بر اساس جدیدترین استانداردهای صنعت حمل و نقل در دنیا با استفاده از آخرین دستاوردهای این صنعت به اقتصادی ترین و مطمئن ترین  شکل  ممکن می باشد. این شرکت رابطه بسیار خوبی با نمایندگان خطوط کشتیرانی ، خطوط هوایی ، شرکتهای فورواردی بزرگ دنیا در ایران و سایر مقامهای محلی از جمله مقامهای بندری ، فرودگاهی ، گمرگی و غیره در کشور دارد که کمک شایانی به ارائه خدماتی در خور می نماید.</p>
</div>
  </div>
  </div>
</section>
    <div class="clearfix"></div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('loading-screen', {
  template: '<div id="loading"><div class="cssload-triangles"><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div></div></div>'
})
export default {
  data () {
    return {
      title: 'درباره ی ما',
      isLoading: true
    }
  },
  head: {
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1', id: 'desc' }
    ]
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
</script>

<style lang="css">
</style>
