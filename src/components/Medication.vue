<template>
  <span>
    <strong>{{info.name}}</strong>
    ,
    <span v-if="info.dogs[0] != info.cats[0]">
      For Dogs:
      <strong>{{ info.dogs[0] }}</strong>ml to
      <strong>{{ info.dogs[1] }}</strong>ml, For Cats:
      <strong>{{ info.cats[0] }}</strong>ml to
      <strong>{{ info.cats[1] }}</strong>ml
    </span>
    <span v-if="info.dogs[0] == info.cats[0]">
      <strong>{{ info.dogs[0] }}</strong>ml to
      <strong>{{ info.dogs[1] }}</strong>ml
    </span>,
    <strong>Can give this dose {{info.canGive.join(', ')}} q {{info.q.length === 1 ? info.q[0] : info.q.join('-')}}</strong>
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
  // every time props changes, reload the significant figures number formatting
  watch: {
    info() {
      const sigFigs = 2;
      for (let i = 0; i < this.info.dogs.length; i++) {
        this.info.dogs[i] = +this.info.dogs[i].toFixed(sigFigs);
        this.info.cats[i] = +this.info.cats[i].toFixed(sigFigs);
      }
    }
  }
};
</script>

<style>
</style>