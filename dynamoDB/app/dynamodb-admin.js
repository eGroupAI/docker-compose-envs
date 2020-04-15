const AWS = require('aws-sdk');
const { createServer } = require('dynamodb-admin');

const PORT = 8001

const dynamodb = new AWS.DynamoDB({
  endpoint: 'http://dynamodb:8000',
  sslEnabled: false,
  region: 'ap-northeast-1',
  accessKeyId: 'key',
  secretAccessKey: 'secret'
});
const dynClient = new AWS.DynamoDB.DocumentClient({service: dynamodb});
const app = createServer(dynamodb, dynClient);

const server = app.listen(PORT)
server.on('listening', () => {
  const address = server.address();
  console.log(`  listening on http://localhost:${address.port}`);
});