let pronoun = ["the", "our"];

let adj = ["great", "big"];

let noun = ["jogger", "racoon"];
let red = [".com", ".net", ".com.ve"];
for (let pro of pronoun) {
  for (let adjetivo of adj){ 
    for (let sust of noun) {
      for (let dns of red ) {

        console.log(pro+adjetivo+sust+dns);
      }
    }
   
  }
}
