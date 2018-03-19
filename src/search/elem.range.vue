<template>
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

  <span class="ptr" @click="$emit('remove')">
    <i class="fa fa-window-close-o" aria-hidden="true"></i>
  </span>

  <ul>
    <li>
      <select v-model="gt_key">
        <option value=""></option>
        <option value="gt">&gt;</option>
        <option value="gte">&ge;</option>
      </select>
      <input type="text" v-model="gt_val">
    </li>
    <li>
      <select v-model="lt_key">
        <option value=""></option>
        <option value="lt">&lt;</option>
        <option value="lte">&le;</option>
      </select>
      <input type="text" v-model="lt_val">
    </li>
  </ul>
</section>
</template>

<script>

module.exports = {
  props: {
    model: Object,
    fields: Object,
    ops: Array,
  },
  data: function () {
    return {
      gt_key: "",
      gt_val: "",
      lt_key: "",
      lt_val: "",
    }
  },
  methods: {
    rebuild: function() {
      this.model.value = {}
      if(this.gt_key.length > 0 && this.gt_val.length > 0) {
        this.model.value[this.gt_key] = this.gt_val;
      }
      if(this.lt_key.length > 0 && this.lt_val.length > 0) {
        this.model.value[this.lt_key] = this.lt_val;
      }
    }
  },
  watch: {
    gt_key: function (val) {
      this.rebuild();
    },
    gt_val: function (val) {
      this.rebuild();
    },
    lt_key: function (val) {
      this.rebuild();
    },
    lt_val: function (val) {
      this.rebuild();
    },
  },
  mounted: function() {
    console.log(this.model)
    this.rebuild();
  }
}
</script>

<style scoped>
.ptr {
  cursor: pointer;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>
