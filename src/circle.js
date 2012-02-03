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
