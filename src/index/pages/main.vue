<template>
    <div class="box">
        <div class="container">
            <div class="loginWrap tc">
                <a href="javascript:;" class="fl">Login</a>
                <a href="javascript:;" class="fr">SignUp</a>
            </div>
            <div class="indexPage pl15 pr15 tc">
                The materials have been gathered bit by bit
            </div>
            <div class="water">
                <div class="bigWater mt20"></div>
                <div class="bitWater mt10"></div>
            </div>
            <div class="tc mt20">
                <a class="btn learMore" @click="more">Learn More...</a>
                <!-- <router-link :to="'/more'" class="btn learMore" @click="more">Learn More...</router-link> -->
            </div>
        </div>
         
    </div>
</template>
<my-component class="pegeBg"></my-component>
<script>
    // import Demo from './demo.vue';
    export default {
        data () {
            return {
               
            }
        },
        methods:{
            aa () {
                console.log(1)
            },
            bb () {
                // this.$http.post('/',{}).then(function (res) {
                //     console.log(this.tt);
                // }).catch(function (res) {
                //     console.log(this.tt,res);
                // })
            },
            more () {
                this.$http.get('http://127.0.0.1:9999',{name:123}).then(res=>{
                    console.log(res);
                })
            }
        },
        watch: {
            a: function (val, oldVal) {
              console.log('new: %s, old: %s', val, oldVal)
            },
            // 方法名
            b: 'someMethod',
            // 深度 watcher
            c: {
              handler: function (val, oldVal) { /* ... */ },
              deep: true
            }
        },
        components:{
            // Demo
        }
    }
</script> 
<style type="text/css">
    @import './../common.css';
    .box{
        height: 100%;
        background:url(./../images/bg.jpg) no-repeat;
        background-size: cover;
        justify-content:center;
        align-items:center;
        display:-webkit-flex;
    }
    .loginWrap{
        width: 180px;
        height: 36px;
        line-height: 36px;
        position: absolute;
        right: 15px;
        top: 30px;
    }
    .loginWrap a{
        display: block;
        width: 80px;
        height: 100%;
        border: 1px solid #a4e2f6;
        border-radius: 5px;
        color: #fff;
    }
    .indexPage{
        color: #fff;
        font-size: 38px;
    }
    a.learMore{
        width: 120px;
        height: 48px;
        margin: 0 auto;
        background: #3eb76b;
        transition: all .5s;
    }
    a.learMore:hover{
        border-radius: 0; 
        text-shadow: #000 1px 1px 1px; 
    }
    .water div{
        background: rgba(255,255,255,.4);
        border-radius: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .water div.bigWater{
        width: 15px;
        height: 15px;
    }
    .water div.bitWater{
        width: 12px;
        height: 12px;
    }
</style>