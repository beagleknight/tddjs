TestCase("ES5ObjectTest", {
  "test defineProperty": function() {
    var circle = {};

    Object.defineProperty(circle, "radius", {
      value: 4,
      writable: false,
      configurable: false
    });

    assertEquals(4, circle.radius);
  },

  "test changing a property descriptor": function() {
    var circle = { radius: 3 };
    var descriptor = 
      Object.getOwnPropertyDescriptor(circle, "radius");
    descriptor.configurable = false;
    Object.defineProperty(circle, "radius", descriptor);
    delete circle.radius;

    assertEquals(3, circle.radius);
  },

  "test inheritance, es5 style": function() {
    var circle = { };
    var sphere = Object.create(circle);
    assert(circle.isPrototypeOf(sphere));
    assertEquals(circle, Object.getPrototypeOf(sphere));
  },

  "test Object.create with properties": function() {
    var circle = { };

    var sphere = Object.create(circle, {
      radius: {
        value: 3,
        writable: false,
        configurable: false,
        enumerable: true
      }
    });

    assertEquals(3, sphere.radius);
  },

  "test property accessors": function() {
    Object.defineProperty(circle, "diameter", {
      get: function() {
        return this.radius * 2;
      },
      set: function(diameter) {
        if(isNaN(diameter)) {
          throw new TypeError("Diameter should be a number");
        }
        this.radius = diameter / 2;
      }
    });
  }
});
