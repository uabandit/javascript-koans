
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(true === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(false === false, 'what is a false value?');
});

test("equal", function() {
    equal(2, 1 + 1, 'what will satisfy the equal assertion?');
});

const sum = function(a, b) {
    return a + b
}

test("equal", function() {
    equal(4, sum(2, 2));
    equal(10, sum(5, 5));
    equal(11, sum(5, 5));
});
