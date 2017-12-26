<template>
<div class="">
  <loading-screen v-if="isLoading"></loading-screen>
  <link rel="stylesheet" href="static/css/home.css">
  <div class="slider col-sm-12 no-padding">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in slides" :key="slide.title"><img :src="slide.image" alt=""></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  <div class="clearfix">

  </div>

  <div class="quote col-sm-12 no-padding">
    <h1>درخواست سفارش</h1>
    <div class="container box-quote">
      <form method="post" @submit.prevent="validateBeforeSubmit">
        <div class="box-1">
          <div class="col-sm-6 col-md-4 col-xs-12 order-one box1-1">
            <label for="">کشور و شهر مبدا</label>
            <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('sender') }" name="sender"  value=""  v-model="request.sender">
          <div  v-show="errors.has('sender')" class="help is-danger">{{ errors.first('sender') }}</div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-two box1-1">
            <label for="">کشور و شهر مقصد</label>
                <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('recipient') }" name="recipient"  value=""  v-model="request.recipient">
                    <div  v-show="errors.has('recipient')" class="help is-danger">{{ errors.first('recipient') }}</div>
          </div>

          <div class="col-sm-6 col-xs-12 col-md-4 order-three box1-1">
            <label for="">نوع حمل و نقل</label>
            <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('method') }" name="method"  value=""  v-model="request.method">
                    <div  v-show="errors.has('method')" class="help is-danger">{{ errors.first('method') }}</div>
        </div>
          <div class="col-sm-6 col-xs-12 col-md-4 order-4 box1-1">
            <label for="">نوع کالا</label>
            <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('goods_type') }" name="goods_type"  value=""  v-model="request.goods_type">
                    <div  v-show="errors.has('goods_type')" class="help is-danger">{{ errors.first('goods_type') }}</div>
        </div>
        <div class="col-sm-6 col-xs-12 col-md-4 order-5 box1-1">
          <label for="">وزن تقریبی</label>
          <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('weight') }" name="weight"  value=""  v-model="request.weight">
                  <div  v-show="errors.has('weight')" class="help is-danger">{{ errors.first('weight') }}</div>
      </div>
      <div class="col-sm-6 col-xs-12 col-md-4 order-6 box1-1">
        <label for="">ابعاد تقریبی کالا</label>
        <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('dimentions') }" name="dimentions"  value=""  v-model="request.dimentions">
                <div  v-show="errors.has('dimentions')" class="help is-danger">{{ errors.first('dimentions') }}</div>
    </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-7 box1-1">
            <label for="">نام</label>
            <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('first_name') }" data-vv-delay="1000" name="first_name" value="" v-model="request.first_name">
            <div v-show="errors.has('first_name')" class="help is-danger">{{ errors.first('first_name') }}</div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-8 box1-1">
            <label for="">نام خانوادگی</label>
            <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('last_name') }" data-vv-delay="1000" name="last_name" value="" v-model="request.last_name">
            <div v-show="errors.has('last_name')" class="help is-danger">{{ errors.first('last_name') }}</div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-9 box1-1">
            <label for="">ایمیل</label>
            <input type="email" v-validate="'email'" :class="{'input': true, 'is-danger': errors.has('email') }" data-vv-delay="1000" name="email" value="" v-model="request.email">
              <div v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-10 box1-1">
            <label for="">شماره موبایل</label>
            <input type="number" v-validate="'required|numeric|min:8|max:11'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('phone_number') }"  name="phone_number" value="" v-model="request.phone_number">
            <div v-show="errors.has('phone_number')" class="help is-danger">{{ errors.first('phone_number') }}</div>
          </div>
          <div class="col-sm-6 col-md-4 col-xs-12 order-11 box1-2">
            <input type="submit" name="" value="ثبت سفارش">
          </div>
        </div>
      </form>

    </div>
  </div>
  <div class="clearfix"></div>
  <div class="col-sm-12 no-padding services">
    <h1>خدمات ما</h1>
    <div class="container-fluid box-services">
      <a :href="'/Service'" class="service-1 col-sm-6 col-xs-12 col-md-2" v-for="service in services" :key="service.name">
        <div class=" over-box">
          <img :src="service.image" alt="" class="image">
          <div class="overlay">
            <div class="text">{{ service.name }}</div>
          </div>
        </div>
      </a>

    </div>
  </div>
  <div class="clearfix"></div>
  <div class="col-sm-12 no-padding about">
    <h1>درباره ی ما</h1>
    <div class="container about-box">
      <div class="col-md-3 col-sm-2">

      </div>
      <div class="col-md-6 col-sm-8">
        <ul class="tabs">
          <li>
            <input type="radio" checked name="tabs" id="tab1">
            <label for="tab1">پیشرو در امور حمل و نقل</label>
            <div id="tab-content1" class="tab-content animated fadeIn">
            آراز پیشگام در زمینه ارائه خدمات فرابری نوین در ایران بر اساس استانداردهای روز دنیا می باشد که با بهره گیری از مجموعه ای از متخصصین و کارشناسان مجرب صنعت حمل و نقل به طور خستگی ناپذیر در جهت اعتلا به اهداف والای این مجموعه که مهمترین آنها صداقت در انجام امور محوله در کمترین زمان ممکن و جلب رضایت مشتریان بوده در حال تلاش می باشد.
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" id="tab2">
            <label for="tab2">ارتباطات گسترده</label>
            <div id="tab-content2" class="tab-content animated fadeIn">
