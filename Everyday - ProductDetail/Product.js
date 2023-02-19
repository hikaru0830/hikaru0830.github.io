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

//DOM
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

//===== 監聽 =====
//商品說明選單
if(window.innerWidth < 768){
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
    //拖拽錨點
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

// >1200px 商品說明錨點

//收藏
favorites.addEventListener("click",addToFavorites)

//展開日期查詢
choosePlanBtn.forEach((btn, index) => {
    btn.addEventListener("click", function(){
        let selectDetails = document.querySelectorAll(".select-detail")
        let displayStatus = selectDetails[index].style.display
        selectDetails[index].style.display == "block"
    })
})



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