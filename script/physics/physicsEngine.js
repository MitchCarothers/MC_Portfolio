let Engine = Matter.Engine;
let Render = Matter.Render;
let Runner = Matter.Runner;

export let engine;
export let render;
export let runner;
export function windowWidth() {
    let minWidth = 500;
    let widthDivisor = 1.85;
    let targetWidth = window.innerWidth / widthDivisor;
    return (targetWidth >= minWidth) ? targetWidth : minWidth;
};
export function runEngine() {
    engine = Engine.create();
    createRender();
    runner = Runner.create();
    Runner.run(runner, engine);
};

function createRender() {
    let element = document.getElementById("physics");
    let width = windowWidth();
    let height = 600;
    let wireframes = false;
    let background = 'url(/images/grid2.png)';
    render = Render.create({
        element: element,
        engine: engine,
        options: {
            width: width,
            height: height,
            wireframes: wireframes,
            background: background,
          }
    });
    Render.run(render);
};