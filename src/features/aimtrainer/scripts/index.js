import { defaults } from "../../../defaults.js"
window.onload = () => {
    const target = document.querySelector("#target")

    let color = localStorage.getItem("color")
    let borderRadius = localStorage.getItem("border-radius")
    let targetRadius = localStorage.getItem("target-radius")
    console.log(color, borderRadius, targetRadius)

    
    if(color === null) {
        localStorage.setItem("color", defaults.color)
        color = localStorage.getItem("color")
    }
    if(borderRadius === null) {
        localStorage.setItem("border-radius", defaults.targetBorderRadius)
        borderRadius = localStorage.getItem("border-radius")
    }
    if(targetRadius === null) {
        localStorage.setItem("target-radius", defaults.targetRadius)
        targetRadius = localStorage.getItem("target-radius")
    }

    target.style =  `background: ${color}; width: ${targetRadius*2}px; height: ${targetRadius*2}px; border-radius: ${borderRadius}%; position: absolute`
}

const target = document.querySelector("#target")
 
/**
 * 
 * @param {HTMLElement} target 
 * @returns 
 */
function getRandomCoords(target) {
    const targetWidth = parseInt(target.style.width.match(/^\d+/)[0]);
    const targetHeight = parseInt(target.style.height.match(/^\d+/)[0]);
    const x = Math.floor(Math.random() * (window.innerWidth - targetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - targetHeight));
    return [Math.max(0, x), Math.max(0, y)];
}


target.addEventListener("mouseover", (e) => {
    console.log("hovered")

    target.style.top = `${getRandomCoords(e.target)[1]}px`; target.style.left = `${getRandomCoords(e.target)[0]}px`;
})