import './header.scss'

const header = function () {
    const header = document.querySelector('#header')
    header.classList.add('header')

    header.insertAdjacentHTML('afterbegin', `
     <button class="burger">
            <span class="burger__inner">
                <span class="burger__line"></span>
            </span>
        </button>

        <div class="header__bars">
            <div class="header__bars-icon"><span>i</span></div>
            <div class="header__bars-icon"><span>i</span></div>
            <div class="header__bars-icon"><span>i</span></div>
        </div>
    `)
}


header()