
export function firstUppercase (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function hash (s) {
  return s.split('').reduce(function (a, b) { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)
}
