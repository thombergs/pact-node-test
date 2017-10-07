var pact = require('@pact-foundation/pact-node');
var server = pact.createServer({port: 9999});
server.start().then(function() {
  // Do your testing/development here
});