describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

});

describe("Most frequent element of an array", function() {


  it("[4,2] should return '' ", function() {

    expect(mostFreq([4,2])).toBe('');
  });
  it("[4,4,2] should return '4' ", function() {

    expect(mostFreq([4,2])).toBe('4');
  });
});
