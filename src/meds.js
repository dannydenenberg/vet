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
// q: 72 (every 72 hours)
const meds = {
  buprenorphine: weight => {
    const q = weight + 72;
    const canGive = ["IV", "IM", "PO"];
    const dogs = [1.2, 4];
    const cats = [1.2, 4];
    return { dogs, cats, canGive, q };
  },
  tramadol: weight => {
    const q = weight * 72;
    const canGive = ["PO"];
    const dogs = [12323, 4];
    const cats = [13444, 2];
    return { dogs, cats, canGive, q };
  }
};

export default meds;
