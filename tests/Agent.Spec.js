'use strict';

describe('Agent', function() {

    describe('constructor', function() {
        let agent;

        beforeEach(function() {
            agent = new Agent();
        });

        it('should set a default id to 0 if none is specified', function() {
            expect(agent.id).toBe(0);
        });

        it('should set a default pos to 0 if none is specified', function() {
            expect(agent.pos).toBe(0);
        });

        it('should create an memory property as an array', function() {
            expect(agent.memory).toEqual(jasmine.any(Array));
        });

        it('should create an extra_version property as an array', function() {
            expect(agent.memory).toEqual(jasmine.any(Array));
        });
    });

    describe('set_values()', function() {
        let agent;

        beforeEach(function() {
            agent = new Agent();
            agent.set_values();
        });

        it('should set "has_collected_agents" to false', function() {
            expect(agent.has_collected_agents).toBe(false);
        });

        describe('extra_version', function() {
            it('should exist', function() {
                expect(agent.extra_version).toBeDefined();
            });

            it('should be a number', function() {
                expect(agent.extra_version).toEqual(jasmine.any(Number));
            });

            it('not be greater than 1', function() {
                expect(agent.extra_version).toBeLessThan(1); /* [!] Find better way to test random numbers */
            });

            it('should be greater than 0', function() {
                expect(agent.extra_version).toBeGreaterThan(0); /* [!] Find better way to test random numbers */
            });
        });

        describe('agreeableness', function() {
            it('should exist', function() {
                expect(agent.agreeableness).toBeDefined();
            });

            it('should be a number', function() {
                expect(agent.agreeableness).toEqual(jasmine.any(Number));
            });

            it('not be greater than 1', function() {
                expect(agent.agreeableness).toBeLessThan(1); /* [!] Find better way to test random numbers */
            });

            it('should be greater than 0', function() {
                expect(agent.agreeableness).toBeGreaterThan(0); /* [!] Find better way to test random numbers */
            });
        });


        describe('interaction_limit', function() {
            it('should exist', function() {
                expect(agent.interaction_limit).toBeDefined();
            });

            it('should be a number', function() {
                expect(agent.interaction_limit).toEqual(jasmine.any(Number));
            });

            it('should be set to 100 * extra_version', function() {
                expect(agent.interaction_limit).toBe(agent.extra_version * 100);
            });
        });
    });

    describe('init()', function() {
        let agent, ring;

        beforeEach(function() {
            agent = new Agent();
            agent.init(10, 100, []);
        });

    });


});
