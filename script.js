(function global(){
    const hiddenNav = document.querySelector('.hidden')
    const hiddenBtn = document.querySelector('#hiddenbtn')
    const whatBtn = document.querySelector('.what')
    let clicked = false
    document.addEventListener('click', (e)=>{
        const el = e.target

        if (el === hiddenBtn){
            clicked = !clicked ? clicked = true : clicked = false
            return !clicked ? hiddenNav.classList.add('showed') : hiddenNav.classList.remove('showed')
        }
    })
})();