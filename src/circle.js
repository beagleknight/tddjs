function Circle(radius) {
  // Uncomment to solve missing new keyword
  //if(!(this instanceof Circle)) {
  //  return new Circle(radius);
  //}

  this.radius = radius;
}

(function (p) {
  p.diameter = function() {
    return this.radius * 2;
  };

  p.circumference = function() {
    return this.diameter() * Math.PI;
  };

  p.area = function() {
    return this.radius * this.radius * Math.PI;
  };
}(Circle.prototype));

function Sphere(radius) {
  Circle.call(this, radius);
}

//Sphere.inherit(Circle);
//
//Sphere.prototype.area = function() {
//  return 4 * this._super.area.call(this);
//};

Sphere.inherit2(Circle, {
  area: function() {
    return 4 * this._super();
  }
});

//Sphere.prototype = (function () {
//  function F() {};
//  F.prototype = Circle.prototype;
//
//  return new F();
//}());
//
//// If we forget this, it will resolve as Circle through prototype chain
//Sphere.prototype.constructor = Sphere;

function Circle2(radius) {
  this.radius = radius;

  function ensureValidRadius(radius) {
    return radius >= 0;
  }

  function getRadius() {
    return this.radius;
  }

  function setRadius(radius) {
    if(ensureValidRadius(radius)) {
      this.radius = radius;
    }
  }

  this.getRadius = getRadius;
  this.setRadius = setRadius;
}

function Circle3(radius) {
  function getSetRadius() {
    if(arguments.length > 0) {
      if(arguments[0] < 0) {
        throw new TypeError("Radius should be >= 0");
      }
      radius = arguments[0];
    }
    return radius;
  }

  function diameter() {
    return radius * 2;
  }

  function circumference() {
    return diameter() * Math.PI;
  }

  this.radius = getSetRadius;
  this.diameter = diameter;
  this.circumference = circumference;

  this.radius(radius);
}

function circle(radius) {
  function getSetRadius() {
    if(arguments.length > 0) {
      if(arguments[0] < 0) {
        throw new TypeError("Radius should be >= 0");
      }
      radius = arguments[0];
    }
    return radius;
  }

  function diameter() {
    return radius * 2;
  }

  function circumference() {
    return diameter() * Math.PI;
  }

  function area() {
    return radius * radius * Math.PI;
  }

  return {
    radius: getSetRadius,
    diameter: diameter,
    area: area,
    circumference: circumference
  };
}

function sphere(radius) {
  var sphereObj = circle(radius);
  var circleArea = sphereObj.area;

  function area() {
    return 4 * circleArea.call(this);
  }

  sphereObj.area = area;

  return sphereObj;
}
