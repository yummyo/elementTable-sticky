const ws = require('nodejs-websocket')
console.log('开始建立连接...')
const server = ws
  .createServer(function(conn) {
    conn.on('text', function(str) {
      console.log('收到的信息为:' + str)
      conn.send(str)
    })
    conn.on('close', function(code, reason) {
      console.log('关闭连接')
    })
    conn.on('error', function(code, reason) {
      console.log('异常关闭')
    })
  })
  .listen(8001)
console.log('WebSocket建立完毕')
