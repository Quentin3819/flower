new Glide(".glide", {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    breakpoints: {
      1024: {
        perView: 1
      }}
  }).mount();

  var rellax = new Rellax('.rellax',{
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });