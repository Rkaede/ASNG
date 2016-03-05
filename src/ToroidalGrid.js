'use strict';

/** Class representing a toroidal grid */
class ToroidalGrid {

    /**
     * Create a grid.
     * @param {number} rows - The number of rows.
     * @param {number} columns - The number of columns.
     */
    constructor(rows, columns) {
        /** @member {Number} */
        this.rows = rows || 0;

        /** @member {Number} */
        this.columns = columns || 0;
    }

    /**
     * Get the total number of cells.
     * @return {number} The number of cells.
     */
    total_cells() {
        return this.rows * this.columns;
    }

}
