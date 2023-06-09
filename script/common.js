// -------------------------------------변수
// 1. KR
const kr_lnb = document.querySelector('header .right>li:nth-child(1)')
const kr_lnb_open = document.querySelector('header .lang')
// // 2. 전체메뉴+닫기
const all_nav = document.querySelector('header .right>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')
// // 3. ACC gnb +sub
const nav_acc = document.querySelectorAll('nav>ul>li')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)
// ------------------------------------------event
// 이벤트 실행 전 모두 숨기기
// 객체.속성.속성 = 값
// 객체.styles.display = 'none'
kr_lnb_open.style.display = 'none'
all_nav_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'
// 2. all_nav를 클릭했을때 all_nav_open이 열리게 된다
all_nav.addEventListener('click',function(){
    all_nav_open.style.display = 'block'
})
// 3. 닫기 클릭했을때 all_nav가 닫힌다
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display = 'none'
})
// 4. acc에 마우스를 올렸을때 sub메뉴가 나타난다
// mouseover, mouseout
nav_acc[12].addEventListener('mouseover',function(){
    nav_acc_sub[0].style.display = 'block'
})
// 5. sub에 마우스가 나갈때에는 sub메뉴가 사라진다
nav_acc[12].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display = 'none'
})
// 6. KR에 마우스를 올렸을때 lang창이 나타난다
let kr_boolean = true
kr_lnb.addEventListener('click',function(){
    // kr_lnb_open.style.display = 'block'
    if(kr_boolean){
        kr_lnb_open.style.display = 'block'
    }else{
        kr_lnb_open.style.display = 'none'
    }
    kr_boolean = !kr_boolean
})
// 7. 언어창에서 마우스 나갈때 창이 사라진다
// kr_lnb.addEventListener('click',function(){
//     // kr_lnb_open.style.display = 'none'
//     if(kr_boolean){
//         kr_lnb_open.style.display = 'none'
//     }
// })

//--------------------------------------------------------- main - right_popu
const right_popup = document.querySelector('#right_popup')
const popup_btn = document.querySelector('#popup_btn a:first-child')
console.log(right_popup, popup_btn)
// 1. right 500만큼 숨기기
right_popup.style.transform = 'translateX(500px)'
// 2. popup_btn 클릭 -> right 보이기
// right popup if 연습 -------------------------------------------
let popup_boolean = true
popup_btn.addEventListener('click',function(){
    right_popup.style.transition = 'all 1s'
    // right_popup.style.transform = 'translateX(0)'
    if(popup_boolean){
        // console.log('보이기')
        right_popup.style.transform = 'translateX(0)'
    }else{
        // console.log('숨기기')
        right_popup.style.transform = 'translateX(500px)'
    }
    popup_boolean = !popup_boolean
})

// popup_btn.addEventListener('mouseover',function(){
//     right_popup.style.transition = 'all 1s'
//     right_popup.style.transform = 'translateX(500px)'
// })