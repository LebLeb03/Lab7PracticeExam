class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);


class TwoSidedMarket extends HTMLElement{
	connectedCallback(){
this.innerHTML ='<a href="Odd Job Form">odd-job-form</a>&nbsp;<a href="shop-for-odd-jobs">Shop for Odd Jobs</a>' ;
}


}

customElements.define("x-twosided", TwoSidedMarket)