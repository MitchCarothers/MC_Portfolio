import { quickSpawn } from "./physicsSpawn.js";

let buttons;
export function addSpawnButtons() {
    buttons = getButtons();
    for (let button in buttons) {
        buttons[button].addEventListener("click", (event) => {
            spawnObjects(event);
        });
    };
};

function spawnObjects(event) {
    switch (event.target) {
        case buttons.web:
            quickSpawn("html");
            quickSpawn("css");
            quickSpawn("js");
            break;
        case buttons.script:
            quickSpawn("py");
            quickSpawn("lua");
            quickSpawn("bat");
            break;
        case buttons.sql:
            quickSpawn("postgre");
            quickSpawn("db");
            break;
        case buttons.cSharp:
            quickSpawn("c_sharp");
            break;
        case buttons.writing:
            quickSpawn("pencil");
            break;
    };
};

function getButtons() {
    let returnValue = {
        web: document.getElementById("skill_web"),
        script: document.getElementById("skill_script"),
        sql: document.getElementById("skill_sql"),
        cSharp: document.getElementById("skill_c"),
        writing: document.getElementById("skill_writing")
    };
    return returnValue;
};