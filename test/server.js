var expect  = require("chai").expect;
var request = require("request");

describe('GET "/"', function() {
  var url = "http://localhost:3000/"
  it("returns status code 200", function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.eq(200)
      done()
    })
  })
})
