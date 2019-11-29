// add solution here
var music = [];
function theBeatlesPlay(array1,array2){
  for(l=0;l < array1.length; l++){
    music[l]= array1[l] + "plays" + array2[l];
    return music[l];
  }
}