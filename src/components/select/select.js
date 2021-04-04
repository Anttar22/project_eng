import './select.scss'

export class Select {
    constructor(selector, options) {
        this.$elem = document.querySelector(selector)
        this.options = options

        this.#setup()
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$elem.addEventListener('click', this.clickHandler)
    }

    clickHandler(event) {
        const { type } = event.target.dataset

        if (type === 'input') {
            this.toggle()
        }
    }

    get isOpen() {
        return this.$elem.classList.contains('open')
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        this.$elem.classList.add('open')
    }
    close() {
        this.$elem.classList.remove('open')
    }
}