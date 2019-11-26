<template lang="html">
  <div class="">
      <hr>
    <button id="goto" @click="commentScroll('comment')">Go to porto</button>
    <hr>
    <hr>

    <!-- <p>{{$transk('Sign-in',{'name':'kamal','age':22})}}</p> -->

    <p>{{$transk('messages.trnx.admin.already_updated',{'status': 'txn-121'})}}</p>
    <p>{{$transk('Enter your :Name wallet address',{'Name': 'stripe'})}}</p>
    <hr>

    <select v-model="selected" @change="langc(selected)">
      <option  v-for="(lang, i) in $lang22.getLangLists()" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
    <h1>{{$t('title.name')}}</h1>
    <nuxt-link :to="'/info'" @click.native="nowChange()" class="button--grey">info</nuxt-link>
    <h2>{{dmixi}}</h2>
    <p>{{msg}}</p>
    <button type="button" name="button" @click="evnt()">emit/on</button>
    <select v-model="$i18n.locale" @change="lang($i18n.locale)">
      <option  v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
    <div class="">
      <nuxt-link to="/">homepage</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
      <button type="button" name="button" @click="logout()">logout</button>
    </div>

    <div class="">
      <button @click="$store.commit('project1/increment')">{{$store.state.project1.counter}}</button>
    </div>

    <div class="">
      <h1>from user</h1>
      {{us}}
    </div>

    <div class="">
      <ul>
        <li v-for="user in users"  :key="">{{user.name}}</li>
      </ul>
    </div>
    <div class="">
      <hr>
      <h1>permission with vuex with axios api github</h1>
      <ul>
        <li >{{$store.state.project1.permissions}}</li>
        <h2>m</h2>
        <h2>m</h2>
        <h2>m</h2>
        <h2>m</h2>
        <h2>m</h2>
        <h2>m</h2>
        <h2>m</h2>
        <h2>m</h2>
        <h2>m</h2>
      </ul>
    </div>

    <div class="" ref="1-4">
      <h1>This is scroll comment click</h1>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
    </div>

    <div class="" ref="1-3">
      <h1>This is scroll comment</h1>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
    </div>
    <div class="" ref="1-2">
      <h1>This is scroll comment</h1>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
    </div>

    <div class="" ref="1-1">
      <h1>This is scroll comment</h1>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
      <h2>m</h2>
    </div>
  </div>
</template>

<script>
import {http1,http2,http3} from '~/helpers/common/daxios'
import Dmixin from '~/helpers/mixins/dmixin'
import Lang2 from '~/helpers/common/lang'
import Vue from 'vue'
import axios from 'axios'

Vue.config.silent = true

// let lang22 = new Lang2()
//
//
// lang22.setMessage({
//     en: {
//         'login.now': 'login now kamal',
//         'me.r' : 'why not sign now',
//         'me.t' : 'why not sign now t',
//         'me.pt' : 'why not sign now pt'
//     }
// })
// lang22.setLocale('en');
// lang22.setFallback('en');
//
// let iteration = 0;
//
// var   translate =   function (key, options) {
//     iteration += 1;
//     const myIteration = iteration;
//     if(myIteration  === iteration){
//         return lang22.trans(key, options);
//     }
// };
// Vue.prototype.$lang22 = Vue.lang22 =lang22
// Vue.prototype.$transk = translate
// Vue.config.silent = true

