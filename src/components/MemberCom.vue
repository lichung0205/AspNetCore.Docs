<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">子說明</h6>
      <p class="card-text">
        說些甚麼好呢？
      </p>
      <a href="#" class="card-link">linkA</a>
      <a href="#" class="card-link">linkB</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '這是一個成員頁'
    }
  }
}
</script>
