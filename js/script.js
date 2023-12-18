
/* 체크박스 전체선택 */
function selectAll(selectAll)  {
    const checkboxes 
       = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked
    });
  };

/* on 클릭시 on색상 #1D5A83 일시후원 off*/
let On = document.querySelector(".on");
let Off = document.querySelector(".off");

function onclick(){
  On.style.backgroundColor = "#1D5A83";
  On.style.color = "#fff";
  On.style.border = "#1D5A83";

  Off.style.backgroundColor = "#fff";
  Off.style.color = "#848484";
  Off.style.border = "2px solid #EDEDED";
}

function offclick(){
  Off.style.backgroundColor = "#1D5A83";
  Off.style.color = "#fff";
  Off.style.border = "#1D5A83";

  On.style.backgroundColor = "#fff";
  On.style.color = "#848484";
  On.style.border = "2px solid #EDEDED";
}

On.addEventListener("click",onclick)
Off.addEventListener("click",offclick)



// 버튼 활성화하기
  
  // 각 버튼에 이벤트 리스너 추가
  for (let i = 0; i < 8; i++) {
    let Btn = document.querySelectorAll(".btn");
    // querySelectorAll >> .btn이란 class를 모두 포함함.
 
    // 모든 버튼의 스타일 초기화      
    function Reset(){
     for (let k = 0; k < 8; k++) {
      Btn[k].style.backgroundColor = "#fff";
      Btn[k].style.color = "#848484";
      Btn[k].style.border = "2px solid #EDEDED";
      // btns[k] >> 배열로 불러오기 배열에서 0은 1을 의미함.
     }
     // 클릭된 버튼의 스타일 변경
     this.style.backgroundColor = "#1D5A83";
     this.style.color = "#fff";
     this.style.border = "2px solid #1D5A83";
     // this는 현재 이벤트가 발생한 버튼을 나타내며, 해당 버튼의 스타일을 변경
      }
      Btn[i].addEventListener("click", Reset)
     }