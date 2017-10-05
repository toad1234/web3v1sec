//var should = require("should");
// request = require("request");
//var expect = require("chai").expect;
//var util = require("utill");
var express = require('express');
var supertest = require('supertest');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var server = supertest.agent("http://localhost:3000/");
person = require('../api/models/users.js');
/**
 * Good weather for getting api/persons
 */
describe("Users unittest", function () {
    it("Should return a json file", function (done) {
        server.get("api/persons").expect("Content-type", /json/).expect(200, done);
    });
});



describe("Post a correct body to the users", function () {
    it("Should return a json file and a 200 code", function (done) {
        server.post("api/persons").send({
            "name": "test",
            "lastname": "tester",
            "preposition" : "de",
            "password": "test22",
            "username": "koek"}).set('Accept', /application\/json/).expect('Content-type', /json/).expect(200,done);
    });
});

/**
 * Bad weather for empty post to /api/persons/
 */
describe("Post an empty body to the users", function () {
    it("Should return a html file", function (done) {
        server.post("api/persons").send({}).set('Accept', /application\/json/).expect(400,done);
    });
});
