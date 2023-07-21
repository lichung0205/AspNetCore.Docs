<template>
  <div class="row">
    <div class="col-4">選單
      <div class="list-group">
        <router-link to="/member/a" class="list-group-item list-group-item-action " aria-current="true">
          元件A
        </router-link>
        <router-link to="/member/b" class="list-group-item list-group-item-action " aria-current="true">
          元件B
        </router-link>
        <router-link to="/member/namedView/c2d" class="list-group-item list-group-item-action " aria-current="true">
          元件C2D
        </router-link>
        <router-link to="/member/namedView/a2b" class="list-group-item list-group-item-action " aria-current="true">
          元件A2B
        </router-link>
        <router-link to="/member/dynamicRouter/97e4bf19a6e4a323" class="list-group-item list-group-item-action " aria-current="true">
          動態路由
        </router-link>
        <router-link to="/member/dynamicRouterByProps/97e4bf19a6e4a323" class="list-group-item list-group-item-action " aria-current="true">
          動態路由props
        </router-link>
        <router-link to="/member/routerNavigation" class="list-group-item list-group-item-action " aria-current="true">
          路由導覽
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
  <!-- <div class="member">
    <h1>This is an 成員頁面</h1>
  </div>
  <Mem-Com></Mem-Com> -->
</template>

<!-- <script>
import MemCom from '@/components/MemberCom.vue'

export default {
  components: {
    MemCom
  }
}
</script> -->
