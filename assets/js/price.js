let price = document.querySelectorAll(".price");
let priceList = document.querySelectorAll(".price__tab--list a");

for(let i = 0; priceList.length > i; i++) {
    let target = priceList[i];
    
    target.addEventListener("click", (e) => {
        e.preventDefault();
        if(target.innerText === "Family") {
            clearActiveClass();
            target.classList.add('active');
            familyPrice();
        }
        if(target.innerText === "Wedding") {
            clearActiveClass();
            target.classList.add('active');
            weddingPrice();
        }
        if(target.innerText === "Business") {
            clearActiveClass();
            target.classList.add('active');
            businessPrice();
        }
    }, false);
}

function clearActiveClass() {
    for(let i = 0; priceList.length > i; i++) {
        let target = priceList[i];
        target.classList.remove('active');
    }
}
function familyPrice() {
    for(let i = 0; price.length > i; i++) {
        let dataFamilyPrice = price[i].dataset.priceFamily;

        price[i].querySelector('.amount').innerText = '$' + dataFamilyPrice;
    }
}
function weddingPrice() {
    for(let i = 0; price.length > i; i++) {
        let dataWeddingPrice = price[i].dataset.priceWedding;

        price[i].querySelector('.amount').innerText = '$' + dataWeddingPrice;
    }
}
function businessPrice() {
    for(let i = 0; price.length > i; i++) {
        let dataBusinessPrice = price[i].dataset.priceBusiness;

        price[i].querySelector('.amount').innerText = '$' + dataBusinessPrice;
    }
}