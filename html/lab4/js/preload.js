// Preload a few images to create extra requests
['img/img1.png','img/img2.png','img/img3.png'].forEach(src => {
  const i = new Image(); i.src = src;
});
