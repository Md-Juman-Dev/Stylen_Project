$(document).ready(function () {
  // Open menu
  // Mobile Menu
  $('.menu-icon').click(function () {
    $('.mobile_menu').addClass('active');
    $('.overlay-menu').fadeIn();
  });
  $('.closeBtn, .overlay-menu').click(function () {
    $('.mobile_menu').removeClass('active');
    $('.overlay-menu').fadeOut();
  });
  // Submenu Toggle
  $('.sub-menu-arrow').click(function () {
    const $current = $(this).closest('li').find('.sub-menu-mobole');
    $('.sub-menu-mobole').not($current).slideUp(200).removeClass('active');
    $('.sub-menu-arrow').not(this).removeClass('rotate');

    $current.slideToggle(200).toggleClass('active');
    $(this).toggleClass('rotate');
  });
  // Popup Handler Function
  function togglePopup(openBtn, popup, overlay, closeBtn) {
    $(openBtn).click(function () {
      $(popup).addClass('active');
      $(overlay).fadeIn();
    });
    $(closeBtn + ',' + overlay).click(function () {
      $(popup).removeClass('active');
      $(overlay).fadeOut();
    });
  }
  // User Login Popup
  togglePopup(
    '.profile',
    '.user-login-popup',
    '.overlay-login-popup',
    '.user-icon-close'
  );
  // Wishlist Popup
  togglePopup(
    '.wishlist',
    '.wishlist-popup',
    '.wishlist-overlay',
    '.wishlist-close'
  );
  // Search Slider
  togglePopup(
    '.search-icon',
    '.search-slider',
    '.search-overlay',
    '.serch-close'
  );
  // Cart Slider
  $('.cart-icon').click(function () {
    $('.cart-slider').addClass('active');
    $('.cart-overlay').fadeIn();
  });
  $('.cart-close, .cart-overlay, #cartClose').click(function () {
    $('.cart-slider').removeClass('active');
    $('.cart-overlay').fadeOut();
  });
  // Quantity Controls
  $('.qty-up').click(function () {
    const $input = $(this).siblings('.qty-value');
    $input.val(parseInt($input.val()) + 1);
    updateTotal();
  });
  $('.qty-down').click(function () {
    const $input = $(this).siblings('.qty-value');
    let val = parseInt($input.val());
    if (val > 1) {
      $input.val(val - 1);
      updateTotal();
    }
  });
  // Remove Cart Item
  $('.remove-item').click(function () {
    $(this).closest('.cart-item').remove();
    updateTotal();
  });
  // Total Price Update
  function updateTotal() {
    let total = 0;
    $('.cart-item').each(function () {
      const qty = parseInt($(this).find('.qty-value').val());
      const price = 990; // Static price; dynamic হলে dataset থেকে নিতে পারো
      total += qty * price;
    });

    $('.total').html(` ${total}`);
    const count = $('.cart-item').length;
    $('.cart-header strong').text(`${count} ITEM${count > 1 ? 'S' : ''}`);
  }
  // Initialize Swiper
  var swiper = new Swiper('.bannerSwiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  //browse our categories Swiper
  // Categories Swiper
  var categoriesSwiper = new Swiper('.categoriesSwiper', {
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 30 },
    },
  });

  // Premium T-Shirt Swiper
  var premiumTshirtSwiper = new Swiper('.premiumTshirtSwiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // Luxury Panjabi Swiper
  var luxuryPanjabiSwiper = new Swiper('.luxuryPanjabiSwiper', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
  // Premium Shirts Swiper
  var premiumShirtsSwiper = new Swiper('.premiumShirtsSwiper', {
    loop: true,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 30 },
    },
  });

  // New Arrivals Swiper
  var newArrivalsSwiper = new Swiper('.newArrivalsSwiper', {
    loop: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 30 },
    },
  });

  // Best Selling Swiper
  var bestSellingSwiper = new Swiper('.bestSellingSwiper', {
    loop: true,
    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 30 },
    },
  });

  // Review Swiper
  var reviewSwiper = new Swiper('.reviewSwiper', {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      640: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 30 },
    },
  });

  //*<============Shop Page Javascript==============>
  // Product Zoom Elements
  const mainImage = $('#main-image');
  const zoomResult = $('#zoom-result');
  const zoomLens = $('#zoom-lens');
  // Get cursor position relative to image
  function getCursorPos(e) {
    const rect = mainImage[0].getBoundingClientRect();
    return {
      x: e.pageX - rect.left - window.scrollX,
      y: e.pageY - rect.top - window.scrollY,
    };
  }
  // Move zoom lens and set zoom result background
  function moveLens(e) {
    const pos = getCursorPos(e);
    const lensWidth = zoomLens.width();
    const lensHeight = zoomLens.height();
    const imgWidth = mainImage.width();
    const imgHeight = mainImage.height();

    let x = pos.x - lensWidth / 2;
    let y = pos.y - lensHeight / 2;

    x = Math.max(0, Math.min(x, imgWidth - lensWidth));
    y = Math.max(0, Math.min(y, imgHeight - lensHeight));

    zoomLens.css({ left: `${x}px`, top: `${y}px` });
    zoomResult.css('background-position', `-${x * 2}px -${y * 2}px`);
  }
  // Thumbnail Image Switch
  $('.thumb-img').click(function () {
    const newSrc = $(this).attr('src');
    $('.thumb-img').removeClass('active');
    $(this).addClass('active');

    mainImage.attr('src', newSrc);
    zoomResult.css('background-image', `url(${newSrc})`);
  });
  // Zoom Effect
  mainImage
    .on('mousemove', function (e) {
      zoomLens.show();
      zoomResult.show();
      moveLens(e);
    })
    .on('mouseleave', function () {
      zoomLens.hide();
      zoomResult.hide();
    });
  // Initial zoom background
  zoomResult.css('background-image', `url(${mainImage.attr('src')})`);
  // Quantity Button Handlers
  $('.qty-btn.plus').click(function () {
    const input = $(this).siblings('.qty-input');
    const val = parseInt(input.val()) || 0;
    const max = parseInt(input.attr('max')) || 5;

    if (val < max) input.val(val + 1);
  });
  $('.qty-btn.minus').click(function () {
    const input = $(this).siblings('.qty-input');
    const val = parseInt(input.val()) || 1;
    const min = parseInt(input.attr('min')) || 1;

    if (val > min) input.val(val - 1);
  });
  // Quick View Modal
  $('.open_quick_view').click(function (e) {
    e.preventDefault();
    $('.quick_view_modal_overlay').fadeIn();
  });
  $('.modal_close_btn').click(function () {
    $('.quick_view_modal_overlay').fadeOut();
  });
});
