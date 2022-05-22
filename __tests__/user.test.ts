import { User } from "../user";

it ('tests prettyPrint()', () => {
    let testUsr = new User("", "fake name", "", "");
    testUsr.prettyPrint();
});