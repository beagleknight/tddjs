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
  },

  "test super should call method of same name on prototype": function() {
    function Person(name) {
      this.name = name;
    }

    Person.prototype = {
      constructor: Person,

      getName: function() {
        return this.name;
      },

      speak: function() {
        return "Hello"
      }
    };

    function LoudPerson(name) {
      //Person.call(this, name);
      _super(this, "constructor", name);
    }

    //LoudPerson.inherit2(Person, {
    //  getName: function() {
    //    return this._super().toUpperCase();
    //  },

    //  speak: function() {
    //    return this._super() + "!!!";
    //  }
    //});

    LoudPerson.inherit(Person);

    LoudPerson.prototype.getName = function() {
      return _super(this, "getName").toUpperCase();
    };

    LoudPerson.prototype.say = function(words) {
      return _super(this, "speak", words) + "!!!";
    };

    var np = new LoudPerson("Chris");

    assertEquals("CHRIS", np.getName());
    //assertEquals("Hello!!!", np.speak());
    assertEquals("Hello!!!", np.say("Hello"));
  }
});
