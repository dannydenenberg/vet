// Object of medicine name with its associated dosages for different animals (dogs, cats);
// Each will return an object like this:
/**

{
  "Name of Medicine": (weight) => {
    return new Med;
  }
}

 */

// name: String (name of medication all LOWERCASE)
// dog: [1,2] (range of values in ml)
// cat: [1,2] (range of values in ml)
// canGive: ['IV', 'IM', 'PO']
// q: [3,5] (every 3 to 5 hours)
const meds = {
  Buprenorphine: weight => {
    const q = [8, 12];
    const canGive = ["IV", "IM", "PO"];
    const dogs = [(weight * 0.01) / 0.3, (weight * 0.02) / 0.3];
    const cats = [(weight * 0.01) / 0.3, (weight * 0.02) / 0.3];
    const dosage = [0.01, 0.02];
    return { dosage, dogs, cats, canGive, q };
  },
  Tramadol: weight => {
    const q = [6 + weight]; // every six hours
    const canGive = ["PO"];
    const dogs = [12323, 4];
    const cats = [13444, 2];
    const dosage = [0.01, 0.02];
    return { dosage, dogs, cats, canGive, q };
  }
};

// class Medicine {
//   constructor() {

//   }
// }

export default meds;
