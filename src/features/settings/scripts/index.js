import { checkLocalStorage } from "../../../shared/scripts/checkLocalStorage.js"

const targetRadiusInput = document.querySelector("#target-radius")
const targetRadiusLabel = document.querySelector("label[for='target-radius']")

const targetBorderRadiusInput = document.querySelector("#target-border-radius")
const targetBorderRadiusLabel = document.querySelector("label[for='target-border-radius']")

const colorPickerInput = document.querySelector("#colorpicker")

const cancelButton = document.querySelector("#cancel-button")
const saveButton   = document.querySelector("#save-button")

const target = document.querySelector("#target")

window.onload = () => {

    checkLocalStorage()

    let color        = localStorage.getItem("color")
    let borderRadius = localStorage.getItem("border-radius")
    let targetRadius = localStorage.getItem("target-radius")
    
    colorPickerInput.value = color

    targetBorderRadiusInput.value     = borderRadius
    targetBorderRadiusLabel.innerText = targetBorderRadiusLabel.innerText.replace(/\((N\/A|[0-9]+)(?: px|%)\)/, `(${localStorage.getItem("border-radius")}%)`)
    
    targetRadiusInput.value     = targetRadius
    targetRadiusLabel.innerText = targetRadiusLabel.innerText.replace(/\((N\/A|[0-9]+)(?:px|%)\)/, `(${localStorage.getItem("target-radius")}px)`)

    target.style =  `background: ${color}; width: ${targetRadius*2}px; height: ${targetRadius*2}px; border-radius: ${borderRadius}%; position: absolute`
}



targetRadiusInput.addEventListener("input", (e) => {

    
    cancelButton.ariaDisabled = false
    
    let inputValue = e.target.value
    
    targetRadiusLabel.innerText = targetRadiusLabel.innerText.replace(/\((N\/A|[0-9]+)(?:px|%)\)/, `(${inputValue}px)`)


    target.style.width  = `${inputValue*2}px`
    target.style.height = `${inputValue*2}px`

})


targetBorderRadiusInput.addEventListener("input", (e) => {

    cancelButton.ariaDisabled = false

    let inputValue = e.target.value

    targetBorderRadiusLabel.innerText = targetBorderRadiusLabel.innerText.replace(/\((N\/A|[0-9]+)(?:px|%)\)/, `(${inputValue}%)`)

    target.style.borderRadius = `${inputValue}%`

})

colorPickerInput.addEventListener("input", (e) => {
    
    cancelButton.ariaDisabled = false

    target.style.background = e.target.value

})

cancelButton.addEventListener("click", () => {

    targetBorderRadiusInput.value = localStorage.getItem("border-radius")
    targetRadiusInput.value       = localStorage.getItem("target-radius")
    colorPickerInput.value        = localStorage.getItem("color")

    cancelButton.ariaDisabled = true

})

saveButton.addEventListener("click", () => {
    localStorage.setItem("target-radius", targetRadiusInput.value)
    localStorage.setItem("border-radius", targetBorderRadiusInput.value)
    localStorage.setItem("color", colorPickerInput.value)

    cancelButton.ariaDisabled = true
})
