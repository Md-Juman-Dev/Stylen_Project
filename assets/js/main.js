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
  });
  $('.serch-close').click(function () {
    $('.search-slider').removeClass('active');
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
      const price = 990; // Set this dynamically if needed
      total += qty * price;
    });
    $('.total').html(` ${total}`);
    $('.cart-header strong').text(
      `${$('.cart-item').length} ITEM${$('.cart-item').length > 1 ? 'S' : ''}`
    );
  }

  // Initialize Swiper
  var swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000, // Delay between transitions (in ms)
      disableOnInteraction: false, // Keeps autoplay running even after user interaction
    },
  });

  // product details page image
  const mainImage = $("#main-image");
  const zoomResult = $("#zoom-result");
  const zoomLens = $("#zoom-lens");

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
      if (x > mainImage.width() - zoomLens.width()) x = mainImage.width() - zoomLens.width();
      if (y > mainImage.height() - zoomLens.height()) y = mainImage.height() - zoomLens.height();

      zoomLens.css({ left: x + 'px', top: y + 'px' });

      // Set background of zoom result
      zoomResult.css('background-position', `-${x * 2}px -${y * 2}px`);
  }

  $(".thumb-img").click(function () {
      const newSrc = $(this).attr("src");
      $(".thumb-img").removeClass("active");
      $(this).addClass("active");

      mainImage.attr("src", newSrc);
      zoomResult.css("background-image", `url(${newSrc})`);
  });

  mainImage.on("mousemove", function (e) {
      zoomLens.show();
      zoomResult.show();
      moveLens(e);
  });

  mainImage.on("mouseleave", function () {
      zoomLens.hide();
      zoomResult.hide();
  });

  // Init background of zoom
  zoomResult.css("background-image", `url(${mainImage.attr("src")})`);
});
