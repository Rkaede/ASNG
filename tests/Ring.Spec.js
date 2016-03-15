describe('Ring', function() {

    it('should exist', function() {
        expect(Ring).toBeDefined();
    });

    it('should accept a length paramater', function() {
        let ring = new Ring(20);
        expect(ring.length).toBe(20);
    });

    it('should default the length to 0 no paramater is provided', function() {
        let ring = new Ring();
        expect(ring.length).toBe(0);
    });
});
