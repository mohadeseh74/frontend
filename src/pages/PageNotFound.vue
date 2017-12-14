<template lang="html">
<div class="">
    <loading-screen v-if="isLoading"></loading-screen>
    <link rel="stylesheet" href="static/css/404.css">
  <div class="col-sm-12 no-padding not-f">
<img src="static/img/ERROR 404.jpg" alt="" class="desk-photo">
<img src="static/img/404.jpg" alt="" class="mobile-photo">
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
      title: 'صفحه مورد نظر یافت نشد',
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
