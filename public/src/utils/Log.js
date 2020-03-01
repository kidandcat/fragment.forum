const debug = true
export default function logger (type) {
  return {
    info: (...args) => {
      if (debug) {
        console.log(type + ':', ...args)
      }
    },
    error: (...args) => {
      if (debug) {
        console.error(type + ':', ...args)
      }
    },
    warn: (...args) => {
      if (debug) {
        console.warn(type + ':', ...args)
      }
    }
  }
}
