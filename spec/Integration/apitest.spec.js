const frisby = require('frisby');
 
describe("Car Manufacturers REST API", function() {
 
  const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";
 
  describe("GET success status code", function() {
 
    it("should return the success status code", function(done) {
      frisby
        .get(BASE_URL)
        .then(function(response) {
          expect(response.status).toBe(200);
        })
        .done(done);
    })
 
  });
});