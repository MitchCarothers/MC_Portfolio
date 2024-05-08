let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

// matter js physics engine setup
let engine = Engine.create();

function determineWindowWidth() {
    let targetWidth = window.innerWidth / 2;
    return (targetWidth <= 1000) ? targetWidth : 1000;
}
let winWidth = determineWindowWidth();

let render = Render.create({
    element: document.getElementById("physics"),
    engine: engine,
    options: {
        width: winWidth,
        height: 600,
        wireframes: false, // disable Wireframe
        background: "url('images/grid2.png')"
      }
});

// mouse interactivity
let mouse = Mouse.create(render.canvas);
const mouseParams = {
    mouse: mouse,
    constraint: {
      stiffness: 0.05,
      damping: .8,
      length: 0,
      render: {
        visible: false,
      },
    }
};
let mouseConstraint = MouseConstraint.create(engine, mouseParams);

// disable the mouse constraint when mouse leaves the canvas :)
render.canvas.addEventListener("mouseleave", () => {
    const event = new Event("mouseup");
    mouseConstraint.mouse.element.dispatchEvent(event);
});

// object spawning system
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

function spawnPos () {
    return getRandomInt((winWidth / 8), (winWidth - (winWidth / 8)));
};

// this function primarily exists to increase readability when spawning objects
let spawn = function spawn (param) {
    try {
        switch (param.type) {
            case "rectangle":
                Composite.add(engine.world, Bodies.rectangle(param.x, param.y, param.width, param.height, { 
                    render: { 
                        sprite: { texture: param.texture, xScale: param.xScale, yScale: param.yScale } 
                    } 
                }));
                break;
            case "circle":
                Composite.add(engine.world, Bodies.circle(param.x, param.y, param.rad, { 
                    render: { 
                        sprite: { texture: param.texture, xScale: param.xScale, yScale: param.yScale } 
                    } 
                }));
                break;
            case "polygon":
                Composite.add(engine.world, Bodies.polygon(param.x, param.y, param.sides, param.rad, { 
                    render: { 
                        sprite: { texture: param.texture, xScale: param.xScale, yScale: param.yScale } 
                    } 
                }));
                break;
        };
    } catch {
        throw("Invalid spawn");
    }
};

// initial spawn
spawn({type:"rectangle", x:spawnPos(), y:100, width:80, height:112, texture:"/images/html.png", xScale:.055, yScale:.055});
spawn({type:"rectangle", x:spawnPos(), y:100, width:80, height:112, texture:"/images/css.png", xScale:.14, yScale:.14});
spawn({type:"rectangle", x:spawnPos(), y:100, width:112, height:112, texture:"/images/js.png", xScale:.509, yScale:.509});
spawn({type:"circle", x:spawnPos(), y:200, rad:58, texture:"/images/lua.png", xScale:.14, yScale:.14});
spawn({type:"circle", x:spawnPos(), y:200, rad:58, texture:"/images/py.png", xScale:.53, yScale:.53});
spawn({type:"rectangle", x:spawnPos(), y:300, width:80, height:112, texture:"/images/bat.png", xScale:.45, yScale:.45});
spawn({type:"circle", x:spawnPos(), y:300, rad:58, texture:"/images/postgre.png", xScale:.14, yScale:.14});
spawn({type:"rectangle", x:spawnPos(), y:300, width:85, height:90, texture:"/images/database.png", xScale:.2, yScale:.2});
spawn({type:"polygon", x:spawnPos(), y:400, sides:6, rad:64, texture:"/images/c_sharp.png", xScale:.06, yScale:.06});
spawn({type:"rectangle", x:spawnPos(), y:80, width:400, height:20, texture:"/images/pencil.png", xScale:.3, yScale:.3});

// skill button spawns
function addBody (event) {
    switch (event.target) {
        case skillButtons.skillWeb:
            spawn({type:"rectangle", x:spawnPos(), y:100, width:80, height:112, texture:"/images/html.png", xScale:.055, yScale:.055});
            spawn({type:"rectangle", x:spawnPos(), y:100, width:80, height:112, texture:"/images/css.png", xScale:.14, yScale:.14});
            spawn({type:"rectangle", x:spawnPos(), y:100, width:112, height:112, texture:"/images/js.png", xScale:.509, yScale:.509});
            break;
        case skillButtons.skillScript:
            spawn({type:"circle", x:spawnPos(), y:100, rad:58, texture:"/images/lua.png", xScale:.14, yScale:.14});
            spawn({type:"circle", x:spawnPos(), y:100, rad:58, texture:"/images/py.png", xScale:.53, yScale:.53});
            spawn({type:"rectangle", x:spawnPos(), y:100, width:80, height:112, texture:"/images/bat.png", xScale:.45, yScale:.45});
            break;
        case skillButtons.skillSql:
            spawn({type:"circle", x:spawnPos(), y:100, rad:58, texture:"/images/postgre.png", xScale:.14, yScale:.14});
            spawn({type:"rectangle", x:spawnPos(), y:100, width:85, height:90, texture:"/images/database.png", xScale:.2, yScale:.2});
            break;
        case skillButtons.skillCSharp:
            spawn({type:"polygon", x:spawnPos(), y:100, sides:6, rad:64, texture:"/images/c_sharp.png", xScale:.06, yScale:.06});
            break;
        case skillButtons.skillWriting:
            spawn({type:"rectangle", x:spawnPos(), y:100, width:400, height:20, texture:"/images/pencil.png", xScale:.3, yScale:.3});
            break;
    }
}

// set up skill spawn buttons
let skillButtons = {
    skillWeb: document.getElementById("skill_web"),
    skillScript: document.getElementById("skill_script"),
    skillSql: document.getElementById("skill_sql"),
    skillCSharp: document.getElementById("skill_c"),
    skillWriting: document.getElementById("skill_writing")
};

for (button in skillButtons) {
    skillButtons[button].addEventListener("click", (event) => {
        addBody(event);
    });
}

// world boundaries
let winHeight = render.options.height;
let boundary = 60;
// This looks confusing because it is, but at its core, this is just a way to dynamically adjust the boundaries
let ground = Bodies.rectangle((winWidth / 2), (winHeight + (boundary / 2)), winWidth, boundary, { isStatic: true }),
    leftWall = Bodies.rectangle(-(boundary / 2), (winHeight / 2), boundary, winHeight, { isStatic: true }),
    rightWall = Bodies.rectangle((winWidth + (boundary / 2)), (winHeight / 2), boundary, winHeight, { isStatic: true }),
    ceiling = Bodies.rectangle((winWidth / 2), -(boundary / 2), winWidth, boundary, { isStatic: true });

Composite.add(engine.world, [ mouseConstraint, ground, leftWall, rightWall, ceiling ]);

// run the renderer, create runner, then run the engine (matter js shenanigans)
Render.run(render);
let runner = Runner.create();
Runner.run(runner, engine);