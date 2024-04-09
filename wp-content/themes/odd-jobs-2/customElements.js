class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class TwoSidedMarket extends HTMLElement {
connectedCallback(){
this.innerHTML =  '<a href=”Shop for Odd Jobs”>Shop for Odd Jobs</a> &nbsp; <a href=”Odd Jobs Registration”>Odd Jobs Registration</a>';
	}
}

customElements.define("x-twosided", TwoSidedMarket);