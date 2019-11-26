<template lang="html">
  <div class="">
  <nuxt/>
  </div>
</template>

<script>
import {http1,http2,http3} from '~/helpers/common/daxios'
import Dmixin from '~/helpers/mixins/dmixin'
import Lang2 from '~/helpers/common/lang'
import Vue from 'vue'
import axios from 'axios'

let lang22 = new Lang2()


// lang22.setMessage({
//     en: {
//         'login.now': 'login now kamal',
//         'me.r' : 'why not sign now',
//         'me.t' : 'why not sign now t',
//         'me.pt' : 'why not sign now pt'
//     }
// })
lang22.spaApp()
lang22.setLocaleMessage({})
lang22.setFallMessage({})
lang22.fallParameter()
lang22.setLocale('en');
lang22.setFallback('en');


let iteration = 0;

var   translate =   function (key, options) {
    iteration += 1;
    const myIteration = iteration;
    if(myIteration  === iteration){
        return lang22.trans(key, options);
    }
};
Vue.prototype.$lang22 = Vue.lang22 =lang22
Vue.prototype.$transk = translate
Vue.config.silent = true


export default {

    beforeCreate: function beforeCreate() {
          // Vue.util.defineReactive(this, '_lang', lang);
          Vue.util.defineReactive(this, '$lang22', lang22)
          Vue.util.defineReactive(this, '$transk', translate);
      },

}
</script>

<style lang="css" scoped >

</style>
