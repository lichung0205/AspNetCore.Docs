<template>
    <h2>路由導覽</h2>
    <div>
      <button type="button" @click="getRoute">getRoute</button>

      <button type="button" @click="pushRoute">push</button>
      <button type="button" @click="replaceRoute">replace</button>
      <button type="button" @click="gotoRoute">go</button>
      <hr>

      <button type="button" @click="addRoute">addRoute</button>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    getRoute () {
      // console.log('路由屬性route:', this.$route)

      // console.log('路由方法router:', this.$router)
    },
    // 會加入至歷史紀錄
    pushRoute () {
      // 依連結加入
      // this.$router.push('/member/b')
      // 依名稱加入
      this.$router.push({ name: 'about' })
    },
    // 不會加入至歷史紀錄
    replaceRoute () {
      this.$router.replace({ name: 'about' })
    },
    // 操作歷史紀錄
    gotoRoute () {
      this.$router.go(-1)
    },
    addRoute () {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('../views/AboutView.vue')
      })
    }
  },
  created () {
    // console.log(this.$route.params.id)
    // const seed = this.$route.params.id
    // axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
    //   console.log(res)
    // })
  }
}
</script>
