function myfunc() {
  var name = document.getElementById('name').value
  var age = document.getElementById('age').value
  var weight = document.getElementById('weight').value
  check(name, age, weight);
  if(check(name,age,weight)){
     return logic(name, age, weight);
  }
  
}
function check(name, age, weight) {
  if (name == '') {
    alert('pls enter name!!')
    return false
  }
  if (!isNaN(name)) {
    alert('pls enter valid name !!')
    return false
  }
  if (age == '') {
    alert('pls enter age!!')
    return false
  }
  if (weight == '') {
    alert('pls enter weight!!')
    return false
  }

  if (isNaN(age)) {
    alert('please enter a valid age!!')
    return false
  }
  if (isNaN(weight)) {
    alert('please enter a valid weight!!')
    return false
  } else {
    return true
  }
}
function logic(name, age, weight) {
  if (age == 15 && weight < 30) {
    document.getElementById(
      'demo',
    ).innerHTML = `hello ${name} !! your weight is less than recommended value of 30kg at an age of 15`
  } else if (age == 15 && weight > 50) {
    document.getElementById(
      'demo',
    ).innerHTML = `hello ${name} !!your weight is greater than recommended value of 50kg at an age of 15`
  } else {
    document.getElementById(
      'demo'
    ).innerHTML = `hello ${name} your weight is perfect !!`
  }
}
