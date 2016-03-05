describe('toroidal grid', function() {

    describe('total_cells', function() {
        it('should exist', function() {
            var grid = new ToroidalGrid(10, 10);
            expect(grid.total_cells).toBeDefined();
        });

        it('should have default paramater values of 0', function() {
            var grid1 = new ToroidalGrid();
            expect(grid1.total_cells()).toBe(0);

            var grid2 = new ToroidalGrid(10);
            expect(grid2.total_cells()).toBe(0);

            var grid3 = new ToroidalGrid(10, 0);
            expect(grid3.total_cells()).toBe(0);

            var grid4 = new ToroidalGrid(0, 10);
            expect(grid4.total_cells()).toBe(0);
        });

        xit('cannot have negative values for paramaters', function() {
            var grid1 = new ToroidalGrid(10, -10);
            expect(grid1.total_cells()).toThrowError();

            var grid2 = new ToroidalGrid(-10, 10);
            expect(grid2.total_cells()).toThrowError();
        });

        it('should return the number of cells (rows * columns)', function() {
            var grid1 = new ToroidalGrid(5, 10);
            expect(grid1.total_cells()).toEqual(50);

            var grid2 = new ToroidalGrid(7, 7);
            expect(grid2.total_cells()).toEqual(49);

            var grid3 = new ToroidalGrid(3, 3);
            expect(grid3.total_cells()).toEqual(9);
        });
    });

});
