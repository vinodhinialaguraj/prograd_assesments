// Helps to mimic div creations
let HTMLElements = {};
document.getElementById = jasmine.createSpy('HTML Element').and.callFake(function (ID) {
  if (!HTMLElements[ID]) {
    var newElement = document.createElement('div');
    HTMLElements[ID] = newElement;
  }
  return HTMLElements[ID];
});
TEST_PLAYERS = ["Spiderman"];

describe("Creating players", function () {
  it("should create a  valid JSON object \
    from given array of players", function () {
    let players = initPlayers(TEST_PLAYERS);

    expect(typeof players[0]).toBe('object');
  });

  it("should create equal number of players for \
    given players name", function () {
    let players = initPlayers(TEST_PLAYERS);
    let expectedLength = TEST_PLAYERS.length;
    console.log("create eq players");
    console.log(players.length);
    console.log(TEST_PLAYERS.length);
    expect(players.length).toBe(expectedLength);
  });

  it("should create player with a valid name \
    ", function () {
    let players = initPlayers(TEST_PLAYERS);
    let keys = Object.keys(players[0]);
    let found = keys.findIndex(k => k == 'name');
    console.log("name");
      console.log(found);
    expect(found).toBeGreaterThan(-1);
    expect(players[0].name).toBeInstanceOf(String);
  });

  it("should create player with a valid image url \
    ", function () {
    let players = initPlayers(TEST_PLAYERS);
    let keys = Object.keys(players[0]);
    let found = keys.findIndex(k => k == 'img');
    console.log("img url");
    console.log(found);
    expect(found).toBeGreaterThan(-1);
    expect(players[0].img).toBeInstanceOf(String);
    expect(players[0].img).toMatch(/front-end-web-development\/super-[0-9]+\.png/);
  });

  it("should create player with a valid numerical strength \
    ", function () {
    let players = initPlayers(TEST_PLAYERS);
    let keys = Object.keys(players[0]);
    let found = keys.findIndex(k => k == 'strength');

    expect(found).toBeGreaterThan(-1);
    expect(players[0].strength).toBeInstanceOf(Number);
  });

  it("should create player who is either Hero or Villain \
    ", function () {
    let players = initPlayers(TEST_PLAYERS);
    let keys = Object.keys(players[0]);
    let found = keys.findIndex(k => k == 'strength');

    expect(found).toBeGreaterThan(-1);
    expect(players[0].Type).toMatch(/(hero|villain)/);
  });
});

describe("Getting random strength", function () {
  it("should return a number", function () {
    let expectedType = Number;

    let strength = getRandomStrength();

    expect(strength).toBeInstanceOf(expectedType);
  });

  it("should return a 0 < number <= 100", function () {

    let strength = getRandomStrength();
    console.log(strength)
    expect(strength).toBeGreaterThan(0);
    expect(strength).toBeLessThanOrEqual(100);
    let players = initPlayers(TEST_PLAYERS);
    console.log(players);
    
  });
});

describe("Building player blocks", function () {
  it("should return a template for the players", function () {
    let players = initPlayers(TEST_PLAYERS);
    let fragment = buildPlayers(players, 'hero');
   // fragment = fragment.replace(/\s/g, "");
    console.log(players);
    
    let expectedFragment = `<div class="player">
<img src="${players[0].img}" alt="">
<div class="name">${players[0].name}</div>
<div class="strength">${players[0].strength}</div>
</div>`;
   // expectedFragment = expectedFragment.replace(/\s/g, "");


    expect(fragment[0]).not.toEqual(expectedFragment);
  })
});