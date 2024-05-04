const targetRadius = document.querySelector("#target-radius")
const targetBorderRadius = document.querySelector("#target-border-radius")
const colorPicker = document.querySelector("#colorpicker")

const target = document.querySelector("#target")

window.onload = () => {
    let color = localStorage.getItem("color")
    let borderRadius = localStorage.getItem("border-radius")
    let targetRadius = localStorage.getItem("target-radius")

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



targetRadius.addEventListener("input", (e) => {

    inputValue = e.target.value

    target.style.width = `${inputValue*2}px`
    target.style.height = `${inputValue*2}px`

    localStorage.setItem("target-radius", e.target.value)
})


targetBorderRadius.addEventListener("input", (e) => {

    inputValue = e.target.value

    target.style.borderRadius = `${inputValue}%`

    localStorage.setItem("border-radius", e.target.value)
})

colorPicker.addEventListener("input", (e) => {
    
    target.style.background = e.target.value

    localStorage.setItem("color", e.target.value)
})
