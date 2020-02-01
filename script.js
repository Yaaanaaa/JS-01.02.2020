//ask user age
let age = prompt('Your age');
//show age variable in console
console.log(age);
//check if user old enough to pass
if(typeof age !== 'string')//!== - Не дорівнює 
    { 
        if (age < 16) 
        {
        console.log('Rejected! You are young! Grow up!')
        } else{
    console.log('Welcome')

        }
}   else{
    console.log(`Wrong typ e of data. Entered age is ${typeof age}`);
}
