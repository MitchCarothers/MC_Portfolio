// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

let engine = Engine.create();

function determineWindowWidth() {
    let targetWidth = window.innerWidth / 2;
    return (targetWidth <= 1000) ? targetWidth : 1000;
}
let winWidth = determineWindowWidth();

// create a renderer
let render = Render.create({
    element: document.getElementById("main_left"),
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
    },
};
let mouseConstraint = MouseConstraint.create(engine, mouseParams);

// disables the mouse constraint when mouse leaves the canvas :)
render.canvas.addEventListener("mouseleave", () => {
    const event = new Event("mouseup")
    mouseConstraint.mouse.element.dispatchEvent(event)
});


// initialize skill buttons
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

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function spawnPos () {
    return getRandomInt((winWidth / 8), (winWidth - (winWidth / 8)))
}

function addBody (event) {
    // I don't like the way this looks but I'm not sure how else to structure this...
    switch (event.target) {
        case skillButtons.skillWeb:
            Composite.add(engine.world, Bodies.rectangle(spawnPos(), 100, 80, 112, { render: { sprite: { texture: "/images/html.png", xScale: .055, yScale: .055} } }));
            Composite.add(engine.world, Bodies.rectangle(spawnPos(), 100, 80, 112, { render: { sprite: { texture: "/images/css.png", xScale: .14, yScale: .14} } }));
            Composite.add(engine.world, Bodies.rectangle(spawnPos(), 100, 112, 112, { render: { sprite: { texture: "/images/js.png", xScale: .509, yScale: .509} } }));
            break;
        case skillButtons.skillScript:
            Composite.add(engine.world, Bodies.circle(spawnPos(), 100, 58, { render: { sprite: { texture: "/images/lua.png", xScale: .14, yScale: .14} } }));
            Composite.add(engine.world, Bodies.circle(spawnPos(), 100, 58, { render: { sprite: { texture: "/images/py.png", xScale: .5, yScale: .5} } }));
            Composite.add(engine.world, Bodies.rectangle(spawnPos(), 100, 80, 112, { render: { sprite: { texture: "/images/bat.png", xScale: .45, yScale: .45} } }));
            break;
        case skillButtons.skillSql:
            Composite.add(engine.world, Bodies.circle(spawnPos(), 100, 58, { render: { sprite: { texture: "/images/postgre.png", xScale: .14, yScale: .14} } }));
            Composite.add(engine.world, Bodies.rectangle(spawnPos(), 100, 85, 90, { render: { sprite: { texture: "/images/database.png", xScale: .2, yScale: .2} } }));
            break;
        case skillButtons.skillCSharp:
            Composite.add(engine.world, Bodies.polygon(spawnPos(), 100, 6, 64, { render: { sprite: { texture: "/images/c_sharp.png", xScale: .06, yScale: .06} } }))
            break;
        case skillButtons.skillWriting:
            Composite.add(engine.world, Bodies.rectangle(spawnPos(), 100, 400, 20, { render: { sprite: { texture: "/images/pencil.png", xScale: .3, yScale: .3} } }));
            break;
    }
}

// boundaries
let winHeight = render.options.height;
let boundary = 60;
// This looks confusing because it is, but at its core, this is just a way to dynamically adjust the boundaries
let ground = Bodies.rectangle((winWidth / 2), (winHeight + (boundary / 2)), winWidth, boundary, { isStatic: true }),
    leftWall = Bodies.rectangle(-(boundary / 2), (winHeight / 2), boundary, winHeight, { isStatic: true }),
    rightWall = Bodies.rectangle((winWidth + (boundary / 2)), (winHeight / 2), boundary, winHeight, { isStatic: true }),
    ceiling = Bodies.rectangle((winWidth / 2), -(boundary / 2), winWidth, boundary, { isStatic: true });

// add boundaries
Composite.add(engine.world, [ mouseConstraint, ground, leftWall, rightWall, ceiling ]);

// run the renderer
Render.run(render);

// create runner
let runner = Runner.create();

// run the engine
Runner.run(runner, engine);