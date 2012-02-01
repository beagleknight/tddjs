myapp = {};

myapp.Hello = function() { };

myapp.Hello.prototype.greet = function(name) {
  return "Hello " + name + "!";
};
