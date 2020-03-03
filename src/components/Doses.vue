<template>
  <div>
    <h1>🦧 Tippi's Doses 🐄</h1>
    Weight of Animal (kg):
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
        <span v-if="weight.length > 0">kg</span>
      </strong>
    </p>
    <b-table
      striped
      hover
      :items="medicationsObjectsArrayToOutputStringsForTable"
      :dark="true"
      :fixed="true"
      :headVariant="'light'"
      :no-border-collapse="true"
    ></b-table>

    <div class="results">
      <ul>
        <li
          v-for="medication in arrayOfMedicationsProcess"
          :key="medication.name"
        >
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
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  },
  computed: {
    /**
     * Preprocessing for outputs.
     */
    medicationsObjectsArrayToOutputStringsForTable() {
      const sigFigs = 2;
      let medicationsObjectArray = this.arrayOfMedicationsProcess();

      /*** Edit sig figs ***/
      for (let i = 0; i < medicationsObjectArray.length; i++) {
        medicationsObjectArray[i].dogs[0] = +medicationsObjectArray[
          i
        ].dogs[0].toFixed(sigFigs);
        medicationsObjectArray[i].dogs[1] = +medicationsObjectArray[
          i
        ].dogs[1].toFixed(sigFigs);

        medicationsObjectArray[i].cats[0] = +medicationsObjectArray[
          i
        ].cats[0].toFixed(sigFigs);
        medicationsObjectArray[i].cats[1] = +medicationsObjectArray[
          i
        ].cats[1].toFixed(sigFigs);
      }

      let forTableArray = [];

      /***** Package in strings for output nicely. *****/
      medicationsObjectArray.forEach(o => {
        const med = o.name;
        const forDogs = o.dogs.join(" to ");
        const forCats = o.cats.join(" to ");
        const canGive = o.canGive.join(", ");
        const q = o.q.join("-");

        forTableArray.push({ med, forDogs, forCats, canGive, q });
      });
      return forTableArray;
    }
  },
  methods: {
    // Filters the meds in to { name: 'alsdfj', .... } for the Medication to consume
    arrayOfMedicationsProcess() {
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

      /**
       * To filter out for different user reasons
       */
      medicationsList = this.filterMedications(medicationsList);

      return medicationsList;
    },

    filterMedications(medicationsList) {
      return medicationsList;
    }
  },
  created() {}
};
</script>

<style></style>
