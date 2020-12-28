function Calculate(fn) {
    return new Function('return ' + fn)();
  }
export default Calculate;