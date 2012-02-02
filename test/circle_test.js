TestCase("CircleTest", {
  "test inspect objects": function() {
    var circ = new Circle(6);
    var circ2 = { radius: 6 };

    assertTrue(circ instanceof Object);
    assertTrue(circ instanceof Circle);
    assertTrue(circ2 instanceof Object);

    assertEquals(Circle, circ.constructor);
    assertEquals(Object, circ2.constructor);
  },

  "test should create another object of same kind": function() {
    var circle = new Circle(6);
    var circle2 = new circle.constructor(9);

    assertEquals(circle.constructor, circle2.constructor);
    assertTrue(circle2 instanceof Circle);
  },

  "test should inherit properties from Circle.prototype": function() {
    var circle = new Circle(6);

    assertEquals(12, circle.diameter());
  },

  "test constructor is Object when prototype is overriden": function() {
    function Circle() {}
    Circle.prototype = {};

    assertEquals(Object, new Circle().constructor);
  },

  "test calling prototype withouth 'new' returns undefined": function() {
    var circle = Circle(6);

    assertEquals("undefined", typeof circle);
    assertEquals(6, radius); // defined property on global scope
  },

  "test spheres are circles in 3D": function() {
    var radius = 6;
    var sphere = new Sphere(radius);

    assertTrue(sphere instanceof Sphere);
    assertTrue(sphere instanceof Circle);
    assertTrue(sphere instanceof Object);
    assertEquals(12, sphere.diameter());
  },

  "test should calculate sphere area": function() {
    var sphere = new Sphere(3);

    assertEquals(113, Math.round(sphere.area()));
  }
});
