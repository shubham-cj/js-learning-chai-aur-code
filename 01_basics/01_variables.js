const accountId = 940346
let accountEmail = "shubham@gmail.com"
var accountPassword = "1234"
accountCity = "Satara"
console.log(typeof accountCity)     // string
let accountState

console.log(accountState) //Undefined

//accountId = 23445  //const cannot be changed

accountEmail  = "djshubham@gmail.com"
accountPassword = "4321"
accountCity = "Koregaon"

/*
    Prefer not to use "var"
    because of issues with block scope and functional scope
    Instead always prefer to use "let"
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
┌─────────┬───────────────────────┐
│ (index) │        Values         │
├─────────┼───────────────────────┤
│    0    │        940346         │
│    1    │ 'djshubham@gmail.com' │
│    2    │        '4321'         │
│    3    │      'Koregaon'       │
│    4    │       undefined       │
└─────────┴───────────────────────┘
*/