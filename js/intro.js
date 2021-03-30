if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  console.log('mobile device');
  // document.write("mobile device");
}else{
  // false for not mobile device
  console.log('not mobile device');
  // document.write("not mobile device");
}

window.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');

  const tl = gsap.timeline()

  gsap.to('body', 0, {
    css: {
      visibility: 'visible'
    }
  })

  tl.from('.line span', 1, {
    opacity: 0,
    ease: 'power4.out',
    delay: 0.7,
    stagger: {
      amount: 0.6
    }
  })
})