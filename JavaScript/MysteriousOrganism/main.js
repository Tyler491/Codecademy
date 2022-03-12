// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/*
Name: idInvalidCardCompanies
Parameter: id number for object, a array of DNA bases
Return: An pAequor object 
Description: A factory for creating pAequor objects.
*/
function pAequorFactory(id, dnaArry){
  return {
    specimenNum:id,
    dna:dnaArry,

    //Randomly change one DNA base
    mutate(){
      let index = Math.floor(Math.random() * (this.dna.length - 1));
      let newBase = returnRandBase();
      while (newBase === this.dna[index]){
        newBase = returnRandBase();
      }
      this.dna[index] = newBase;
    },

    //Compares DNA with another pAequor object
    compareDNA(pAequor){
      
      let sum = pAequor.dna.map((item, pos) => this.dna[pos] === item ? 1 : 0).reduce((a,b) => a+b);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${sum/this.dna.length*100}% DNA in common`);
    },

    //Compute the chance of survival
    willLikelySurvive(){
      let sum = this.dna.map(item => item === 'C' || item === 'G' ? 1 : 0).reduce((a,b) => a+b);
      return sum / this.dna.length >= 0.6 ? true : false;
    }
  }
}


//Create an array of 30 pAequor objects
let critterArry = [];
for (var i = 0; i <= 30; i++){
  let dna = [];
  for (var j = 0; j < 16; j++){
    dna.push(returnRandBase())
  }
  critterArry.push(pAequorFactory(i, dna));
}






