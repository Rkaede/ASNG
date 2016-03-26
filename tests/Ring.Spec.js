describe('Ring', function() {

    it('should exist', function() {
        expect(Ring).toBeDefined();
    });

    it('should accept a length paramater', function() {
        let ring = new Ring();
        expect(ring.length).toBe(1);
    });

});
