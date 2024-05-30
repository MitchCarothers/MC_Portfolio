import { runner } from "/script/physicsEngine.js";

let isRunning;
export function initializeSim() {
    runner.enabled = false;
    isRunning = runner.enabled;
};

export function toggleRunner() {
    runner.enabled = isRunning ? false : true;
    isRunning = runner.enabled;
};