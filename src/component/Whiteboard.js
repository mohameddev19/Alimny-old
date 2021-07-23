import React, { Component, useEffect, useState } from 'react';
import {BoardNav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';
export function Whiteboard(){

    let canvas;
    let color_picker;
    let clear_btn;
    let range_btn;
    let shapes_btn;
    let rbtn;
    let pages;
    let sbtn;
    let rect;


    let context;
    let canvas_top;
    let canvas_left;
    let start_background_color;
    let draw_color = "black";
    let celar_color = "#fafafa";
    let draw_width = 2;
    let is_drawing = false;
    let is_clear = false;
    let prashing = false;
    let writting = false;
    let restore_array = [];
    let index = restore_array.length - 1;
    let canvas_num = 0;
    let page = [];
    let shape;
    let shape_radius = false;
    let draw_shape = false;
    let xpoint = 200;
    let ypoint = 200;
    let radius = 100;
    let color = draw_color;
    let shape_height = 100;
    let shape_width = 100;
    let line_width = 100;
    let line_height = 200;
    let is_write = false;
    let word = "";
    function StartDraw(){
        remove();
    }
    function remove(){
        clear_btn = document.getElementById("clear_btn");
        clear_btn.style.display = "none";
        range_btn = document.getElementById("range");
        range_btn.style.display = "none";
        shapes_btn = document.getElementById("shape");
        shapes_btn.style.display = "none";
    }
    function lock(){
        draw_color = "rgba(0,0,0,0)";
        word = '';
    }
    function colors(){
        remove();
        is_write = false;
        draw_color = "black";
        is_clear = false;
        draw_color = color_picker.value;
    }
    function colorInput(e){
        word = '';
        draw_color = e.target.value;
    }
    function clear_fun(e){
        is_write = false;
        word = '';
        let crouser = document.getElementById("crouser");
        clear_btn = document.getElementById("clear_btn");
        draw_color = celar_color;
        clear_btn.style.display = "inline-block";
        clear_btn.style.left = "calc(50% - 1.5rem)";
        clear_btn.style.bottom = "calc(2rem + 56px)";
    }
    function clear_canvas(){
        remove();
        context.fillStyle = "#fafafa";
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(0, 0, canvas.width, canvas.height);
        //restore_array = [];
        //index = -1;
    }
    function range(e){
        word = '';
        range_btn = document.getElementById("range");
        rbtn = document.getElementById("size");
        range_btn.style.display = "inline-block";
        range_btn.style.left = "calc(50% - 1.5rem)";
        range_btn.style.bottom = "calc(2rem + 66px)";
    }
    function fontWidthInput(e){
        word = '';
        draw_width = e.target.value;
    }
    function undo_last(){
        if(index == 0){
            clear_canvas();
        }
        else{
            index -= 1;
            context.putImageData(restore_array[index], 0, 0);
        }
    }
    function undo_next(){
        is_write = false;
        if(index + 1 <= restore_array.length){
            context.putImageData(restore_array[index], 0, 0);
            index += 1;
        }
    }
    function to_page(){
        word = '';
        let l = document.getElementById("pages").value;
        context.putImageData(page[l], 0, 0);
    }
    function save_page(){
        word = '';
        let i = document.getElementById("pages").value;
        page[i] = context.getImageData(0, 0, canvas.width, canvas.height);
    }
    function add_page(){
        is_write = false;
        word = '';
        pages = document.getElementById("pages");
        canvas_num += 1;
        page.push(context.getImageData(0, 0, canvas.width, canvas.height));
        let pindex = page.length;
        clear_canvas();
        restore_array = [];
        index = restore_array.length;
        pages.innerHTML += '<option value="'+canvas_num+'" onclick="to_page('+canvas_num+');" selected> '+canvas_num+'';
    }
    function shape_btn(){
        is_write = false;
        word = '';
        is_drawing = false;
        shapes_btn = document.getElementById("shape");
        sbtn = document.getElementById("shaps");
        draw_color = color_picker.value;
        shapes_btn.style.display = "inline-block";
        shapes_btn.style.left = "calc(50% - 3rem)";
        shapes_btn.style.bottom = "calc(2rem + 2.2rem)";
    }
    function add_shape(event){
        remove();
        is_drawing = false;
        shapes_btn = document.getElementById("shape");
        shape = document.getElementById("shape").value;
        if(shapes_btn.value == 1){
            draw_shape = true;
            xpoint = xpoint;
            ypoint = ypoint;
            radius = shape_height;
            color = draw_color;
            context.beginPath();
            context.arc(xpoint, ypoint, radius, 0, Math.PI * 2, false);
            context.strokeStyle = color;
            context.lineWidth = draw_width;
            context.stroke();
            context.closePath();
            restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
            index = restore_array.length - 1;
        }
        else if(shapes_btn.value == 2){
            draw_shape = true;
            let pointx = xpoint - (shape_width / 2);
            let pointy = ypoint - (shape_height / 2);
            shape_height = shape_height;
            shape_width = shape_width;
            color = draw_color;
            context.lineWidth = draw_width;
            context.strokeStyle = draw_color;
            context.strokeRect(pointx, pointy, shape_height, shape_width);
            restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
            index = restore_array.length - 1;
        }
        else if(shapes_btn.value == 3){
            draw_shape = true;
            xpoint = xpoint;
            ypoint = ypoint;
            shape_height = shape_height;
            shape_width = shape_width;
            color = draw_color;
            context.lineWidth = draw_width;
            context.strokeStyle = draw_color;
            context.beginPath();
            context.moveTo(xpoint,ypoint);
            context.lineTo(line_width,line_height);
            context.closePath();
            context.stroke();
            restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
            index = restore_array.length - 1;
        }
    }
    function clickCircle(xmouse,ymouse){
        console.log("smoe thing wrong!");
        undo_last();
    }
    function add_word(){
        is_write = true;
        context.font = ""+ draw_width +"px Arial" ;
        context.lineWidth = draw_width;
        context.fillStyle = color_picker.value;
        context.fillText(word, xpoint, ypoint);
        restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
        index = restore_array.length - 1;
    }
    function add_prash(){
        draw_color = color_picker.value;
        is_write = false;
        word = '';
    }
    function clickCircle(xmouse,ymouse){
        undo_last();
    }
    
    
    useEffect(()=>{
        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        start_background_color = "fafafa";
        context.fillStyle = start_background_color;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas_top = canvas.offsetTop;
        canvas_left = canvas.offsetLeft;
        color_picker = document.getElementById("color");
        range_btn = document.getElementById("range");
        range_btn.value = 2;
        setTimeout(() => {
            const loadBoard = document.getElementById("loadBoard");
            loadBoard.style.display = "none";
        }, 2000);

        
        canvas.addEventListener("touchstart", start, false);
        canvas.addEventListener("touchmove", draw, false);
        canvas.addEventListener("mousedown", start, false);
        canvas.addEventListener("mousemove", draw, false);

        canvas.addEventListener("touchend", stop, false);
        canvas.addEventListener("mouseup", stop, false);
        canvas.addEventListener("mouseout", stop, false);
        
        function start(event){
            if(!draw_shape){
                is_drawing = true;
                context.beginPath();
                context.moveTo(event.clientX - canvas_left,event.clientY - canvas_top);
                event.preventDefault();
            }
        }
        function draw(event){
            if(is_drawing){
                context.lineTo(event.clientX - canvas_left,event.clientY - canvas_top);
                context.strokeStyle = draw_color;
                context.lineWidth = draw_width;
                context.lineCap = "round";
                context.lineJoin = "round";
                context.stroke();
            }
            event.preventDefault();
        }

        function stop(event){
            if(is_drawing){
                context.stroke();
                context.closePath();
                is_drawing = false;
            }
            event.preventDefault();
            if(event.type != 'mouseout'){
                restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
                index = restore_array.length - 1;
            }
        }

        canvas.onclick = function(event){
            if(draw_shape){
                xpoint = event.clientX;
                ypoint = event.clientY;
                add_shape();
            }
            else if(is_write){
                xpoint = event.clientX;
                ypoint = event.clientY;
                add_word();
            }
        }
        canvas.addEventListener("mousedown", (event) =>{
            rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            if(event.button == 0 && draw_shape || is_write){
                is_drawing = false;
                clickCircle(x, y);
            }
        });
        canvas.addEventListener("wheel", (event) =>{

            shapes_btn = document.getElementById("shape");

            if(shapes_btn.value == 1){
                let last = restore_array.length - 1;
                if(event.deltaY > 0 && draw_shape){
                    context.putImageData(restore_array[last], 0, 0);
                    shape_height += 3;
                    xpoint = event.clientX;
                    ypoint = event.clientY;
                    radius = shape_height;
                    color = draw_color;
                    context.beginPath();
                    context.arc(xpoint, ypoint, radius, 0, Math.PI * 2, false);
                    context.strokeStyle = color;
                    context.lineWidth = draw_width;
                    context.stroke();
                    context.closePath();
                }
                else if(event.deltaY < 0 && draw_shape){
                    context.putImageData(restore_array[last], 0, 0);
                    shape_height -= 3;
                    xpoint = event.clientX;
                    ypoint = event.clientY;
                    radius = shape_height;
                    color = draw_color;
                    context.beginPath();
                    context.arc(xpoint, ypoint, radius, 0, Math.PI * 2, false);
                    context.strokeStyle = color;
                    context.lineWidth = draw_width;
                    context.stroke();
                    context.closePath();
                }
            }
            if(shapes_btn.value == 2){
                let last = restore_array.length - 1;
                if(event.deltaY > 0 && draw_shape){
                    context.putImageData(restore_array[last], 0, 0);
                    shape_height += 3;
                    shape_width += 3;
                    xpoint = event.clientX - (shape_width / 2);
                    ypoint = event.clientY - (shape_height / 2);
                    shape_height = shape_height;
                    shape_width = shape_width;
                    color = draw_color;
                    context.lineWidth = draw_width;
                    context.strokeStyle = draw_color;
                    context.strokeRect(xpoint, ypoint, shape_height, shape_width);
                }
                else if(event.deltaY < 0 && draw_shape){
                    context.putImageData(restore_array[last], 0, 0);
                    shape_height -= 3;
                    shape_width -= 3;
                    xpoint = event.clientX - (shape_width / 2);
                    ypoint = event.clientY - (shape_height / 2);
                    shape_height = shape_height;
                    shape_width = shape_width;
                    color = draw_color;
                    context.lineWidth = draw_width;
                    context.strokeStyle = draw_color;
                    context.strokeRect(xpoint, ypoint, shape_height, shape_width);
                }
            }
            if(shapes_btn.value == 3){
                let last = restore_array.length - 1;
                if(event.deltaY > 0 && draw_shape){
                    context.putImageData(restore_array[last], 0, 0);
                    color = draw_color;
                    context.lineWidth = draw_width;
                    context.strokeStyle = draw_color;
                    context.beginPath();
                    context.moveTo(xpoint,ypoint);
                    context.lineTo(event.clientX,event.clientY);
                    context.closePath();
                    context.stroke();
                    line_width = xpoint;
                    line_height = ypoint;
                }
                else if(event.deltaY < 0 && draw_shape){
                    context.putImageData(restore_array[last], 0, 0);
                    color = draw_color;
                    context.lineWidth = draw_width;
                    context.strokeStyle = draw_color;
                    context.beginPath();
                    context.moveTo(xpoint,ypoint);
                    context.lineTo(event.clientX,event.clientY);
                    context.closePath();
                    context.stroke();
                    line_width = xpoint;
                    line_height = ypoint;
                }
            }
        });
        window.addEventListener("keydown", (z) =>{
            if(is_write){
                is_drawing = false;
                let last = restore_array.length - 1;
                context.putImageData(restore_array[last - 1], 0, 0);
                if(z.key == "Backspace"){
                    let l = word.length - 1;
                    let back_word = '';
                    for(let i = 0; i < l; i++){
                        back_word +=  word[i];
                    }
                    word = back_word;
                }
                else if( z.key != "Tab" && z.key != "CapsLock" && z.key != "Shift" && z.key != "Control"){
                    word += z.key;
                }
                context.font = ""+ draw_width +"px Arial" ;
                context.lineWidth = draw_width;
                context.fillStyle = draw_color;
                context.fillText(word, xpoint, ypoint);
            }
            
        });

        window.oncontextmenu = (e) => {
            e.preventDefault();
        }

    }, []);
    return<div>
        <BoardNav className="bordnav" />
        <div className="page-body board-body">
            <div id="loadBoard" className="load-board">
                Loading now please waite
            </div>
            <div id="board" className="page-div board-div row justify-content-center">
                <canvas onMouseDown={StartDraw} id="canvas"></canvas>
                <div className="tools-div col-12 row justify-content-center">
                    <div className="tools col-9 row justify-content-between">
                        <div id=""><img onClick={lock} id="cwrite" draggable="false" src="./images/padlock.png" /></div>
                        <div id=""><img onClick={add_word} id="write" draggable="false" src="./images/pen.png" /></div>
                        <div id=""><img onClick={add_prash} id="prash" draggable="false" src="./images/paintbrush.png" /></div>
                        <div id=""><img onClick={range} id="size" draggable="false" src="./images/reduce.png" /></div>
                        <div id=""><img onClick={shape_btn} id="shaps" draggable="false" src="./images/shape.png" /></div>
                        <div id=""><img onClick={clear_fun} id="crouser" draggable="false" src="./images/eraser.png" /></div>
                        <div id=""><img onClick={""} id="img" draggable="false" src="./images/image.png" /></div>
                        <div id=""><img onClick={""} id="box" draggable="false" src="./images/writing.png" /></div>
                        <div id=""><img onClick={""} id="time" draggable="false" src="./images/temporary-offer.png" /></div>
                        <div id=""><img onClick={add_page} id="zoomi" draggable="false" src="./images/plus.png" /></div>
                        <div id=""><input onClick={colors} id="color" type="color" onInput={colorInput} /></div>
                        <div id=""><img onClick={undo_next} id="forword" draggable="false" src="./images/redo.png" /></div>
                        <div id=""><img onClick={undo_last} id="backword" draggable="false" src="./images/undo.png" /></div>
                    </div>
                </div>
                <input id="clear_btn" type="button" value="clear" onClick={clear_canvas} />
                <input id="range" type="range" min="1" max="100" onInput={fontWidthInput} />
                <select id="pages" SIZE="1" onClick={save_page} onChange={to_page}>
                        <option value="0" onClick=""> 0 </option>
                    </select>
                <select id="shape" SIZE="3" onClick={add_shape}>
                        <option value="1" onClick=""> circle </option>
                        <option value="2" onClick=""> square </option>
                        <option value="3" onClick=""> line </option>
                    </select>
                <div id="shape_bound">
                        <label>width</label>
                        <input id="shape_width" type="number" />
                        <label id="shape_radius">height</label>
                        <input id="shape_height" type="number" />
                        <button id="bound_hidde">ok</button>
                </div>
            </div>
        </div>
    </div>
    }

/*
--this will be the return for all page function
{islogged
        ?this componant
        :<div><Login /></div>
        }
        <Footer />
*/