const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show'); // 클릭 시 'show' 클래스를 추가/제거하여 메뉴 보이기/숨기기
});