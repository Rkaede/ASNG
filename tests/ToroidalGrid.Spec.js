describe('toroidal grid', function() {

    describe('total_cells', function() {
        it('should exist', function() {
            var grid = new ToroidalGrid(10, 10);
            expect(grid.total_cells).toBeDefined();
        });

        it('should return the number of cells (rows * columns)', function() {
            var grid = new ToroidalGrid(5, 10);
            expect(grid.total_cells()).toEqual(50);
        });
    });

});
