let share = document.querySelector('.share')
let toolTip = document.querySelector('.shareit')

document.onclick = (e)=>{
    toolTip.classList.remove('show')
    if (e.target == share || Array.from(share.children).includes(e.target)){
        toolTip.classList.add('show')
    }
}