144.76.233.153:8000<template>
<div>
  <loading-screen v-if="isLoading"></loading-screen>
  <nav class="col-sm-12 no-padding desk">
    <div class="col-sm-5 col-md-4 social">
      <ul v-for="socialNetwork in socialNetworks">
        <li>
          ۰۲۱۶۶۴۱۵۸۹۶
        </li>
        <li>
          <a href="tel:02188523686"><i class="fa fa-phone" aria-hidden="true"></i></a>
        </li>
        <li>
          <a :href="socialNetwork.telegram"><i class="fa fa-telegram" aria-hidden="true"></i></a>
        </li>
        <li>
          <a :href="socialNetwork.instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
    <div class="col-sm-2 col-md-4 logo-shape no-padding">
      <div class="logo-holder">
        <a href="#">
          <img src="static/img/LOGO1.png" class="part-1-logo">
          <img src="static/img/233.png" class="part-2-logo">
        </a>
      </div>
    </div>
    <div class="col-sm-5 col-md-4 pad-le-nav">
      <ul class="links">
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li>
          <router-link to="/Gallery">گالری</router-link>
        </li>
        <li>
          <router-link to="Service">خدمات</router-link>
        </li>
        <li>
          <router-link to="About">درباره ی ما</router-link>
        </li>
        <li>
          <router-link to="Contact">تماس با ما</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <nav class="bottomMenu col-sm-12 no-padding">
    <div class="col-sm-5 col-md-4 social">
      <ul v-for="socialNetwork in socialNetworks">
        <li>
          ۰۲۱۶۶۴۱۵۸۹۶
        </li>
        <li>
          <a href="tel:02188523686"><i class="fa fa-phone" aria-hidden="true"></i></a>
        </li>
        <li>
          <a :href="socialNetwork.telegram"><i class="fa fa-telegram" aria-hidden="true"></i></a>
        </li>
        <li>
          <a :href="socialNetwork.instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
    <div class="col-sm-2 col-md-4 logo-shape no-padding">
      <div class="logo-holder">
        <a href="#">
        <img src="static/img/LOGO1.png" class="part-1-logo3">
        </a>
      </div>
    </div>
    <div class="col-sm-5 col-md-4 pad-le-nav">
      <ul class="links">
        <li>
          <router-link to="/">خانه</router-link>
        </li>
        <li>
          <router-link to="/Gallery">گالری</router-link>
        </li>
        <li>
          <router-link to="Service">خدمات</router-link>
        </li>
        <li>
          <router-link to="About">درباره ی ما</router-link>
        </li>
        <li>
          <router-link to="Contact">تماس با ما</router-link>
        </li>
      </ul>
    </div>
</nav>
<div class="mobile-menu">
  <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button', '.open-1', '.open-2', '.open-3', '.open-4', '.open-5']" @on-open="open">
    <nav id="menu">
      <ul class="links">
        <li class="open-1">
          <router-link to="/">خانه</router-link>
        </li>
        <li class="open-2">
          <router-link to="/Gallery">گالری</router-link>
        </li>
        <li class="open-3">
          <router-link to="Service">خدمات</router-link>
        </li>
        <li class="open-4">
          <router-link to="About">درباره ی ما</router-link>
        </li>
        <li class="open-5">
          <router-link to="Contact">تماس با ما</router-link>
        </li>
      </ul>
      <div class=" line-menu">

      </div>
      <div class="col-sm-5 social">
        <ul v-for="socialNetwork in socialNetworks">
          <li>
            <a href="tel:02188523686"><i class="fa fa-phone" aria-hidden="true"></i></a>
          </li>
          <li>
            <a :href="socialNetwork.telegram"><i class="fa fa-telegram" aria-hidden="true"></i></a>
          </li>
          <li>
            <a :href="socialNetwork.instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
        </ul>
        <div class="logo-3">
          <img src="static/img/LOGO1.png" class="part-1-logo">
          <img src="static/img/233.png" class="part-2-logo">
        </div>
      </div>
    </nav>
    <main id="panel">
      <header>
        <div class="icon-menu-3">
          <button class="toggle-button"><div id="nav-icon3">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
          </button>
          <img src="static/img/LOGO (2).png" alt="">
        </div>
      </header>
    </main>
  </Slideout>
</div>
      <router-view/>
        <div class="clearfix"></div>
      <footer>
        <div class="map-box">
          <gmap-map
             :center="center"
             :zoom="7"
             style="width: 100%; height: 400px"
           >
             <gmap-marker
               :key="index"
               v-for="(m, index) in markers"
               :position="m.position"
               :clickable="true"
               :draggable="true"
               @click="center=m.position"
             ></gmap-marker>
           </gmap-map>
        </div>
          <div class="clearfix"></div>
        <div class="footer col-sm-12">
          <div class="col-lg-3 col-sm-12 quick">
            <h3>لینک سریع</h3>
            <ul class="footer-links">
              <li>
                <router-link to="/">خانه</router-link>
              </li>
              <li>
                <router-link to="/Gallery">گالری</router-link>
              </li>
              <li>
                <router-link to="Service">خدمات</router-link>
              </li>
              <li>
                <router-link to="About">درباره ی ما</router-link>
              </li>
              <li>
                <router-link to="Contact">تماس با ما</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-4 address" v-for="address in addresses">
            <h3>آدرس</h3>
            <p>{{ address.address }}</p>
          </div>
          <div class="col-lg-3 col-sm-4 phone" v-for="phone in phones">
            <h3>تلفن</h3>
            <p>{{ phone.phone }}</p>
            <p>araz@info.com</p>
          </div>
          <div class="col-lg-3 col-sm-4 hours">
            <h3>ساعات کاری</h3>
            <p v-for="openinghour in openinghours">{{ openinghour.day }} :<span> {{ openinghour.time }}</span></p>
          </div>

          <div class="col-sm-12 footer-2 no-padding">
            <p>طراحی شده توسط تیم برنامه نویسی اکنون</p>
          </div>
        </div>
      </footer>
</div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
import Slideout from 'vue-slideout'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAoMkfNFRDjjObAb_uQzpbhMQbo5GyDV-Y',
    v: 'v=3'
    // libraries: 'places', //// If you need to use place input
  }
})
Vue.component('loading-screen', {
  template: '<div id="loading"><div class="cssload-triangles"><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div></div></div>'
})
export default {
  name: 'app',
  data () {
    return {
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }],
      isLoading: true,
      openinghours: [],
      addresses: [],
      phones: [],
      socialNetworks: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
    this.openinghour()
    this.address()
    this.phone()
    this.socialNetwork()
  },
  components: {
    Slideout
  },
  methods: {
    open: function () {
      console.log('slideoutOpen')
    },
    openinghour () {
      axios.get('http://144.76.233.153:8000/api/index/opening_hour/').then((response) => {
        this.openinghours = response.data
      })
    },
    socialNetwork () {
      axios.get('http://144.76.233.153:8000/api/index/social_network/').then((response) => {
        this.socialNetworks = response.data
      })
    },
    address () {
      axios.get('http://144.76.233.153:8000/api/index/address/').then((response) => {
        this.addresses = response.data
      })
    },
    phone () {
      axios.get('http://144.76.233.153:8000/api/index/phone/').then((response) => {
        this.phones = response.data
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
