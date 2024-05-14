//immediately invoked function expressions 

// ()()
// pehle curly brackets mei function aur dusre mei uska call 

//jo function immediately execute ho jaaye to reduce / minimise the pollution from the global variables

(function hello()
{
    console.log('hi');
})();
(function hello()
{
    console.log('hi');
})()


// named iife ==>>agar aapke function ka naam hai 
//unnamed iife ==>> like the arrow functions 

