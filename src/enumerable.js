var enumerable = {
  reject: function (callback) {
    var result = [];

    this.forEach(function (item) {
      if(!callback(item)) {
        result.push(item);
      }
    });

    return result;
  }
};
