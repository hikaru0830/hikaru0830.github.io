//slider 
if($(window).width() < 768){
    $('.owl-carousel').owlCarousel({
        center: true,
        items:5,
        loop:true,
        margin:10,
        merge:true,
        responsive:{
            0: {
                items: 1,
                nav: true,
                loop: true,
                mergeFit:true
            },
            768: {
                items: 1,
                nav: true,
                loop: true,
                mergeFit:true
            },
            1200: {
                items: 1,
                nav: true,
                loop: true,
                mergeFit:true
            },
        }
    });
    // $each($('.owl-carousel').$('.item'), function(index, value){
    //     value.datase.merge = 6
    // })
}else{
    $('.owl-carousel').owlCarousel({
        center: true,
        items:5,
        loop:true,
        margin:10,
        merge:true,
        responsive:{
            0: {
                nav: true,
                loop: true,
                // mergeFit:true
            },
            768: {
                nav: true,
                loop: true,
                // mergeFit:true
            },
            1200: {
                nav: true,
                loop: true,
                // mergeFit:true
            },
        }
    });
    // $.each($('.owl-carousel').$('.item'), function(index, value){
    //     value.datase.merge = 3
    // })

}

//商品說明nav


//宣告
let planContainer = document.querySelector(".product-plan")
let planNav = document.querySelector(".product-detail-nav")
let ul = document.querySelector(".detail-anchor")
let header = document.querySelector("header")
let isPress = false;
let cursorX, offsetRight;
let detailContent = document.querySelector(".product-detail-content")
let detailDivs = detailContent.querySelectorAll(".product-detail-content>div")
let anchor = document.querySelector(".detail-anchor")
let anchorLis = anchor.querySelectorAll("li")
let favorites = document.querySelector(".favorites>i")
let choosePlanBtn = document.querySelectorAll(".price-and-choose>button")
let isFavorite = false

//DOM
//#region ========== 監聽 ==========

//手機版
if(window.innerWidth < 768){
    //商品說明錨點(手機版)
    window.addEventListener("scroll", (e) => {
        let windowY = window.scrollY;
        let planTop = planContainer.offsetTop;
        if(windowY + 60 >= planTop){
            planNav.style.top = "0px";
            header.style.top = "-60px";
        }else{
            planNav.style.top = "-60px";
            header.style.top = "0px";
        }
    })
    planNav.addEventListener("touchstart",function(e){
        isPress = true;
        cursorX = e.touches[0].clientX - ul.offsetLeft
    })
    planNav.addEventListener("touchmove",function(e){
        if(!isPress) return;
        offsetRight = (ul.offsetWidth - window.innerWidth + ul.offsetLeft) * -1;
        if(ul.offsetLeft <= 0 && offsetRight <= 0){
            let x = e.touches[0].clientX
            ul.style.left = `${x- cursorX}px`}
    })
    planNav.addEventListener("touchend",function(){
        isPress = false;
        if(ul.offsetLeft > 0){
            ul.style.left = "0px"
        }else if(offsetRight > 0){
            ul.style.left = `${ul.offsetLeft + offsetRight}px`
        }
    })


}

// >1200px 電腦版
if(window.innerWidth >= 768){
    //選擇方案展開日期查詢
    choosePlanBtn.forEach((btn, index) => {
        btn.addEventListener("click", function(){
            let selectDetails = document.querySelectorAll(".select-detail")
            if(btn.dataset.open == "false"){
                Array.from(choosePlanBtn).map(b => b.dataset.open = "false");
                Array.from(choosePlanBtn).map(b => b.innerText = "選擇");
                Array.from(selectDetails).map( s => s.style.display = "none")
                selectDetails[index].style.display = "block"
                btn.dataset.open = "true"
                btn.innerText = "取消選擇"
            }else{
                selectDetails[index].style.display = "none"
                btn.dataset.open = "false"
                btn.innerText = "選擇"
            }
        })
    })
}

//收藏
favorites.addEventListener("click",addToFavorites)

//#endregion ========== 監聽 ==========


//Function
function addToFavorites(){
    if(!isFavorite){
        isFavorite = true;
        favorites.classList.value = "fa-solid fa-heart"
    }else{
        isFavorite = false;
        favorites.classList.value = "fa-regular fa-heart"
    }
}


//window.onload