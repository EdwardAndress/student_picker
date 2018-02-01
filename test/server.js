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

describe('GET "/cohorts/:cohort"', function() {
  var cohort;
  function url(cohort) { return `http://localhost:3000/cohorts/${cohort}` }

  describe("when data includes cohorts for October, Novemver and December", function() {
    describe('passing "october"', function() {
      it("returns status code 200", function(done) {
        request(url('october'), function(error, response, body) {
          expect(response.statusCode).to.eq(200)
          done()
        })
      })
    })

    describe('passing "november"', function() {
      it("returns status code 200", function(done) {
        request(url('november'), function(error, response, body) {
          expect(response.statusCode).to.eq(200)
          done()
        })
      })
    })

    describe('passing "december"', function() {
      it("returns status code 200", function(done) {
        request(url('december'), function(error, response, body) {
          expect(response.statusCode).to.eq(200)
          done()
        })
      })
    })
  })
})
