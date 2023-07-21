<template>
    <h2>動態路由Props</h2>
    <div></div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  created () {
    const seed = this.id
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
      console.log(res)
    })
  }
}
</script>
