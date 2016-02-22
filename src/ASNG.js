'use strict';

let model = new Model({
    max_agents: 100,
    max_ticks: 100,
    grid_rows: 100,
    grid_columns: 100
});

console.log(model);

model.run();
