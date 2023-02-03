(function global(){
    const hiddenNav = document.querySelector('.hidden');
    const hiddenBtn = document.querySelector('#hiddenbtn');
    const epicteto = document.querySelector('.epicteto')
    const epictetoBtn = document.querySelector('#epictetobtn');
    const seneca = document.querySelector('.seneca')
    const senecaBtn = document.querySelector('#senecabtn');
    const marcus = document.querySelector('.marcus')
    const marcusBtn = document.querySelector('#marcusbtn');
    let clicked = false;
    document.addEventListener('click', (e)=>{
        const el = e.target;

        if (el === hiddenBtn){
            clicked = !clicked ? clicked = true : clicked = false;
            return !clicked ? hiddenNav.classList.add('showed') : hiddenNav.classList.remove('showed');
        }
        if (el === epictetoBtn){
            clicked = !clicked ? clicked = true : clicked = false;
            !clicked ?epictetoBtn.classList.add('rotate') : epictetoBtn.classList.remove('rotate')
            return !clicked ? epicteto.style.display = 'flex' : epicteto.style.display = 'none';
        }
        if (el === senecaBtn){
            clicked = !clicked ? clicked = true : clicked = false;
            !clicked ?senecaBtn.classList.add('rotate') : senecaBtn.classList.remove('rotate')
            return !clicked ? seneca.style.display = 'flex' : seneca.style.display = 'none';
        }
        if (el === marcusBtn){
            clicked = !clicked ? clicked = true : clicked = false;
            !clicked ?marcusBtn.classList.add('rotate') : marcusBtn.classList.remove('rotate')
            return !clicked ? marcus.style.display = 'flex' : marcus.style.display = 'none';
        }

    });
})();