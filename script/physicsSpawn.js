import { getRandomInt } from './math.js';
import { windowWidth, engine } from './physicsEngine.js';
import { isPaused } from './physicsPause.js';
import spawnObj from '/json/spawns.json' with { type: 'json' };
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;

export function quickSpawn(objName) {
    let newSpawn = spawn(compileSpawnObject(spawnObj[objName]));
    checkIsPaused(newSpawn);
    return newSpawn;
};

export function initialSpawn() {
    for (let obj in spawnObj) {
        quickSpawn(obj);
    };
};

function calcSpawnPos(xPadding, yRange) {
    let winWidth = windowWidth();
    let defaultPadding = 200;
    let defaultRange = {min: 10, max: 200};
    let returnValue;
    if (xPadding && yRange) {
        returnValue = { x: getRandomInt(xPadding, (winWidth - xPadding)), y: getRandomInt(yRange.min, yRange.max) };
    } else if (!xPadding && !yRange) {
        returnValue = { 
            x: getRandomInt(defaultPadding, (winWidth - defaultPadding)), 
            y: getRandomInt(defaultRange.min, defaultRange.max) 
        };
    }
    return returnValue;
};

/// Expected parameters are { type: string, x: int, y: int, width: int, height: int, texture: string, xScale: float, yScale: float }
function spawn(param) {
    let body;
    switch (param.type) {
        case "rectangle":
            body = Bodies.rectangle(param.x, param.y, param.width, param.height, { 
                render: { 
                    sprite: { texture: param.texture, xScale: param.textureScale, yScale: param.textureScale } 
                } 
            });
            break;
        case "circle":
            body = Bodies.circle(param.x, param.y, param.rad, { 
                render: { 
                    sprite: { texture: param.texture, xScale: param.textureScale, yScale: param.textureScale } 
                } 
            });
            break;
        case "polygon":
            body = Bodies.polygon(param.x, param.y, param.sides, param.rad, { 
                render: { 
                    sprite: { texture: param.texture, xScale: param.textureScale, yScale: param.textureScale } 
                } 
            });
            break;
    };
    Composite.add(engine.world, body);
    return body;
};

function compileSpawnObject(obj) {
    let spawnPos = calcSpawnPos();
    let returnValue;
    switch (obj.type) {
        case "rectangle":
            returnValue = {type:obj.type, x:spawnPos.x, y:spawnPos.y, width:obj.width, height:obj.height, texture:obj.texture, textureScale:obj.textureScale};
            break;
        case "circle":
            returnValue = {type:obj.type, x:spawnPos.x, y:spawnPos.y, rad:obj.rad, texture:obj.texture, textureScale:obj.textureScale};
            break;
        case "polygon":
            returnValue = {type:obj.type, x:spawnPos.x, y:spawnPos.y, sides:obj.sides, rad:obj.rad, texture:obj.texture, textureScale:obj.textureScale};
            break;
    };
    return returnValue;
};

// checks if the simulation is paused
function checkIsPaused(obj) {
    if (isPaused) {
        obj.isStatic = true;
    };
};