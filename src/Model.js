'use strict';

/** Class representing a ASNG model */
class Model {

    /**
     * Constructor sets up model. [?]
     * @param {Object} [config]                  Configuration settings for the network.
     * @param {Number} [config.total_agents=100] The total number of agents in the model.
     * @param {Number} [config.max_ticks=100]    Maximum number of ticks. [???]
     */
    constructor(config) {
        config = config || {};
        this.total_agents = config.total_agents || 100;
        this.max_ticks    = config.max_ticks    || 100;

        this.agents = [];
        this.ring = 1;
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
                id:   i + 1,
                pos:  Math.random()
            });
            this.agents.push(agent);
        }
    }

    /** Reset the network.
    * [???] Is this function run outside of the constructor?
    * If not move logic into constructor.
    * */
    reset() {
        this.density   = this.ring / this.agents.length;
        this.min_range = this.density / 1;
        this.max_range = (this.agents.length > 150) ? this.density * 150 : 1;

        for (let agent of this.agents) {
            agent.set_values(this);
        }

        for (let agent of this.agents) {
            agent.init();
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
