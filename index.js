const cont = document.querySelector('.container')
const five = document.querySelector('.btn_one')
const all = document.querySelector('.btn_two')
const menu = document.querySelector('.btn_three')
const close = document.querySelector('.close')
const dialog = document.querySelector('.dialog')
const btn_cloth = document.querySelector('.btn_cloth')

reload(arr, cont, Product)

five.onclick = () => {
    reload(arr.slice(0,5), cont, Product)
}
all.onclick = () => {
    reload(arr, cont, Product)
}
menu.onclick = () => {
    dialog.classList.add('show')   
}
close.onclick = () => {
    dialog.classList.remove('show')
}
// btn_cloth.onclick = () => {
//     btn_cloth.classList.add('btn_active')
// }