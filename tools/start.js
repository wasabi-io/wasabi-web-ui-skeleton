const PipeTasks = require("./common/PipeTasks");
PipeTasks(
    [
        {command: "start:mock"},
        {command: "start:dev"}
    ]
).execute();
