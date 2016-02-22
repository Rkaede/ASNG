'use strict';

/** Class representing a ASNG model */
class Model {
    constructor(config) {

        /** @member {Number} */
        this.max_agents = config.max_agents;

        /** @member {Array} */
        this.agents = [];

        /** @member {Number} */
        this.max_ticks = config.max_ticks;

        /** @member {Object} */
        this.grid = new ToroidalGrid(config.grid_rows, config.grid_columns);

        this.create_agents();
        this.reset();
    }


    /**
     * Creates agents and randomly places them on the grid.
     * 
     * @private
     * 
     */
    create_agents() {
        for (var i = 0; i < this.max_agents; i++) {
            let agent = new Agent({
                id:     i,
                column: Math.round(Math.random() * this.grid.rows) + 1,
                row:    Math.round(Math.random() * this.grid.columns) + 1
            });
            this.agents.push(agent);
        }
    }

    /** Reset the network. */
    reset() {
        this.density       = this.agents.length / this.grid.total_cells();

        this.max_area      = 150 / this.density;
        this.max_radius_sq = this.max_area / Math.PI;
        this.max_radius    = Math.sqrt(this.max_radius_sq);
        this.max_radius    = this.max_radius - 1;
        this.max_radius    = (this.max_radius > 100) ? 100 : this.max_radius;

        this.min_area      = 1 / this.density;
        this.min_radius_sq = this.min_area / Math.PI;
        this.min_radius    = Math.sqrt(this.min_radius_sq);
        this.min_radius    = (this.min_radius < 1) ? 1 : this.min_radius;
        this.min_radius    = (this.min_radius >= this.max_radius) ? this.max_radius - 1 : this.min_radius;

        for (let agent of this.agents) {
            //agent.setValues();
        }

        for (let agent of this.agents) {
            //agent.init(this.min_radius, this.max_radius);
        }

        for (let agent of this.agents) {
            for (let stored_agent in agent.memory) {
                // stored_agent.status = stored_agent.memory.length;
                // ???
            }
        }
    }

    run() {
        for (var i = 0; i < this.max_ticks; i++) {
            for (let agent of this.agents) {
                //agent.step();
            }
            for (let agent of this.agents) {
                // agent.status = agent.neighbours.length; // ???
            }
        }
    }
}
