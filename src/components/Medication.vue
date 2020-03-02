<template>
  <span>
    <strong>{{info.name[0].toUpperCase() + info.name.substr(1)}}</strong>
    , For Dogs:
    <strong>{{ info.dogs[0] }}</strong>ml to
    <strong>{{ info.dogs[1] }}</strong>ml, For Cats:
    <strong>{{ info.cats[0] }}</strong>ml to
    <strong>{{ info.cats[1] }}</strong>ml,
    <strong>Can give this dose {{info.canGive.join(', ')}} q {{info.q}}</strong>
  </span>
</template>

<script>
// Represents a single medication
export default {
  props: {
    // name: String (name of medication all LOWERCASE)
    // dog: [1,2] (range of values in ml)
    // cat: [1,2] (range of values in ml)
    // canGive: ['IV', 'IM', 'PO']
    // q: 72 (every 72 hours)
    info: Object
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style>
</style>