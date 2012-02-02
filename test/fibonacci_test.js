TestCase("FibonacciTest", {
  "test calculate high fib value with memoization": function () {
    var fibonacciPast = fibonacci.memoize();
    
    assertEquals(1346269, fibonacciPast(30));
  }
});
