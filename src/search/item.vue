<template>
<li>
  <div v-if="isFolder">
    <search-folder :model="model" :fields="fields" :ops="ops" @remove="$emit('remove', model)" />

    <ul>
      <search-item v-for="x in model.children" :model="x" :key="x.type" :fields="fields" :ops="ops" @remove="remove" />
    </ul>
  </div>
  <div v-else>
    <search-elem :model="model" :fields="fields" :ops="ops" @remove="$emit('remove', model)" />
  </div>
</li>
</template>

<script>

module.exports = {
  props: {
    model: Object,
    fields: Object,
    ops: Array,
  },
  computed: {
    isFolder: function () {
      return this.model.children instanceof Array;
    }
  },
  methods: {
    remove: function(model) {
      this.model.children.splice(this.model.children.indexOf(model), 1)
    },
  }
}
</script>

<style scoped>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
