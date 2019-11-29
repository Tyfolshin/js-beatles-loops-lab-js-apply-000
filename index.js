// add solution here
var music = [];
function theBeatlesPlay(array1,array2){
  for(i=0;i < array1.length; i++){
    music[i]= array1[i] + "plays" + array2[i];
    return music[i];
  }
}