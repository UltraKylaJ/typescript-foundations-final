// Lord, thank you for everything. Please help me to get this done and understand it. I am struggling with this course and don't know if I can do it...Please help me.

import { User } from "./user";

let users = [];

let bob = new User("", "Bobby Blue", "", "");
users.push(bob);
let jon = new User("", "Jon Dumbo", "", "");
users.push(jon);
let betty = new User("", "Betty Brown", "", "");
users.push(betty);
let katie = new User("", "Katie Ray", "", "");
users.push(katie);

users.forEach((usr) => {
    usr.prettyPrint();
});



// Write tests to verify that the methods and classes within your program behave as expected.