<template>
<section>
  <select v-model="model.type">
    <option value="must">AND</option>
    <option value="should">OR</option>
    <option value="must_not">NOT</option>
  </select>

  <span class="ptr" @click="addChildElem">
    <i class="fa fa-file-o" aria-hidden="true"></i>
  </span>
  <span class="ptr" @click="addChildFolder">
    <i class="fa fa-folder-open" aria-hidden="true"></i>
  </span>
  <span class="ptr" @click="$emit('remove')">
    <i class="fa fa-window-close" aria-hidden="true"></i>
  </span>
</section>
</template>

<script>

module.exports = {
  props: {
    model: Object,
    fields: Object,
    ops: Array,
  },
  methods: {
    addChildElem: function () {
      this.model.children.push({
        key: "text",
        op: "match",
        value: "",
      })
    },
    addChildFolder: function () {
      this.model.children.push({
        type: 'must',
        children: [],
      })
    }
  }
}
</script>

<style scoped>
.ptr {
  cursor: pointer;
}
</style>
