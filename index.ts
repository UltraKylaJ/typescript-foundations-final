// Lord, thank you for everything. Please help me to get this done and understand it. I am struggling with this course and don't know if I can do it...Please help me.

import { User } from "./user";

let users = []

let bob = new User("", "Bobby Blue", "", "");
users.push(bob);
let jon = new User("", "Jon Dumbo", "", "");
users.push(jon);
let betty = new User("", "Betty Brown", "", "");
users.push(betty);
let katie = new User("", "Katie Ray", "", "");
users.push(katie);

users.forEach(usr => {
    for (let usr = 0; usr < users.length; usr++) {
        User.prettyPrint();
    }
});


// In the index.ts file, import the class and generate four new users. 
//      You can give them any names.
// Add each of the users to an array when they are created.
// Print all the user information using the prettyPrint function by using the forEach loop on the array.
// Write tests to verify that the methods and classes within your program behave as expected.