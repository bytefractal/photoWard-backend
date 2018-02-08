const { defineStep, Before } = require('cucumber');

const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const chaiSubset = require('chai-subset');
const chaiSorted = require('chai-sorted');
const sinon = require('sinon');

const app = require('../../app');

chai.use(chaiHttp);
chai.use(chaiSorted);
chai.use(chaiSubset);

defineStep('asked for users status is {int}', async function(statusCode){ 
  let res = await chai.request(app).get('/users');
  expect(res).to.have.status(statusCode);
});
