const carousel = new Siema({
    selector: '.mobile-slider',
    duration: 250,
    loop: true,
  });
  setInterval(() => carousel.next(), 8000)
