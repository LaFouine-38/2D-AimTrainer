import { defaults } from "../../../defaults.js"
import { checkLocalStorage } from "../../../shared/scripts/checkLocalStorage.js"
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

window.onload = () => {

    checkLocalStorage()

    let color = localStorage.getItem("color")
    let borderRadius = localStorage.getItem("border-radius")
    let targetRadius = localStorage.getItem("target-radius")

    target.style =  `background: ${color}; width: ${targetRadius*2}px; height: ${targetRadius*2}px; border-radius: ${borderRadius}%; position: absolute`
    target.style.top = `${getRandomCoords(e.target)[1]}px`; target.style.left = `${getRandomCoords(e.target)[0]}px`;
}


target.addEventListener("mouseover", (e) => {
    target.style.top = `${getRandomCoords(e.target)[1]}px`; target.style.left = `${getRandomCoords(e.target)[0]}px`;
})