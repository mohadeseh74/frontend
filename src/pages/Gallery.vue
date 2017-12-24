<template lang="html">
<div class="">
  <loading-screen v-if="isLoading"></loading-screen>
<div class="gallery col-sm-12 no-padding"  v-cloak>
  <link rel="stylesheet" href="static/css/gallery.css">
<div class="parallax">
  <h2>گالری</h2>
</div>
<div class="navbar-header">
<ul>
  <li class="after-li"><router-link to="/">خانه</router-link></li>
  <li>گالری</li>
</ul>
</div>
<div class="col-sm-12 no-padding ">
<h2>پروژه های ما</h2>
<div class="container">
  <div class="col-md-4 col-sm-6 col-xs-12 img-boxes" v-for="gallery in galleries">
    <lightbox :src="gallery.image" album="a" :caption="gallery.title" >
     <div class=" over-box">
         <img :src="gallery.image" class="gallery-img">
       <div class="overlay">
         <div class="text">{{ gallery.title }}</div>
       </div>
     </div>
   </lightbox>
   </div>
</div>
</div>
</div>
</div>

</template>

<script>
import VueLightbox from 'vue-lightbox'
import Vue from 'vue'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
Vue.component('loading-screen', {
  template: '<div id="loading"><div class="cssload-triangles"><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div></div></div>'
})
export default {
  components: {
    VueLightbox
  },
  data () {
    return {
      title: 'گالری',
      isLoading: true,
      galleries: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
    this.gallery()
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
    gallery () {
      axios.get('http://144.76.233.153:8000/api/gallery/gallery/').then((response) => {
        this.galleries = response.data
      })
    }
  }
}
</script>

<style lang="css">
</style>
