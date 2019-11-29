// add solution here
function theBeatlesPlay(array1,array2){
  var music = [];
  for(i=0;i < array1.length; i++){
    music.push(array1[i] + "plays" + array2[i]);
  }
  return music
}