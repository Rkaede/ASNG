'use strict';

/** Class representing a ASNG model */
class Model {

    /**
     * Constructor sets up model. [?]
     * @param {Object} [config]                  Configuration settings for the network.
     * @param {Number} [config.total_agents=100] The total number of agents in the model.
     * @param {Number} [config.max_ticks=100]    Maximum number of ticks. [???]
     * @param {Number} [config.grid_rows=10]     Number of rows on the grid. [???]
     * @param {Number} [config.grid_columns=10]  Number of columns on the grid. [???]
     */
    constructor(config) {
        config = config || {};
        this.total_agents = config.total_agents || 100;
        this.max_ticks    = config.max_ticks    || 100;
        this.grid_rows    = config.grid_rows    || 10;
        this.grid_columns = config.grid_columns || 10;

        this.agents = [];
        this.grid = new ToroidalGrid(this.grid_rows, this.grid_columns);
        this.create_agents();
        this.reset();
    }

    /**
     * Creates agents and randomly places them on the grid.
     * @private
     */
    create_agents() {
        for (let i = 0; i < this.total_agents; i++) {
            let agent = new Agent({
                id:     i + 1,
                column: Math.round(Math.random() * this.grid.rows) + 1,
                row:    Math.round(Math.random() * this.grid.columns) + 1
            });
            this.agents.push(agent);
        }
    }

    /** Reset the network.
    * [???] Is this function run outside of the constructor?
    * If not move logic into constructor.
    * */
    reset() {
        this.density       = this.agents.length / this.grid.total_cells();

        /* [???] Possibly move this to it's own function */
        this.max_area      = 150 / this.density;
        this.max_radius_sq = this.max_area / Math.PI;
        this.max_radius    = Math.sqrt(this.max_radius_sq);
        this.max_radius    = this.max_radius - 1;
        this.max_radius    = (this.max_radius > 100) ? 100 : this.max_radius;

        /* [???] Possibly move this to it's own function */
        this.min_area      = 1 / this.density;
        this.min_radius_sq = this.min_area / Math.PI;
        this.min_radius    = Math.sqrt(this.min_radius_sq);
        this.min_radius    = (this.min_radius < 1) ? 1 : this.min_radius;
        this.min_radius    = (this.min_radius >= this.max_radius) ? this.max_radius - 1 : this.min_radius;

        for (let agent of this.agents) {
            agent.set_values();
        }

        for (let agent of this.agents) {
            agent.init(this.min_radius, this.max_radius);
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
