TestCase("ObjectPropertyTest", {
  "test setting property shadows property on prototype": function() {
    var object1 = {};
    var object2 = {};

    // Both objects inherit Object.prototype.toString
    assertEquals(object1.toString, object2.toString);

    var chris = {
      name: "Chris",

      toString: function() {
        return this.name;
      }
    };

    assertFalse(object1.toString === chris.toString);

    delete chris.toString;
    assertEquals(object1.toString, chris.toString);
  }
});
