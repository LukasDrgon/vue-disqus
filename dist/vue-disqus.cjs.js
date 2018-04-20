'use strict';var VueDisqus={name:'vue-disqus',template:'<div id="disqus_thread"></div>',props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},mounted:function a(){if(window.DISQUS){this.reset(window.DISQUS);return}this.init()},methods:{reset:function b(a){var c=this;a.reset({reload:!0,config:function a(){c.setBaseConfig(this)}})},init:function a(){var b=this,c=this;window.disqus_config=function(){c.setBaseConfig(this)};setTimeout(function(){var a=document,c=a.createElement('script');c.setAttribute('id','embed-disqus');c.setAttribute('data-timestamp',+new Date());c.type='text/javascript';c.async=!0;c.src='//'+b.shortname+'.disqus.com/embed.js';(a.head||a.body).appendChild(c)},0)},setBaseConfig:function b(a){var c=this;a.page.identifier=this.identifier||this.$route.path||window.location.pathname;a.page.url=this.url||this.$el.baseURI;this.title&&(a.page.title=this.title);this.remote_auth_s3&&(a.page.remote_auth_s3=this.remote_auth_s3);this.api_key&&(a.page.api_key=this.api_key);this.sso_config&&(a.sso=this.sso_config);this.language&&(a.language=this.language);a.callbacks.onReady=[function(){c.$emit('ready')}]}}};function install(a){a.component('VueDisqus',VueDisqus)}module.exports=install
