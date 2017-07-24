const PipeTasks = require("./common/PipeTasks");
PipeTasks(
    [
        {command: "build:app", env: { NODE_ENV: "production"}}
    ]
).execute();
