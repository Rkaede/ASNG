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

        it('should set a default grid_rows to 10 if none is specified', function() {
            expect(model.grid_rows).toBe(10);
        });

        it('should set a default grid_columns to 10 if none is specified', function() {
            expect(model.grid_columns).toBe(10);
        });

        it('should create a "agents" array property', function() {
            expect(model.agents).toEqual(jasmine.any(Array));
        });

        it('should create an "grid" object property', function() {
            expect(model.grid).toEqual(jasmine.any(Object));
        });

        it('should create agents', function() {
            expect(model.agents.length).toEqual(100);
        });

        it('should reset the model [???]', function() {
            expect(model.agents.length).toEqual(100);
        });
    });

    describe('create_agents', function() {
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


        it('should give agents an x placement', function() {
            expect(model.agents[0].x).toEqual(jasmine.any(Number));
        });

        it('should give agents an y placement', function() {
            expect(model.agents[0].y).toEqual(jasmine.any(Number));
        });
    });

    describe('create_agents', function() {
        let model;

        beforeEach(function() {
            model = new Model({
                total_agents: 10,
                grid_rows:    10,
                grid_columns: 10
            });
        });

        it('should set density for the model: number of agents / total cells in grid', function() {
            expect(model.density).toEqual(0.1);
        });

        it('should set max_area for the model: 150 / density', function() {
            expect(model.max_area).toEqual(1500);
        });

        it('should set max_radius_sq for the model: max_area / PI', function() {
            expect(model.max_radius_sq).toEqual(477.46482927568604);
        });

        it('should set max_radius for the model', function() {
            expect(model.max_radius).toEqual(20.850968611841584);
        });

        it('should cap the max_radius to 100', function() {
            let model = new Model({
                total_agents: 10,
                grid_rows:    100,
                grid_columns: 100
            });
            expect(model.max_radius).toEqual(100);
        });

        it('should set min_area for the model: 1 / density', function() {
            expect(model.min_area).toEqual(10);
        });

        it('should set max_radius_sq for the model: min_area / PI', function() {
            expect(model.min_radius_sq).toEqual(3.183098861837907);
        });

        it('should set max_radius for the model', function() {
            expect(model.min_radius).toEqual(1.7841241161527712);
        });

        it('should set the min_radius no lower than 1', function() {
            let model = new Model({
                total_agents: 1000,
                grid_rows:    10,
                grid_columns: 10
            });
            expect(model.min_radius).toEqual(1);
        });

        it('should run set_values() on all of the agents', function() {
            let agent = model.agents[0];
            expect(agent.has_collected_agents).toBeDefined();
            expect(agent.extra_version).toBeDefined();
            expect(agent.agreeableness).toBeDefined();
            expect(agent.interaction_limit).toBeDefined();
        });

        it('should run init() on all of the agents', function() {
            let agent = model.agents[0];
            expect(agent.min_radius).toBeDefined();
            expect(agent.max_radius).toBeDefined();
        });
    });

});
