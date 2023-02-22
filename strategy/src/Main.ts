import { Authenticate } from "./Authenticate";
import { LoginStrategy } from "./LoginStrategy";
import { TwitterLoginStrategy } from "./TwitterLoginStrategy";

console.log("-When system needs to dynamically use a specific algorithm among multiple algos, strategy design pattern is useful there as each algo can be encapsulated in a separate class.--");
const twitterLoginStrategy = new TwitterLoginStrategy();
const loginStrategy = new LoginStrategy();
let authenticate = new Authenticate("abc", "xyz");
authenticate.authenticateUser(twitterLoginStrategy);

authenticate = new Authenticate("test123", "abc");
authenticate.authenticateUser(loginStrategy);