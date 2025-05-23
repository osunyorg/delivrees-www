class PageColor {
    constructor () {
        this.colors = ["#5AFFB3", "#57BCBC", "#FF46B1", "#F14B28"];
        
        this.listen();
    }

    listen () {
        this.randomColor = Math.floor(Math.random() * this.colors.length);
        this.colorVariable = this.colors[this.randomColor];

        this.setColorVariable();
    }
    setColorVariable () {
        document.documentElement.style.setProperty("--color-accent", this.colorVariable);
    }
}

export default new PageColor();