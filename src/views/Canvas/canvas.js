import React, { Component } from 'react'

export default class canvas extends Component {
    componentDidMount() {
        var c = document.getElementById("myCanvas");
        var cxt = c.getContext("2d");
        var draw = function (startx, starty, endx, endy) {
            cxt.moveTo(startx, starty);
            cxt.lineTo(endx, endy);
            cxt.stroke();
        }

        for (let i = 1; i <= 20; i++) {
            draw(0, 100, i * 100, 0)
            if (i * 100 > window.innerWidth) {
                break
            }
        }
        for (let i = 1; i < 20; i++) {
            if (i * 100 > window.innerHeight) {
                break
            }
            draw(0, 100, window.innerWidth, i * 100)

        }
        for (let i = 1; i < 20; i++) {
            if (i * 100 > window.innerWidth) {
                break
            }
            draw(0, 100, i * 100, window.innerHeight)

        }
    }
    render() {
        return (
            <>
                <canvas id="myCanvas" width={window.innerWidth - 3} height={window.innerHeight - 3} style={{ display: 'block', border: "1px solid #000" }}></canvas>
            </>
        )
    }
}
