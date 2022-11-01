module.exports = {
  // removes duplicates from array
  toUnique: (a, b, c) => { //array, placeholder, placeholder
    if (!a.length)
      return a;
    b = a.length;
    while (c = --b)
      while (c--) a[b] !== a[c] || a.splice(c, 1);
    return a;
  },
  // creates a union of two arrays
  union: (a1, a2, b, c) => { //array1, array2, placeholder, placeholder
    if (!a1.push(...a2))
      return a1;
    b = a1.length;
    while (c = --b)
      while (c--) a1[b] !== a1[c] || a1.splice(c, 1);
    return a1;
  }
}