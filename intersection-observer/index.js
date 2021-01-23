(() => {
  let ioTarget;
  const $ul = document.querySelector('ul')
  let box = document.querySelector('li:last-child');
  let count = $ul.children.length;

  // 2. 감시 기능 선언
  const io = new IntersectionObserver((entry, observer) => {
    // 현재 보이는 target 출력
    ioTarget = entry[0].target;

    if (entry[0].isIntersecting) {
      console.log('현재 보이는 타켓', ioTarget)
      io.unobserve(box);

      box = $ul.appendChild(document.createElement('li'));
      box.textContent = ++count;
      io.observe(box);
    }

  }, {
    threshold: 0.5
  });

  // 3. box감시해!
  io.observe(box);

})();