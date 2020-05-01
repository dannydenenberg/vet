// Object of medicine name with its associated dosages for different animals (dogs, cats);
// Each will return an object like this:

// Output dose in milileters
function doseInML(weight, mgPerKg, mgPerML) {
  return (weight * mgPerKg) / parseFloat(mgPerML);
}

function completeDosageObject(
  weight,
  mgPerKgDOG,
  mgPerKgCAT,
  mgPerML,
  q,
  canGive,
  notes
) {
  let dogs = mgPerKgDOG.map((a) => doseInML(weight, a, mgPerML));
  let cats = mgPerKgCAT.map((a) => doseInML(weight, a, mgPerML));

  // if Mg/ml is negative, that means there isn't one, so return empty arrays
  if (mgPerML < 0) {
    dogs = [];
    cats = [];
  }

  return { weight, dogs, cats, canGive, q, notes };
}

// name: String (name of medication all LOWERCASE)
// dog: [1,2] (range of values in ml)
// cat: [1,2] (range of values in ml)
// canGive: ['IV', 'IM', 'PO']
// q: [3,5] (every 3 to 5 hours)

/**
Function params:

  weight,
  mgPerKgDOG,
  mgPerKgCAT,
  mgPerML,
  q,
  canGive

 */
const meds = {
  Buprenorphine: (weight) => {
    const mgPerKgDOG = [0.01, 0.02];
    const mgPerKgCAT = [0.01, 0.02];
    const mgPerML = 0.03;
    const q = [8, 12];
    const canGive = ["IV", "IM", "PO"];
    const notes = "";

    return completeDosageObject(
      weight,
      mgPerKgDOG,
      mgPerKgCAT,
      mgPerML,
      q,
      canGive,
      notes
    );
  },
  "Buprenorphine SR": (weight) => {
    const mgPerKgDOG = [0.03, 0.06];
    const mgPerKgCAT = [0.12];
    const mgPerML = 3;
    const q = [72];
    const canGive = ["SQ"];
    const notes = "";

    return completeDosageObject(
      weight,
      mgPerKgDOG,
      mgPerKgCAT,
      mgPerML,
      q,
      canGive,
      notes
    );
  },

  Hydromorphone: (weight) => {
    const mgPerKgDOG = [0.05, 0.1];
    const mgPerKgCAT = [0.05, 0.1];
    const mgPerML = 2;
    const q = [6, 8];
    const canGive = [];
    const notes = "";

    return completeDosageObject(
      weight,
      mgPerKgDOG,
      mgPerKgCAT,
      mgPerML,
      q,
      canGive,
      notes
    );
  },

  Morphine: (weight) => {
    const mgPerKgDOG = [0.1, 0.2];
    const mgPerKgCAT = [0.1, 0.2];
    const mgPerML = 50;
    const q = [4, 6];
    const canGive = [];
    const notes = "";

    return completeDosageObject(
      weight,
      mgPerKgDOG,
      mgPerKgCAT,
      mgPerML,
      q,
      canGive,
      notes
    );
  },

  Butorphanol: (weight) => {
    const mgPerKgDOG = [0.1, 1];
    const mgPerKgCAT = [0.1, 1];
    const mgPerML = 10;
    const q = [];
    const canGive = ["IV", "IM", "SQ"];
    const notes = "5mg Tabs";

    return completeDosageObject(
      weight,
      mgPerKgDOG,
      mgPerKgCAT,
      mgPerML,
      q,
      canGive,
      notes
    );
  },

  Codeine: (weight) => {
    const mgPerKgDOG = [0.5, 1];
    const mgPerKgCAT = [0.5, 1];
    const mgPerML = 200;
    const q = [8, 12];
    const canGive = [];
    const notes = "15/30/60 Tablets";

    return completeDosageObject(
      weight,
      mgPerKgDOG,
      mgPerKgCAT,
      mgPerML,
      q,
      canGive,
      notes
    );
  },
  Tramadol: (weight) => {
    const mgPerKgDOG = [4];
    const mgPerKgCAT = [4];
    const mgPerML = -1;
    const q = [12];
    const canGive = ["PO"];
    const notes = "50 Tablets";

    return completeDosageObject(
      weight,
      mgPerKgDOG,
      mgPerKgCAT,
      mgPerML,
      q,
      canGive,
      notes
    );
  },
};

export default meds;
