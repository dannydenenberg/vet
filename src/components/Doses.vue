<template>
  <div>
    <h1>🦧 Tippi's Doses 🐄</h1>Weight of Animal (kg):
    <input
      pattern="[0-9]*"
      type="number"
      v-model="weight"
      placeholder="89"
      value="89"
    />

    <p>
      Weight of Animal 🦥:
      <strong>
        {{ weight }}
        <span v-if="weight.length>0">kg</span>
      </strong>
    </p>
    <div class="results">
      <ul>
        <li v-for="medication in arrayOfMedications" :key="medication.name">
          <Medication v-bind:info="medication" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Medication from "./Medication";
import meds from "./../meds";
export default {
  components: {
    Medication
  },
  data() {
    return {
      weight: "",
      test: { name: "heyoooo!" }
    };
  },
  computed: {
    // Filters the meds in to { name: 'alsdfj', .... } for the Medication to consume
    arrayOfMedications() {
      // console.log(meds);
      let medicationsList = [];
      const weight = parseInt(this.weight); // get the actual weight in a number

      for (let name in meds) {
        const medInformation = meds[name](weight); // run the function to gather the dosages results

        // add the information into the list of medications as an all-self-contained object
        medicationsList.push({
          name,
          ...medInformation
        });
      }
      return medicationsList;
    }
  },
  created() {}
};
</script>

<style>
</style>