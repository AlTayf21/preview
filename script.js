document.addEventListener("DOMContentLoaded", () => {
    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');
    const list = document.querySelectorAll('.list')


    plusButtons.forEach(plusButtons=>{
        const minus = plusButtons.parentElement.querySelector('.minus')
        const plus = plusButtons.parentElement.querySelector('.plus')
        const ans = plusButtons.parentElement.parentElement.querySelector('.ans')
        plusButtons.addEventListener('click', ()=>{
            minus.style.display = 'block'
            plus.style.display = 'none'
            ans.classList.toggle('active')
        })
    })

    minusButtons.forEach(minusButtons=>{
        const plus = minusButtons.parentElement.querySelector('.plus')
        const minus = minusButtons.parentElement.querySelector('.minus')
        const ans = minusButtons.parentElement.parentElement.querySelector('.ans')
        minusButtons.addEventListener('click', ()=>{
            plus.style.display = 'block'
            minus.style.display = 'none';
            ans.classList.toggle('active')
        })
    })
});