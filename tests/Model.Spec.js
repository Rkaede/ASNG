'use strict';

describe('Model', function() {

    describe('constructor', function() {
        var model;

        beforeEach(function() {
            model = new Model();
        });

        it('should set a default max_ticks to 100 if none is specified', function() {
            expect(model.max_ticks).toBe(100);
        });

        it('should set a default total_agents to 100 if none is specified', function() {
            expect(model.max_ticks).toBe(100);
        });

        it('should create a "agents" array property', function() {
            expect(model.agents).toEqual(jasmine.any(Array));
        });

        it('should create an "ring" object property', function() {
            expect(model.ring).toEqual(jasmine.any(Number));
        });

        it('should create agents', function() {
            expect(model.agents.length).toEqual(100);
        });

        it('should reset the model [???]', function() {
            expect(model.agents.length).toEqual(100);
        });
    });

    describe('create_agents()', function() {
        let model;

        beforeEach(function() {
            model = new Model({ total_agents: 10 });
        });

        it('should add a number of agents (specified by total_agents) to the model', function() {
            expect(model.agents.length).toEqual(10);
        });

        it('should give agents an ID', function() {
            expect(model.agents[0].id).toEqual(1);
            expect(model.agents[1].id).toEqual(2);
        });

        it('should issue IDs starting from 1', function() {
            expect(model.agents[0].id).toEqual(1);
        });


        it('should give agents an place on the ring', function() {
            expect(model.agents[0].pos).toEqual(jasmine.any(Number));
        });
    });

    describe('reset()', function() {
        let model = new Model({
            total_agents: 1000
        });

        it('should set density for the model: ring length / number of agents', function() {
            expect(model.density).toEqual(0.001);
        });

        it('should set the min_range: density / 1', function() {
            expect(model.min_range).toEqual(0.001); 
        });

        it('should set the max_range: 150 / density', function() {
            expect(model.max_range).toEqual(0.15);
        });

        //it('should set the max range to the length of the ring', function() {
        //expect(model.max_range).toEqual(100); [> [?] This is just a placeholder <]
        //});

        //it('should set max_area for the model: 150 / density', function() {
        //expect(model.max_area).toEqual(1500);
        //});

        //it('should set max_radius_sq for the model: max_area / PI', function() {
        //expect(model.max_radius_sq).toEqual(477.46482927568604);
        //});

        //it('should set max_radius for the model', function() {
        //expect(model.max_radius).toEqual(20.850968611841584);
        //});

        //it('should cap the max_radius to 100', function() {
        //let model = new Model({
        //total_agents: 10,
        //ring_length:  10000
        //});
        //expect(model.max_radius).toEqual(100);
        //});

        //it('should set min_area for the model: 1 / density', function() {
        //expect(model.min_area).toEqual(10);
        //});

        //it('should set max_radius_sq for the model: min_area / PI', function() {
        //expect(model.min_radius_sq).toEqual(3.183098861837907);
        //});

        //it('should set max_radius for the model', function() {
        //expect(model.min_radius).toEqual(1.7841241161527712);
        //});

        //it('should set the min_radius no lower than 1', function() {
        //let model = new Model({
        //total_agents: 10,
        //grid_rows:    1,
        //grid_columns: 1
        //});
        //expect(model.min_radius).toEqual(1);
        //});

        it('should run set_values() on all of the agents', function() {
            let agent = model.agents[0];
            expect(agent.has_collected_agents).toBeDefined();
            expect(agent.extra_version).toBeDefined();
            expect(agent.agreeableness).toBeDefined();
            expect(agent.interaction_limit).toBeDefined();
        });

        //it('should run init() on all of the agents', function() {
        //let agent = model.agents[0];
        //expect(agent.min_range).toBeDefined();
        //expect(agent.max_range).toBeDefined();
        //});
    });

});
