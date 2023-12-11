/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}

>> this is basic syntax of switch.
*/

const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("Default Matched");
        break;
}
// Mar

/*
If you do not break the case, then it will exuculate all the cases from the case which is matched EXCEPT DEFAULT CASE.
*/


