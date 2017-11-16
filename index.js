// Traces and checks the memory usage
// Usage Example:
//
// const MemoryAnalizer = require('eparts-shared/lib/helpers/memory-analyzer')
// const memoryAnalizer = new MemoryAnalizer()
//
// memoryAnalizer.startTrace()
// memoryAnalizer.traceMemory() // use this line every time you need to check the memory
// memoryAnalizer.finishTrace()

class MemoryAnalizer {
  constructor () {
    this.before = 0
    this.after = 0
    this.memoryLogger = []
  }

  startTrace () {
    this.before = process.memoryUsage().rss
    console.log('START TRACING MEMORY - Initial Memory: ', (this.before / 1024) / 1024, 'MB')
    this.startAt = process.hrtime()
  }

  calculateAverage () {
    let sum = this.memoryLogger.reduce(function (a, b) { return a + b })
    this.average = sum / this.memoryLogger.length
    console.log('Average Memory during the process', Math.round((this.average) / 1024 / 1024), 'MB')
  }

  traceMemory () {
    this.memoryLogger.push(process.memoryUsage().rss)
  }

  finishTrace () {
    let end = process.hrtime(this.startAt)
    console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000)

    this.increasedSize = Math.round((process.memoryUsage().rss - this.before) / 1024 / 1024)
    console.log('Memory increased by', this.increasedSize, 'MB')

    return {
      before: this.before,
      after: this.after,
      averageMemory: this.averageMemory,
      increasedSize: this.increasedSize
    }
  }
}

module.exports = MemoryAnalizer
