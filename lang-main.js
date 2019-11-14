export default class User {
  constructor(options){
    if (options) {
      this.options = options || {};
      this.locale = options.locale
      this.fallback = options.fallback
      this.messages = options.messages
      this.localeMessage = options.localeMessage
      this.fallbackMessage = options.fallbackMessage
    }
    this.spa = false
  }
  setLocale(data){
    return this.locale = data
  }
  getLocale(){
    return this.locale
  }

  setFallback(data){
    return this.fallback = data
  }
  getFallback(){
    return this.fallback
  }

  setMessage(data){
    return this.messages = data
  }
  getMessage(data){
    return this.messages
  }

  setLocaleMessage(data){
    return this.fallbackMessage = data
  }
  getLocaleMessage(data){
    return this.fallbackMessage
  }

  setFallMessage(data){
    return this.fallbackMessage = data
  }
  getFallMessage(data){
    return this.fallbackMessage
  }

  spaApp(){
      this.spa = true;
  }
  trans(data,replacement={}) {
      if (this.spa) {
          output = this.getLocaleMessage()[data]
      } else {
          output = this.getMessage()[this.locale][data]
      }
      if(this.spa){
          if (output === undefined) {
            outputs = this.fallbackMessage[data]
          }  else {
            outputs = output
          }
      }else{
          if (output === undefined && this.fallbackMessage === undefined) {
            outputs = this.getMessage()[this.fallback][data]
          } else if (output === undefined && this.fallbackMessage !== undefined) {
             outputs = this.fallbackMessage[data]
          }  else {
            outputs = output
          }
      }
    replaceKey = Object.keys(replacement)
    replaceValue = Object.values(replacement)
    replaceKey.forEach ((name,index) => {
        outputs = outputs.replace(`:${name}`,replaceValue[index])
    })
    return outputs
  }
}

let lang = new User()

lang.setMessage({
    en: {
      'login': 'login now :name :age'
    },
    bn: {
      'login.now': 'লগইন'
    }

})
lang.setLocale('en');
lang.setFallback('bn');
console.log(lang.trans('login',{'name':'kamal','age':21,'price': 321}))
