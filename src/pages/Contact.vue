<template lang="html">
  <div class="">
      <loading-screen v-if="isLoading"></loading-screen>
      <link rel="stylesheet" href="static/css/contact.css">
  <div class="contact col-sm-12 no-padding">
<div class="parallax">
  <h2>تماس با ما</h2>
</div>
  <div class="navbar-header">
    <ul>
      <li class="after-li"><router-link to="/">خانه</router-link></li>
      <li>تماس با ما</li>
    </ul>
  </div>
  <div class="col-sm-12 no-padding text-ri">
    <div class="col-md-5 col-sm-12 contact-inf">
      <h2>اطلاعات تماس</h2>
      <div class="box-inf col-sm-12">
        <div class="col-sm-12 partition">
          <p class="tittle">آدرس</p>
          <p class="content-inf">
            <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
            <a href="#" v-for="address in addresses">{{ address.address }}</a>
          </p>
        </div>
        <div class="col-sm-12 partition have-border">
          <p class="tittle">تلفن</p>
          <p class="content-inf">
            <span><i class="fa fa-phone" aria-hidden="true"></i></span>
            <a href="#" v-for="phone in phones">{{ phone.phone }}</a>
          </p>
        </div>
        <div class="col-sm-12 partition">
          <p class="tittle">شبکه های اجتماعی</p>
          <p class="content-inf">
            <ul class="social-inf" v-for="socialNetwork in socialNetworks">
              <li><a :href="socialNetwork.instagram" class="fa fa-instagram" aria-hidden="true"></a></li>
              <li><a :href="socialNetwork.telegram" class="fa fa-telegram" aria-hidden="true"></a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-7 col-sm-12 contact-form">
      <h2>در تماس باشید</h2>
      <div class="col-sm-12 no-padding">
        <form method="post" @submit.prevent="validateBeforeSubmit">
          <div class="col-sm-12 flex-f">

            <div class="col-sm-6 content-pad-l fl-22" >
              <input type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name') }" data-vv-delay="1000" name="name" value="" class="inp-inf" placeholder="نام و نام خانوادگی"  v-model="comment.name">
              <div v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</div>
            </div>
            <div class="col-sm-6 content-pad-r fl-11" >
              <input type="number" v-validate="''" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('phone_number') }"  name="phone_number" value="" class="inp-inf" placeholder="شماره موبایل" v-model="comment.phone_number">
              <div v-show="errors.has('phone_number')" class="help is-danger">{{ errors.first('phone_number') }}</div>
            </div>
          </div>
          <div class="clearfix">
          </div>
          <div class="col-sm-12">
            <div class="col-sm-12 tex-pad">
              <textarea type="text" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('description') }" data-vv-delay="1000" name="description" rows="8" cols="80" class="text-inf" placeholder="توضیحات"  v-model="comment.description"></textarea>
              <div v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</div>
            </div>
          </div>
          <div class="col-sm-12 flex-f">
            <div class="col-sm-6 content-pad-l fl-22">
              <input type="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" data-vv-delay="1000" name="email" value=""class="inp-inf top-marg" placeholder="ایمیل"  v-model="comment.email">
              <div v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</div>
            </div>
            <div class="col-sm-6 content-pad-r fl-11">
              <input type="submit" name="" class="inf-sub" value="ثبت">
            </div>
          </div>
        </form>
        <div class="req-comment">
          <p v-if="commentSuccess">کامنت شما با موفقیت ثبت شد و منتظر تایید است</p>
          <p v-if="commentFail">fuck off</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import farsi from 'vee-validate/dist/locale/fa'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
Vue.component('loading-screen', {
  template: '<div id="loading"><div class="cssload-triangles"><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div><div class="cssload-tri"></div><div class="cssload-tri cssload-invert"></div></div></div>'
})
export default {
  components: {
    VeeValidate
  },
  data () {
    return {
      title: 'تماس با ما',
      isLoading: true,
      local: 'fa',
      addresses: [],
      phones: [],
      socialNetworks: [],
      comment: {
        name: '',
        email: '',
        description: '',
        phone_number: null
      },
      commentSuccess: false,
      commentFail: false
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
    this.address()
    this.phone()
    this.socialNetwork()
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  },
  methods: {
    address () {
      axios.get('http://127.0.0.1:8000/api/index/address/').then((response) => {
        this.addresses = response.data
      })
    },
    phone () {
      axios.get('http://127.0.0.1:8000/api/index/phone/').then((response) => {
        this.phones = response.data
      })
    },
    socialNetwork () {
      axios.get('http://127.0.0.1:8000/api/index/social_network/').then((response) => {
        this.socialNetworks = response.data
      })
    },
    createComment () {
      var self = this
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/contact/contact_us/',
        data: JSON.stringify(this.comment),
        headers: {'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(function (response) {
          self.comment = {
            name: '',
            description: '',
            email: '',
            phone_number: null
          }
          self.commentSuccess = true
        })
        .catch(function (error) {
          if (error) {
            self.commentFail = true
            self.errors.clear()
          }
        })
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.createComment()
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
        name: 'نام و نام خانوادگی',
        description: 'توضیحات',
        email: 'ایمیل',
        phone_number: 'شماره تلفن'
      }
    })

    this.$validator.localize('fa')
  }
}
</script>

<style lang="css">
</style>
