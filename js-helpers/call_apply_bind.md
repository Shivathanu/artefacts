These methods allow you to specify what the "this" keyword resolves to.

In all the three functions, the first argument is always the this value, or context that you want to give to the function.

Call
Of the three, call is the easiest. It’s the same as invoking a function while specifying its context. Here’s an example:
```
let user = {
  name: "Info World",
  greet: function() {
      console.log(this.name);
  }
}

user.greet();

let user1 = {
  name: "Hello"
};

user.greet.call(user1);
```

Apply
Note that apply is nearly the same as call. The only difference is that you pass arguments as an array and not separately. Arrays are easier to manipulate in JavaScript, opening a larger number of possibilities for working with functions. 
```
let user = {
  greet: "Hello!",
  greetUser: function(userName) {
      console.log(this.greet + " " + userName);
  }
}

let user1 = {
  greet: "Hola!"
};

user.greetUser.call(user1, "InfoWorld");
user.greetUser.apply(user1, ["InfoWorld"]);
```

Bind
The bind method allows you to pass arguments to a function without invoking it. A new function is returned with arguments bounded preceding any further arguments. Here’s an example:
```
let user = {
  greet: "Hello!",
  greetUser: function(userName) {
      console.log(this.greet + " " + userName);
  }
}

let user1 = {
  greet: "Hola!"
};

var greetHola = user.greetUser.bind({ greet: "Hola" });
var greetBonjour = user.greetUser.bind({ greet: "Bonjour" });

greetHola("InfoWorld");
greetBonjour("InfoWorld");
```