این شرکت رابطه بسیار خوبی با نمایندگان خطوط کشتیرانی، خطوط هوایی، شرکتهای فورواردی بزرگ دنیا در ایران و سایر مقامهای محلی از جمله مقامهای بندر ، فرودگاهی، گمرگی و غیره در کشور دارد که کمک شایانی به ارائه خدماتی در خور می نماید.
            </div>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>
      <div class="col-md-3 col-sm-2">
      </div>
    </div>
    <div class="clearfix"></div>
    <div class="col-sm-12 read-more">
      <a :href="'/About'">بیشتر بدانیم</a>
    </div>
  </div>
  <div class="clearfix"></div>
  <div class="col-sm-12 no-padding statistics">
    <div class="col-sm-6 no-padding">
      <div class="col-xs-6 no-padding" v-for="statistic in statistics">
        <div class="statis-box">
        <div class="iCountUp">
          <i-count-up
            :start="0"
            :end='statistic.number'
            :decimals="0"
            :duration="2.5"
            :options="options"
          ></i-count-up>
          <h4>{{ statistic.name }}</h4>
        </div>
      </div>
      </div>

    </div>
    <div class="col-sm-6 img-box-sta no-padding">
      <img src="static/img/adad.jpg" alt="">
    </div>
  </div>
    <div class="clearfix"></div>

    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <!-- <h3 slot="header">custom header</h3> -->
      <div slot="body" class="body-paragraph">
        <p>درخواست شما ثبت گردید, لطفا منتظر تماس همکاران ما باشید</p>
        <p  v-text="modalText"></p>
        <p>با تشکر, کلینیک نیل</p>
      </div>
      <p slot="footer">
        <button class="modal-default-button" @click="showModal=false">
          تایید
        </button>
      </p>
    </modal>


</div>
</template>

<script>
import Vue from 'vue'
import ICountUp from 'vue-countup-v2'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import farsi from 'vee-validate/dist/locale/fa'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
Vue.component('loading-screen', {
  template: '<div id="loading"><div class="cssload-triangles"><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div></div></div>'
})
Vue.component('modal', {
  template: '#modal-template'
})
export default {
  components: {
    ICountUp,
    VeeValidate
  },
  data () {
    return {
      local: 'fa',
      title: 'خانه',
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true
      },
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
        numerals: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
      },
      isLoading: true,
      slides: [],
      services: [],
      statistics: [],
      countries: [],
      request: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        sender: '',
        dimentions: '',
        weight: '',
        goods_type: '',
        recipient: '',
        method: ''
      },
      showModal: false
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
    this.slider()
    this.ourService()
    this.statistic()
  },
  methods: {
    slider () {
      axios.get('http://144.76.233.153:8000/api/index/slider/').then((response) => {
        this.slides = response.data
      })
    },
    ourService () {
      axios.get('http://144.76.233.153:8000/api/service/our_service/').then((response) => {
        this.services = response.data
      })
    },
    statistic () {
      axios.get('http://144.76.233.153:8000/api/index/statistic/').then((response) => {
        this.statistics = response.data
      })
    },
    createRequest () {
      var self = this
      axios({
        method: 'post',
        url: 'http://144.76.233.153:8000/api/request/request/',
        data: JSON.stringify(this.request),
        headers: {'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(function (response) {
          self.request = {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            sender: '',
            dimentions: '',
            weight: '',
            goods_type: '',
            recipient: '',
            method: ''
          }
          self.$validator.pause()
          setTimeout(() => {
            self.$validator.resume()
          }, 6000)
          self.modalText = 'کد پیگیری شما: ' + (response.data.id + 1000)
          self.showModal = true
        })
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.createRequest()
          return
        }

        alert('لطفا موارد ذکر شده در بخش ها را تصحیح فرمایید.')
      })
    }
  },
  created () {
    this.$validator.localize('fa', {
      messages: farsi.messages,
      attributes: {
        first_name: 'نام',
        last_name: 'نام خانوادگی',
        phone_number: 'شماره تلفن',
        sender: 'شهر مبدا',
        recipient: 'شهر مقصد',
        method: 'نوع حمل و نقل',
        dimentions: 'ابعاد تقریبی کالا',
        weight: 'وزن تقریبی کالا',
        goods_type: 'نوع کالا'
      }
    })

    this.$validator.localize('fa')
  }
}
</script>

<style lang="css">
</style>
