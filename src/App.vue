<script>
import {getApi,showSuccess} from './util'
import config from './config'
import qcloud from 'wafer2-client-sdk'
export default {
  created () {

    
    
    // 调用API从本地缓存中获取数据113336888
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    console.log('666')
    console.log('app created and cache logs by setStorageSync')

    // const res = await getApi('/weapp/demo')
    // console.log(1233, res)
  }
}
</script>

<style>
/*.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}*/
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
