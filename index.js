function wakeDog(dogName, dogBreed) {
  let string = `Wake ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

function leashDog(dogName, dogBreed) {
  let string = `Leash ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

function walkToPark(dogName, dogBreed) {
  let string = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

function throwFrisbee(dogName, dogBreed) {
  let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

function walkHome(dogName, dogBreed) {
  let string = `Walk home with ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

function unleashDog(dogName, dogBreed) {
  let string = `Unleash ${dogName} the ${dogBreed}`
  console.log(string)
  return string
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(name, breed){
  let array = []
  array.push(routine[0](name, breed))
  array.push(routine[1](name, breed))
  array.push(routine[2](name, breed))
  array.push(routine[3](name, breed))
  array.push(routine[4](name, breed))
  array.push(routine[5](name, breed))
  return array
}
