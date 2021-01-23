(() => {
  let ioIndex = 0;

  // 2. 감시 기능 선언
  const io = new IntersectionObserver((entries, observer) => {
    // 현재 보이는 target 출력
    ioIndex = entries[0].target.dataset.index * 1;

    // // boxes[i]번째 확인하여 해당번째 boxes 색상 바꾸기
    if (ioIndex === 0 && window.innerHeight < 800) {
      for (let i = 0; i < 3; i++) {
        boxes[i].style.backgroundColor = 'skyblue';
      }
    }

    boxes[ioIndex].style.backgroundColor = 'skyblue';
  }, {
    threshold: 0.5
  });

  // 1. data set
  const boxes = document.querySelectorAll('div');
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].dataset.index = i;
    boxes[i].innerHTML = `${i} 번째`

    // 3. 관찰 대상 등록
    io.observe(boxes[i])
  }
})();