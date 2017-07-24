import Application from "./Application";
import * as React from "react";

const Settings = require("./settings.json");

Application.build({
    container: document.getElementById(Settings.container),
    api: Settings.api,
    renderer: System.import("./Renderer")
});





