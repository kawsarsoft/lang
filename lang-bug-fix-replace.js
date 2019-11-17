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
    this.thename = ''
    this.lists = []
    this.isFallParameter = false
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
  getMessage(){
    return this.messages
  }

  setLocaleMessage(data){
    return this.localeMessage = data
  }
  getLocaleMessage(){
    return this.localeMessage
  }

  setFallMessage(data){
    return this.fallbackMessage = data
  }
  getFallMessage(){
    return this.fallbackMessage
  }

  spaApp(){
      this.spa = true;
  }

  setLangLists(data=[]){
      this.lists = data
  }

  getLangLists()
  {
      return this.lists
  }

  fallParameter()
  {
      this.isFallParameter = true;
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
            this.outputs = this.output
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

              if (this.spa) {
                  if(this.getLocaleMessage()[`__p__${name}`] !== undefined){
                      // parameter
                      this.outputs = this.outputs.replace(`:${name}`,this.getLocaleMessage()[`__p__${name}`])
                  }  else {
                      if(this.isFallParameter && this.getFallMessage()[`__p__${name}`] !== undefined){
                        this.outputs = this.outputs.replace(`:${name}`,this.getFallMessage()[`__p__${name}`])
                    }else {
                        this.outputs = this.outputs.replace(`:${name}`,replaceValue[index])
                    }
                  }
              } else {
                  if(this.getMessage()[this.locale][`__p__${name}`] !== undefined){
                      this.outputs = this.outputs.replace(`:${name}`,this.getMessage()[this.locale][`__p__${name}`])
                  } else {
                       this.outputs = this.outputs.replace(`:${name}`,replaceValue[index])
                  }
              }
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
