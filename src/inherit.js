if(!Function.prototype.inherit) {
  (function() {
    function F() {}

    Function.prototype.inherit = function (superFn) {
      F.prototype = superFn.prototype;
      this.prototype = new F();
      this.prototype.constructor = this;
      this.prototype._super = superFn.prototype;
    };
  }());
}

if(!Function.prototype.inherit2) {
  (function() {
    function F() {}

    Function.prototype.inherit2 = function (superFn, methods) {
      F.prototype = superFn.prototype;
      this.prototype = new F();
      this.prototype.constructor = this;
      
      var subProto = this.prototype;

      tddjs.each(methods, function(name, method) {
        subProto[name] = function() {
          var returnValue;
          var oldSuper = this._super;
          this._super = superFn.prototype[name];

          try {
            returnValue = method.apply(this, arguments);
          } finally {
            this._super = oldSuper;
          }

          return returnValue;
        };
      });
    };
  }());
}

function _super(object, methodName) {
  var method = object._super && object._super[methodName];

  if(typeof method != "function") {
    return;
  }

  // Remove object and method arguments
  var args = Array.prototype.slice.call(arguments, 2);

  return method.apply(object, args);
}
