<template lang="html">
<div class="">
    <loading-screen v-if="isLoading"></loading-screen>
    <link rel="stylesheet" href="static/css/service.css">
<div class="service col-sm-12 no-padding">
<div class="parallax">
  <h2>خدمات</h2>
</div>
<div class="navbar-header">
  <ul>
    <li class="after-li"><router-link to="/">خانه</router-link></li>
    <li>خدمات</li>
  </ul>
</div>
<div class="col-sm-12 service-box2">
  <vue-tabs active-tab-color="#78abf1" active-text-color="white" type="pills" :start-index="1" direction="vertical" class="container">
     <v-tab :title="detail.title" icon="ti-user" v-for="detail in details">
       <div class="content-for-tab col-sm-12 no-padding">
         <img :src="detail.image" alt="">
         <p>{{ detail.description }}</p>
       </div>
     </v-tab>
 </vue-tabs>
</div>
    <div class="clearfix"></div>
    <div class="col-sm-2"></div>
    <div class="col-sm-8 no-padding advantages">
  <h3><span>ویژگی های ما</span></h3>
  <div class="col-sm-6 no-padding">
<div class="box-adva">
<img src="static/img/headphones (2).png" alt="">
<p>مشاوره در امور حمل و نقل</p>
    <div class="line-ser"></div>
    <p class="text-detail">مشاوره حمل و نقل بین المللی کالا و کلیه خدمات مرتبط ، ترخیص کالا ، بیمه و بسته بندی کالا</p>

</div>
  </div>
  <div class="col-sm-6 no-padding">
    <div class="box-adva">
<img src="static/img/aeroplane (2).png" alt="">
<p>سرعت در ارائه خدمات</p>
    <div class="line-ser"></div>
    <p class="text-detail">با بهره گیری از مجموعه ای از متخصصین و کارشناسان مجرب صنعت حمل و نقل به طور خستگی ناپذیر در جهت اعتلا به اهداف والای این مجموعه که مهمترین آنها صداقت در انجام امور محوله در کمترین زمان ممکن.</p>
    </div>
  </div>
  <div class="col-sm-6 no-padding">
    <div class="box-adva">
<img src="static/img/global-grid (2).png" alt="">
<p>خدمات بین المللی</p>
    <div class="line-ser"></div>
    <p class="text-detail">ارایه خدمات حمل و مقل بین المللی با توجه به محدودیت ها و شرایط شما از هر نقطه ای به نقطه ای دیگر در سراسر دنیا</p>

    </div>
  </div>
  <div class="col-sm-6 no-padding">
    <div class="box-adva">
<img src="static/img/briefcase (2).png" alt="">
<p>خدمات امن</p>
    <div class="line-ser"></div>
    <p class="text-detail">هدف ما تکیه بر اصول اخلاقی، امنیت و سلامت بخشیدن به کالا و سرمایه شما می باشد</p>

    </div>
  </div>
</div>
    <div class="col-sm-2"></div>

</div>
</div>
</template>

<script>
import { VueTabs, VTab } from 'vue-nav-tabs'
import Vue from 'vue'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
Vue.component('loading-screen', {
  template: '<div id="loading"><div class="cssload-triangles"><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div></div></div>'
})
export default {
  components: {
    VueTabs,
    VTab
  },
  data () {
    return {
      title: 'خدمات',
      isLoading: true,
      details: []
    }
  },
  mounted () {
    this.ServiceDetail()
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
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
  methods: {
    ServiceDetail () {
      axios.get('http://144.76.233.153:8000/api/service/service/').then((response) => {
        this.details = response.data
      })
    }
  }
}
</script>

<style lang="css">
</style>
