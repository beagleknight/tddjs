TestCase("FunctionInheritTest", {
  "test should link prototypes": function() {
    var SubFn = function() {};
    var SuperFn = function() {};
    SubFn.inherit(SuperFn);

    assertTrue(new SubFn() instanceof SuperFn);
  },

  "test should set up link to super": function() {
    var SubFn = function() {};
    var SuperFn = function() {};
    SubFn.inherit(SuperFn);

    assertEquals(SuperFn.prototype, SubFn.prototype._super);
  }
});
