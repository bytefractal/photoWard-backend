const chai = require('chai');
const expect = require('chai').expect;
const should = require('chai').should();
const chaiSubset = require('chai-subset');
const chaiSorted = require('chai-sorted');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const { mockReq, mockRes } = require('sinon-express-mock');

chai.use(chaiSorted);
chai.use(chaiSubset);
chai.use(sinonChai);

const { UsersController } = require('../../controllers/users.controller');

describe('UsersController', function() {
  describe('getUsers', function() {
    it('can retrive users', async function() {
      let req = new mockReq();
      let res = new mockRes();
      let controller = UsersController.getUsers;

      await controller(req, res);

      expect(res.status).to.have.been.calledOnce.and.calledWith(200);
      expect(res.json).to.have.been.calledOnce.and.calledWith({message: "success"});
    });
  });
});
