//var should = require("should");
// request = require("request");
//var expect = require("chai").expect;
//var util = require("utill");
var supertest = require('supertest');

var server = supertest.agent("http://localhost:3000/");
/**
 * Good weather for getting api/persons
 */
describe("Users unittest", function () {
    it("Should return a json file", function (done) {
        server.get("api/persons").expect("Content-type", /json/).expect(200,done);
    });
});


/**
 * Bad weather for empty post to /api/persons/
 */
describe("Post an empty body to the users", function () {
    it("Should return a html file", function (done) {
        server.post("api/persons").expect("Content-type", /text/);
    });
});

describe("Post a correct body to the users", function () {
    it("Should return a json file and a 200 code", function (done) {
        server.post("api/persons").send("{"name": "test",
            "lastname": "testo",
            "username": "testman",
            "password": "tester""}
        ).expect("Content-type", /json/).expect(200,done);
    });
});

