<template>
	<div @click="aa">
        <div>
            <input v-model.trim="aaa" class="a" :class="aaa ? 'rr': ''" @click.stop="bb" placeholder="edit me">
            <p class="b">{{aaa}}</p>
            <textarea v-model="message" placeholder="add multiple lines"></textarea>
            <p style="white-space: pre">{{ message }}</p>

            <input v-model.number= "age" placeholder="请输入数字"><br/>
            <div v-if='Math.radom > 0.5'>v-if条件判断true</div>
            <div v-else :src="imgsrc" :style="{fontSize:12 + 'px'}">v-else条件判断</div>
            <div v-show='ok'>v-show显示隐藏</div>

            <div>
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">{{ checked }}</label>
            </div>

            <div>
                <input type="checkbox" id="jion" value="jion" v-model="checkedNames">
                <label for="jion">jion</label>
                <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
                <label for="jack">jack</label><br/>
                <p>{{ checkedNames }}</p>
            </div>

            <span v-text="msg">{{msg}}</span>
            <div v-html="html"></div>

            <div v-for="(i,n) in tt">v-for {{n}}:{{i}}</div>
        </div>
        <Demo/>
    </div> 
</template>
<script>
	import Vue from 'vue';
	export default {
        data () {
            return {
                aaa : '',
                message : '',
                checked : 'ture',
                tt : ['one','two','three'],
                checkedNames : [],
                msg : 'v-text更新textcontent',
                imgsrc: 'http://baidu.com'
            }
        },
        methods:{
            aa () {
                //console.log(1)
            },
            bb () {
                this.$http.post('/',{}).then(function (res) {
                    console.log(this.tt);
                }).catch(function (res) {
                    console.log(this.tt,res);
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