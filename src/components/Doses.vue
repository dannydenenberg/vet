<template>
  <div>
    <h1>🦧 Tippi's Doses 🐄</h1>
    <p>
      Weight of Animal (kg):
      <!-- <input pattern="[0-9]*" type="number" v-model="weightInput" /> -->
      <b-form-input
        pattern="[0-9]*"
        type="number"
        v-model="weightInput"
        style="width:auto; display:inline"
      ></b-form-input>
      {{ " " }}
      <b-form-select
        value="Kilograms"
        style="width:auto"
        v-model="weightUnit"
        :options="weightUnitOptions"
      ></b-form-select>
    </p>
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
      :fields="tableFields"
      :items="medicationsObjectsArrayToOutputStringsForTable"
      :dark="true"
      :fixed="true"
      :headVariant="'dark'"
      :no-border-collapse="true"
    >
      <template v-slot:cell(med)="data">
        <!-- <a v-html="data.value" href="hey"></a> -->
        <span :id="`med-${data.value}`">{{data.value}}</span>
        <b-popover variant="info" :target="`med-${data.value}`" triggers="hover" placement="top">
          <template v-slot:title>{{data.value}}</template>
          I am popover
          <b>component</b> content!
        </b-popover>
      </template>
    </b-table>

    <div class="results">
      <ul>
        <li v-for="medication in arrayOfMedicationsProcess" :key="medication.name">
          <Medication v-bind:info="medication" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import meds from "./../meds";
export default {
  components: {},
  data() {
    return {
      tableFields: [
        { key: "med", label: "Med", sortable: true, "primary-key": "dodo" },
        // { key: "dosage", label: "Dosage (mg/kg)" },
        { key: "forDogs", label: "For Dogs (ml)" },
        { key: "forCats", label: "For Cats (ml)" },
        { key: "canGive", label: "Can Give" },
        { key: "q", label: "Q (hours)" },
        { key: "notes", label: "Notes" }
      ],
      weightInput: "89",
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ],
      weightUnit: null,
      weightUnitOptions: [
        // { value: null, text: "Please select an option" },
        { value: "lb", text: "Pounds" },
        { value: "kg", text: "Kilograms", selected: true }
      ]
    };
  },
  computed: {
    /**
     * Calculate weight in kg based on if the user entered the weight in pounds or kgs
     */
    weight() {
      if (this.weightUnit == "kg") {
        return this.weightInput;
      } else {
        return (this.weightInput * 0.4535924).toFixed(2);
      }
    },

    /**
     * Preprocessing for outputs.
     */
    medicationsObjectsArrayToOutputStringsForTable() {
      const sigFigs = 2;
      let medicationsObjectArray = this.arrayOfMedicationsProcess();

      /*** Edit sig figs in dosages ***/
      for (let i = 0; i < medicationsObjectArray.length; i++) {
        medicationsObjectArray[i].dogs = medicationsObjectArray[i].dogs.map(
          number => +number.toFixed(sigFigs)
        );
        medicationsObjectArray[i].cats = medicationsObjectArray[i].cats.map(
          number => +number.toFixed(sigFigs)
        );
      }

      let forTableArray = [];

      /***** Package in strings for output nicely. *****/
      medicationsObjectArray.forEach(o => {
        const med = o.name;
        const forDogs = o.dogs.join(" to ");
        const forCats = o.cats.join(" to ");
        const canGive = o.canGive.join(", ");
        const q = o.q.join("-");
        const notes = o.notes;
        // const dosage = o.dosage.join("-");

        forTableArray.push({ med, forDogs, forCats, canGive, q, notes });
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

    // In the future, use this to return only medicines associated with a given disease.
    filterMedications(medicationsList) {
      return medicationsList;
    }
  },
  created() {}
};
</script>

<style></style>
