"use strict";

var opencv = source("cylon-opencv");

describe("Cylon.OpenCV", function() {
  it("can register the adaptor and driver", function() {
    opencv.register.should.be.a('function');
  });

  it("can create adaptor", function() {
    opencv.adaptor.should.be.a('function');
    expect(opencv.adaptor()).to.be.a('object');
  });

  it("can create driver", function() {
    opencv.driver.should.be.a('function');
    expect(opencv.driver({ name: 'mat', device: {} })).to.be.a('object');
  });
});
