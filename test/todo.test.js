var chai = require('chai');
var chaiHttp = require('chai-http');  
var expect = require('chai').expect;

var itemAdd = "Get up";
var itemEdited = "Get dressed";

chai.use(chaiHttp);

describe('Check if todo list running',() => {
	it('Should return status code of 200',done => {
		chai.request("http://localhost:8080")
		  .put('/todo')
		  .end(function (err, res) {
			 expect(err).to.be.null;
			 expect(res).to.have.status(200);
			done();
		  });
	})
});

describe('Add', function() {
    var host = "http://localhost:8080";
    var path = "/todo/add/";

    it('Should send item to POST and update site', function(done) {
        chai
            .request(host)
            .post(path)
            // .field('myparam' , 'test')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({newtodo: itemAdd})
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
					console.log("Submitted item: " + itemAdd);
                    done();
                }
            });
    });
});

describe('Edit', function() {
    var host = "http://localhost:8080";
    var path = "/todo/edit/0";

    it('Should edit item from previous step', function(done) {
        chai
            .request(host)
            .post(path)
            // .field('myparam' , 'test')
            .set('content-type', 'application/x-www-form-urlencoded')
			.send({input: itemEdited})
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
					console.log("Changed to: " + itemEdited);
                    done();
                }
            });
    });
});

describe('Delete', function() {
    var host = "http://localhost:8080";
    var path = "/todo/delete/0";

    it('Should delete item from previous step', function(done) {
        chai
            .request(host)
            .get(path)
            // .field('myparam' , 'test')
            .set('content-type', 'application/x-www-form-urlencoded')
            .end(function(error, response, body) {
                if (error) {
                    done(error);
                } else {
					console.log("Deleted: " + itemEdited);
                    done();
                }
            });
    });
});