// Change the values and operators below to test your algorithm meets all conditions
const x = 25;
const expression1 = (x <= 25); //true
const expression2 = (x >= 25); //true

// Write Your JavaScript Code Here
if (expression1 && expression2) {
    console.log ('True ✅ True ✅'); 
} else if (expression1 && !expression2) {
    console.log ('True ✅ False ❌');
} else if (!expression1 && expression2) 
    console.log ('False ❌ True ✅');
else {
    console.log ("False  False" );
}






/*
* It's done when the message "True ✅ True ✅" is logged when both `expression1` and `expression2` are true.

* It's done when the message "True ✅ False ❌" is logged when `expression1` is true.

* It's done when the message "False ❌ True ✅" is logged when `expression2` is true.

* It's done when the message "False ❌ False ❌" is logged when both `expression1` and `expression2` are false
*/