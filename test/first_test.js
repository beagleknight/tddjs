HelloTest = TestCase("HelloTest");

HelloTest.prototype.testHello = function() {
  var hello = new myapp.Hello();
  assertEquals(hello.greet("David"), "Hello David!");
};
