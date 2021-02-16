module.exports = {
  status(value, options) {
    return options
      .fn(this)
      .split("\n")
      .map((v) => {
        var t = 'value="' + value + '"';
        return !RegExp(t).test(v) ? v : v.replace(t, t + ' selected="selected"');
      })
      .join("\n");
  }
};

