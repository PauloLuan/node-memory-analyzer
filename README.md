# node-memory-analyzer

Just a simple tool to check and compare memory usage on NodeJS applications

Usage example:

```js
const MemoryAnalizer = require('index.js')
const memoryAnalizer = new MemoryAnalizer()

memoryAnalizer.startTrace()
memoryAnalizer.traceMemory()  // use this line every time you need to check the memory
memoryAnalizer.finishTrace()
```