export default {
  //middleware: ['isAuth'],
  data () {
    return {
      msg: [],
      us: [],
      selected: this.$lang22.getLocale()
    }
  },
  layout: 'default',
  async asyncData ({ params }) {
   // let { data } = await http1.get(`users`)
   let { data } = await http3.get(`i18n/en.json`)
   return { users: data }
  },
  mixins: [Dmixin],
  head () {
    return {
      title: 'info page',
    }
  },
  // beforeCreate: function beforeCreate() {
  //
  //       // Vue.util.defineReactive(this, '_lang', lang);
  //       Vue.util.defineReactive(this, '$lang22', lang22)
  //       Vue.util.defineReactive(this, '$transk', translate);
  //   },

  methods: {
      langc: function(l) {
          console.log(l)
          // this.$lang22.setLocale(l)
          //
          this.$lang22.setLocale(l)

          http3.get(`i18n/${l}.json`)
            .then((res)=>{
                this.$lang22.setMessage({
                    en: res.data
                })
            })

            http3.get(`i18n/${l}.json`)
              .then((res)=>{
                  this.$lang22.setLocaleMessage(res.data)
              })
          // console.log(this.$lang22.getLocale())
      },
    commentScroll: function(refName){
      var element = this.$refs[refName];
        console.log(element);
        if(element){
          element.classList.add('class-add');
          setTimeout(() => element.classList.remove('class-add'), 2000);
          var top = element.offsetTop;
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }

    },
    logout: function(){
      this.$cookies.set('authtoken', '', {
       path: '/',
       maxAge: 60 * 60 * 24 * 7
     })

      this.$router.push('/login')
    },
    nowChange: function (){
      //this.msg = []
      http3.get('api/review')
        .then((res)=>{
          //this.users = res.data
          this.msg = res.data
        })
        .catch((err) => {
        error({ statusCode: 404, message: err.message })
      })

      console.log('aw')
    },
    lang: function (l) {
      this.$router.push({
        query:{
          lang: l
        }
      })
      this.$i18n.locale = l
      if(process.browser){
          localStorage.setItem("lang", l);
        }
    },
    evnt: function() {
      this.$bus.$emit('activity');
    }
  },
  mounted: function () {

      if(process.browser){
      window.mssg = this.users
     }



      http3.get('i18n/en.json')
        .then((res)=>{
            this.$lang22.setLangLists(['bn','en','ru'])
            this.$lang22.setMessage({
                en: res.data
            })
        })



        http3.get('i18n/en.json')
          .then((res)=>{
              this.$lang22.setLangLists(['bn','en','ru'])
              this.$lang22.setLocaleMessage(res.data)
              this.$lang22.setFallMessage(res.data)
          })


    let c = this.$route.query.comment
    if(c){

      this.commentScroll(c)
    }

  },
  created: function () {

    if(process.browser){
      // Put the object into storage
      var person = { 'one': 1, 'two': 2, 'three': 3 }
     localStorage.setItem('person', JSON.stringify(person));

      // Retrieve the object from storage
      //var retrievedObject = localStorage.getItem('person');
      //console.log(person.one);
    }

    http3.get('api/u/auth-check',{
      headers:{
        'tokon': this.$cookies.get('authtoken')
      }
    })
     .then(response=>{
       //console.log(response.data)
       this.us = response.data
       if(response.data == 0){
         this.$cookies.set('authtoken', '', {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$router.push('/login')
       }
     })

    http3.get('api/review')
      .then((res)=>{
        //this.users = res.data
        this.msg = res.data
      })

      // http3.get('i18n/en.json')
      //   .then((res)=>{
      //       this.$lang22.setMessage({
      //           en: res.data
      //       })
      //     console.log(res.data)
      //   })

    http2.get('authUserPermissions.json')
      .then((res)=>{
        //this.users = res.data
        this.$store.commit('project1/permissionUpdate',res.data)
      })

    this.$bus.$on('activity',()=>{
      console.log("here is kamal")
    })
    // i18n lang
    if(process.browser){
      if(localStorage.getItem('lang')){
        if(this.$route.query.lang){
          this.$i18n.locale = this.$route.query.lang
        } else {
          this.$i18n.locale = localStorage.getItem('lang')
        }
      }
    }

  }

}
</script>

<style lang="scss" scoped >
  h1{
    color: red;
  }
  .class-add{
    border: 2px solid red;
    box-sizing: border-box;
  }
</style>
