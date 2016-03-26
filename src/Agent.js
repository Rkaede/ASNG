'use strict';

/** Class representing a network */
class Agent {
    /**
     * Constructor sets up agent. [?]
     * @param {Object} config              Configuration settings for the network.
     * @param {Number} [config.id=0]       ID of the Agent.
     * @param {Number} [config.position=0] Column that the agent is on the grid.
     */
    constructor(config) {
        config    = config      || {};
        this.id   = config.id   || 0;
        this.pos  = config.pos  || 0;

        this.memory = [];
        this.extra_version_agents = [];
    }

    init() {
        if (!this.has_collected_agents) {
            this.collect_agents(this.model.min_range, this.model.max_range, this.model.agents);
        }
        //for (let e_agent of this.extra_version_agents) {
        //if (!e_agent.has_collected_agents) {
        //e_agent.collect_agents(); //params not needed?
        //}
        //if (e_agent.agreeable_agents.includes(this)) {
        //this.add_memory(e_agent);
        //}
        //}
        //this.status = this.memory.length;
    }

    get status() {
        return this.memory.length;
    }

    set_values(model) {
        this.model                = model;
        this.has_collected_agents = false;
        this.extra_version        = Math.random(); /* [!] Change to normally distributed value. Mean: .5, Standard Deviation: .15, with boundary of 0 and 1 */
        this.agreeableness        = Math.random(); /* [!] Change to normally distributed value */
        this.interaction_limit    = 100 * this.extra_version; /* [!] Move property to getter? */
    }


    collect_agents(max_range, min_range, agents) {
        agents.forEach(agent => {
            if (agent != this) {
                let distance = Math.abs(this.pos - agent.pos);
                distance = (distance > .5) ? (this.model.ring - distance) : distance;
                if (distance < this.model.max_range && distance > this.model.min_range) {
                    this.extra_version_agents.push(agent);
                }
            }
        });

        //let agreeableness_radius = range * this.agreeableness;
        //this.agreeableness_agents = this.agents.map(agent => {
        //if (agent != this) {
        //// to be written!
        //}
        //});
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
