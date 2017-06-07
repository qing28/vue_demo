<template>
    <div @click="aa">
        <div>
            <input v-model="aaa" class="a" :class="aaa ? 'rr': ''" @click.stop="bb">
            <p class="b">{{aaa}}</p>
            <div v-for="(i,n) in tt">asdfasdfa {{n}}</div>
        </div>
        <Demo/>
    </div>
</template>
<script>
    import Demo from './demo.vue';
    export default {
        data () {
            return {
                aaa : '',
                tt : ['','','','','','','']
            }
        },
        methods:{
            aa () {
                //alert(1)
            },
            bb () {
                this.$http.post('/',{}).then(function (res) {
                    console.log(this.tt);
                }).catch(function () {
                    console.log(this.tt,1);
                })
            }
        },
        components:{
            Demo
        }
    }
</script> 
<style type="text/css">
    @import './index.css';
    html{
        height:100%;
    }
    .a{
        height:50px;
    }
    .b{
        height: 50px;
    }
    body{
        height:100%;
        margin:0;
        padding:0;
        text-align: center;
        background:url(./images/time.jpg) no-repeat center center;
        color:#000;
        font-size:25px;
        justify-content:center;
        align-items:center;
        display:-webkit-flex;
    }
</style>