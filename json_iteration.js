let json = {
"Name" : "Undertaker",
"Age" : 56,
"Move" : "Chokeslam"
};

// for loop

console.log("Using for loop :");
let keys = Object.keys(json);
for(let i = 0; i < keys.length; i++)
		{
    		let key = keys[i];
        let value = json[key];
        console.log(key +":"+value);
    }
    
    
// for...in loop

console.log("Using for...in loop :");
for(let key in json)
		{
				let value = json[key];
        console.log(key +":"+value);
		}


// for...of loop

console.log("Using for...of loop");
let jsonArray = Object.entries(json);
for(let [key,value] of jsonArray)
		{
    		console.log(key +":"+value);	
    }
    
    
// forEach loop

console.log("Using forEach loop");
jsonArray.forEach(([key,value]) =>
		{
				console.log(key +":"+value);
		});


// Output Link: https://jsfiddle.net/q7w3yhj1/13/
