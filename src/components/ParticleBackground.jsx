import React, { Component } from "react";
import ParticlesBg from "particles-bg";

export class ParticleBackground extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    let config = {
      num: [2, 7],
      rps: 0.9, // Adjust this value to slow down the animation
      radius: [1, 40],
      life: [1.5, 3],
      v: [1, 1],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      f: [1, -1], // force
      // g: 5,    // gravity
      // num: [4, 7],
      // rps: 2,
      // radius: [5, 40],
      // life: [1.5, 3],
      // v: [2, 3],
      // tha: [-40, 40],
      // // body: "./img/icon.png", // Whether to render pictures
      // rotate: [0, 20],
      // alpha: [0.6, 0],
      // scale: [1, 0.1],
      // position: "center", // all or center or {x:1,y:1,width:100,height:100}
      // color: ["random", "#ff0000"],
      // cross: "dead", // cross or bround
      // random: 15,  // or null,

      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }     // random: 15
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }

    return (
      <div>
        {/* Particle Types: */}
        {/*   "ball" */}
        {/*   "lines" */}
        {/*   "thick" */}
        {/*   "circle" */}
        {/*   "cobweb" */}
        {/*   "polygon" */}
        {/*   "square" */}
        {/*   "tadpole" */}
        {/*   "fountain" */}
        {/*   "random" */}
        {/*   "custom" */}
        <ParticlesBg type="custom" config={config} bg={true} />
        {/* <ParticlesBg num={20} type="square" color="#000000" bg={true} /> */}
      </div>
    );
  }
}


