$(document).ready(function () {
  // Open menu
  $('.menu-icon').click(function () {
    $('.mobile_menu').addClass('active');
    $('.overlay-menu').fadeIn();
  });

  // Close menu by button
  $('.closeBtn,.overlay-menu').click(function () {
    $('.mobile_menu').removeClass('active');
    $('.overlay-menu').fadeOut();
  });

  $('.sub-menu-arrow').click(function () {
    const currentSubmenu = $(this).closest('li').find('.sub-menu-mobole');
    const currentArrow = $(this);
    // Close other submenus and remove rotate from other arrows
    $('.sub-menu-mobole')
      .not(currentSubmenu)
      .slideUp(200)
      .removeClass('active');
    $('.sub-menu-arrow').not(currentArrow).removeClass('rotate');
    // Toggle current submenu and rotate arrow
    currentSubmenu.slideToggle(200).toggleClass('active');
    currentArrow.toggleClass('rotate');
  });

  // User Login Popup
  $('.profile').click(function () {
    $('.user-login-popup').addClass('active');
  });
  $('.user-icon-close').click(function () {
    $('.user-login-popup').removeClass('active');
  });

  // Wishlist Popup
  $('.wishlist').click(function () {
    $('.wishlist-popup').addClass('active');
    $('.wishlist-overlay').fadeIn();
  });
  $('.wishlist-close,.wishlist-overlay').click(function () {
    $('.wishlist-popup').removeClass('active');
    $('.wishlist-overlay').fadeOut();
  });

  // Search Slider
  $('.search-icon').click(function () {
    $('.search-slider').addClass('active');
    $('.search-overlay').fadeIn();
  });
  $('.serch-close,.search-overlay').click(function () {
    $('.search-slider').removeClass('active');
    $('.search-overlay').fadeOut();
  });

  // Open Cart Slider
  $('.cart-icon').click(function () {
    $('.cart-slider').addClass('active');
    $('.cart-overlay').fadeIn();
  });

  // Close Cart (any close button or overlay click)
  $('.cart-close, .cart-overlay, #cartClose').click(function () {
    $('.cart-slider').removeClass('active');
    $('.cart-overlay').fadeOut();
  });
  // Quantity Up
  $('.qty-up').click(function () {
    const input = $(this).siblings('.qty-value');
    let val = parseInt(input.val());
    input.val(val + 1);
    updateTotal();
  });
  // Quantity Down
  $('.qty-down').click(function () {
    const input = $(this).siblings('.qty-value');
    let val = parseInt(input.val());
    if (val > 1) {
      input.val(val - 1);
      updateTotal();
    }
  });
  // Remove item
  $('.remove-item').click(function () {
    $(this).closest('.cart-item').remove();
    updateTotal();
  });
  function updateTotal() {
    let total = 0;
    $('.cart-item').each(function () {
      const qty = parseInt($(this).find('.qty-value').val());
      const price = 990;
      total += qty * price;
    });
    $('.total').html(` ${total}`);
    $('.cart-header strong').text(
      `${$('.cart-item').length} ITEM${$('.cart-item').length > 1 ? 'S' : ''}`
    );
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
  var swiper = new Swiper(
    '.categoriesSwiper, .premiumTshirtSwiper, .luxuryPanjabiSwiper, .premiumShirtsSwiper, .newArrivalsSwiper, .bestSellingSwiper, .reviewSwiper',
    {
      slidesPerView: 2,
      spaceBetween: 10,
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
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    }
  );
  var swiper = new Swiper('.reviewSwiper', {
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  var swiper = new Swiper('.luxuryPanjabiSwiper,.premiumTshirtSwiper', {
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  //*<============Shop Page Javascript==============>

  // product details page image
  const mainImage = $('#main-image');
  const zoomResult = $('#zoom-result');
  const zoomLens = $('#zoom-lens');

  function getCursorPos(e) {
    const img = mainImage[0];
    const rect = img.getBoundingClientRect();
    const x = e.pageX - rect.left - window.scrollX;
    const y = e.pageY - rect.top - window.scrollY;
    return { x, y };
  }

  function moveLens(e) {
    const pos = getCursorPos(e);
    let x = pos.x - zoomLens.width() / 2;
    let y = pos.y - zoomLens.height() / 2;

    // Boundary checks
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > mainImage.width() - zoomLens.width())
      x = mainImage.width() - zoomLens.width();
    if (y > mainImage.height() - zoomLens.height())
      y = mainImage.height() - zoomLens.height();

    zoomLens.css({ left: x + 'px', top: y + 'px' });

    // Set background of zoom result
    zoomResult.css('background-position', `-${x * 2}px -${y * 2}px`);
  }

  $('.thumb-img').click(function () {
    const newSrc = $(this).attr('src');
    $('.thumb-img').removeClass('active');
    $(this).addClass('active');

    mainImage.attr('src', newSrc);
    zoomResult.css('background-image', `url(${newSrc})`);
  });

  mainImage.on('mousemove', function (e) {
    zoomLens.show();
    zoomResult.show();
    moveLens(e);
  });

  mainImage.on('mouseleave', function () {
    zoomLens.hide();
    zoomResult.hide();
  });

  // Init background of zoom
  zoomResult.css('background-image', `url(${mainImage.attr('src')})`);

  $('.qty-btn.plus').click(function () {
    let input = $(this).siblings('.qty-input');
    let currentVal = parseInt(input.val());
    let max = parseInt(input.attr('max')) || 5;
    if (currentVal < max) {
      input.val(currentVal + 1);
    }
  });

  $('.qty-btn.minus').click(function () {
    let input = $(this).siblings('.qty-input');
    let currentVal = parseInt(input.val());
    let min = parseInt(input.attr('min')) || 1;
    if (currentVal > min) {
      input.val(currentVal - 1);
    }
  });
  $('.open_quick_view').click(function (e) {
    e.preventDefault(); // Stop anchor from jumping to top
    $('.quick_view_modal_overlay').fadeIn();
  });
  $('.modal_close_btn').click(function () {
    $('.quick_view_modal_overlay').fadeOut();
  });
});
