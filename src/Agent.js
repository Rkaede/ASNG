'use strict';

/** Class representing a network */
class Agent {
    constructor(config) {
        /** @member {Number} */
        this.id = config.id;

        /** @member {Number} */
        this.x = config.column;

        /** @member {Number} */
        this.y = config.row;

        /** @member {Array} */
        this.memory = [];

        /** @member {Array} */
        this.extra_version_agents = [];
    }

    init(min_radius, max_radius) {
        this.min_radius = min_radius;
        this.max_radius = max_radius;

        if (!this.has_collected_agents) {
            this.collect_agents();
        }
        for (let e_agent of this.extra_version_agents) {
            if (!e_agent.has_collected_agents) {
                e_agent.collect_agents(); //params not needed?
            }
            if (e_agent.agreeable_agents.includes(this)) {
                this.add_memory(e_agent);
            }
        }
        //this.status = this.memory.length;
    }

    get status() {
        return this.memory.length;
    }

    set_values() {
        this.has_collected_agents = false;
        this.extra_version        = Math.random(); // ???
        this.agreeableness        = Math.random(); // ???
        // number of people that agents knows
        //this.status               = 0;
        this.interaction_limit    = 100 * this.extra_version; // move hardcoded limit var
    }

    collect_agents() {
        let range                 = this.max_radius - this.min_radius;

        let extra_version_radius  = range * this.extra_version;
        this.extra_version_agents = this.agents.map(agent => {
            if (agent != this) {
                // to be written!
            }
        });

        let agreeableness_radius = range * this.agreeableness;
        this.agreeableness_agents = this.agents.map(agent => {
            if (agent != this) {
                // to be written!
            }
        });
        this.has_collected_agents = true;
    }

    add_memory(stored_agent) {
        let min_agent = function() {
            let lowest;
            for (let agent in this.agents) {
                if (!lowest || agent.status < lowest.status) {
                    lowest = agent;
                }
            }
            return lowest;
        }();

        if (agent.status > min_agent.status) {

        }
    }

    /**
     * Create a grid.
     * @param {Array} foreign_agents - Agents to find in this agents memory.
     * @return {Array} 
     */
    common_agents(foreign_agents) {
        var common = [];
        for (let agent of this.memory) {
            for (let f_agent of foreign_agents) {
                if (agent.id === f_agent.id) {
                    common.push(f_agent);
                }
            }
        }
        return common;
    }

    step() {

    }
}
