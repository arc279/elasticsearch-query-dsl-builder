<template>
<span v-if="isRange">
  <search-elem-range :model="model" :fields="fields" :ops="ops" @remove="$emit('remove')" />
</span>
<span v-else>
  <section>
    <select v-model="model.key">
      <option v-for="(label, field) of fields" :value="field" v-bind:key="field">
        {{label}}({{field}})
      </option>
    </select>

    <select v-model="model.op">
      <option v-for="key of ops" :value="key" v-bind:key="key">
        {{key}}
      </option>
    </select>

    <input type="text" v-model="model.value">

    <span class="ptr" @click="$emit('remove')">
      <i class="fa fa-window-close-o" aria-hidden="true"></i>
    </span>
  </section>
</span>
</template>

<script>

module.exports = {
  props: {
    model: Object,
    fields: Object,
    ops: Array,
  },
  computed: {
    isRange: function () {
      return this.model.op == "range";
    }
  }
}
</script>

<style scoped>
.ptr {
  cursor: pointer;
}
</style>
