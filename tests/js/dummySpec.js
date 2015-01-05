define(['www/js/bo/sum', 'angular'], function (sum) {

    it("First test should be false", function() {
        expect(4).toEqual(sum(2,3));
    });
});