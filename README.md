

* https://github.com/eli5-amsterdam/vue-lang-js


```js
import Lang2 from '~/helpers/common/lang'
import Vue from 'vue'
import axios from 'axios'

let lang22 = new Lang2()

let messages =  axios.get('http://127.0.0.1:8000/i18n')

lang22.setMessage({
    en: {
      'login.now': 'login'
    },
    bn: {
      'login.now': 'লগইন'
    }

})
lang22.setLocale('en');
lang22.setFallback('en');

var translate = function (key, options) {
    return lang22.trans(key, options);
    };
Vue.prototype.$lang22 = Vue.lang22 =lang22
Vue.prototype.$transk = translate


beforeCreate: function beforeCreate() {

// Vue.util.defineReactive(this, '_lang', lang);
Vue.util.defineReactive(this, '$lang22', lang22);
 },
```

# route

```php
Route::get('i18n/{param}', function($param){
     $path = resource_path('lang/'.$param);
     $file = File::get($path);
     $response = Response::make($file, 200);
      return $response;
})->where('param','.*');
```
