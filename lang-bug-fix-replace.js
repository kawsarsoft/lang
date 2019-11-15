export default class Lang {
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
    this.output = ''
    this.outputs = ''
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
          this.output = this.getLocaleMessage()[data]
      } else {
          this.output = this.getMessage()[this.locale][data]
      }
      if(this.spa){
          if (this.output === undefined) {
            this.outputs = this.fallbackMessage[data]
          }  else {
            this.outputs = output
          }
      }else{
          if (this.output === undefined && this.fallbackMessage === undefined) {
            this.outputs = this.getMessage()[this.fallback][data]
        } else if (this.output === undefined && this.fallbackMessage !== undefined) {
             this.outputs = this.fallbackMessage[data]
          }  else {
            this.outputs = this.output
          }
      }
      if(this.outputs !== undefined) {
          let replaceKey = Object.keys(replacement)
          let replaceValue = Object.values(replacement)
          replaceKey.forEach ((name,index) => {
                  this.outputs = this.outputs.replace(`:${name}`,replaceValue[index])
          })
      }

    return  this.outputs
  }
}

// let lang = new User()
//
// lang.setMessage({
//     en: {
//       'login': 'login now :name :age'
//     },
//     bn: {
//       'login.now': 'লগইন'
//     }
//
// })
// lang.setLocale('en');
// lang.setFallback('bn');
// console.log(lang.trans('login',{'name':'kamal','age':21,'price': 321}))
