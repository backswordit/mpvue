<template>
  <div class="container" >
  	<div class="userinfo" v-if="userinfo.avatarUrl">
  		<img :src="userinfo.avatarUrl" />
  		<p>{{userinfo.nickName}}</p>
  	</div>
    <button class="btn" @click="scanBook">添加图书</button>
    <button v-if="!userinfo.avatarUrl" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">获取用户信息</button>
   <!--  <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>
    <button open-type="openSetting">打开授权设置页</button> -->
  </div>
</template>

<script>
import {getApi,showSuccess} from '@/util'
import config from '@/config'
import qcloud from 'wafer2-client-sdk'
export default {
  data () {
  	return {
  		userinfo: {
  			avatarUrl:'../../../static/img/unlogin.png',
  			nickName:'点击登录'
  		}
  	}
  },
  created () {
  	// this.userinfo = wx.getStorageSync('userinfo')
  	console.log(this.userinfo)
  },
  methods: {
  	doLogin (e) {
  		let user = wx.getStorageSync('userinfo')
	    if(!user){
	      qcloud.setLoginUrl(config.loginUrl)
	      qcloud.login({
	        success (userinfo) {
	          console.log("登录成功",userinfo)
	          showSuccess('登录成功')
	          wx.setStorageSync('userinfo',userinfo)
	          this.userinfo = userinfo
	        },
	        fail (err) {
	          console.log("登录失败",err)
	        }
	      })
	    }
  	},
  	scanBook () {
  		console.log('scanBook')
  		wx.scanCode({
  			success: (res) => {
  				console.log(res)
  			}
  		})
  	}
  }
}
</script>

<style scoped>
.container{
	padding: 0 30px;
}
.userinfo{
	margin-top: 100rpx;
	margin-bottom: 20rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
}
img{
	width: 128rpx;
	height: 128rpx;
	margin-top: 20rpx;
	border-radius: 50%;
}
.btn{
	color:white;
	background: #ea5a49;
	margin-bottom: 10px;
	padding-left: 15px;
	padding-right: 15px;
	border-radius: 2px;
	font-size: 16px;
	line-height: 40px;
	height: 40px;
	width: 100%;
}
.btn:active{
	background: #fa5a49;
}
</style>
