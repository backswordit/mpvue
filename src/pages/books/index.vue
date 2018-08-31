<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <h2 @click="bindViewTap">vue1</h2>
    <div class="list" v-for="(item,idx) in list" :key="idx">
      {{item.name}}
    </div>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      list: [{
        id: 1,
        name: 'css'
      }, {
        id: 2,
        name: 'html'
      }, {
        id: 3,
        name: 'js'
      }]
    }
  },

  components: {
    card
  },
  methods: {
    bindViewTap () {
      const url = '../me/main'
      // wx.navigateTo({ url })
      wx.switchTab({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style scoped>
.list{
  margin-left: 50px;
}
</style>
