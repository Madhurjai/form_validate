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


function logic(name,age,weight){
    if(5 <= age <= 7){
        if(weight <= 15){
            document.getElementById(
                            'demo',
                          ).innerHTML = `hello ${name} !!your weight is smaller than recommended value of ${weight}kg at an age of ${age}`
        }
        else if(weight >= 20){
            document.getElementById(
                            'demo',
                          ).innerHTML = `hello ${name} !!your weight is greater than recommended value of ${weight}kg at an age of ${age}`
        }
        else{
            document.getElementById(
                            'demo'
                          ).innerHTML = `hello ${name} your weight is perfect !!`
        }
    }
    if(8<= age <= 10){
        if(weight <= 21){
            document.getElementById(
                            'demo',
                          ).innerHTML = `hello ${name} !!your weight is smaller than recommended value of ${weight}kg at an age of ${age}`
        }
        else if (weight >= 25){
            document.getElementById(
                            'demo',
                          ).innerHTML = `hello ${name} !!your weight is greater than recommended value of ${weight}kg at an age of ${age}`

        }
        else{
            document.getElementById(
                            'demo'
                          ).innerHTML = `hello ${name} your weight is perfect !!`
        }}
        
        if(16 <= age <= 20){
            if(weight <= 31){
                document.getElementById(
                                'demo',
                              ).innerHTML = `hello ${name} !!your weight is smaller than recommended value of ${weight}kg at an age of ${age}`
            }
            else if(weight >= 40){
                document.getElementById(
                                'demo',
                              ).innerHTML = `hello ${name} !!your weight is greater than recommended value of ${weight}kg at an age of ${age}`
            }
            else{
                document.getElementById(
                                'demo'
                              ).innerHTML = `hello ${name} your weight is perfect !!`
            }
        }
    }
