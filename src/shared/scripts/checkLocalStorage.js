import { defaults } from "../../defaults.js"
export function checkLocalStorage() {
    if (!localStorage.getItem("color")) {
        localStorage.setItem("color", defaults.color)
    }
    if (!localStorage.getItem("border-radius")) {
        localStorage.setItem("border-radius", defaults.targetBorderRadius)
    }
    if (!localStorage.getItem("target-radius")) {
        localStorage.setItem("target-radius", defaults.targetRadius)
    }
}