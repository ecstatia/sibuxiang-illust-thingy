import * as PIXI from 'pixi.js';
import 'pixi-spine';

let app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
document.body.appendChild(app.view);

console.log(app);
console.log(document.body);
console.log(PIXI);

let spine; // Declare spine before loading it

PIXI.Assets.load("https://ecstatia.github.io/spine/CLEAN-SIBUXIANG ILLUST.json"").then((spineData) => {
    spine = new PIXI.spine.Spine(spineData);
    app.stage.addChild(spine);
});

// Make sure event listener only runs after spine is loaded
document.addEventListener("mousemove", (e) => {
    if (spine) { // Ensure spine is loaded before modifying it
        let xOffset = (e.clientX / window.innerWidth - 0.5) * 50;
        let yOffset = (e.clientY / window.innerHeight - 0.5) * 50;

        let perspectiveBone = spine.skeleton.findBone("PerspectiveController");
        perspectiveBone.x += xOffset;
        perspectiveBone.y += yOffset;
    }
});