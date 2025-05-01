$(document).ready(function () {
  // dark mode default

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
  // Related Products Swiper
  var relatedProductsSwiper = new Swiper('.relatedProductsSwiper', {
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
      1024: { slidesPerView: 4, spaceBetween: 30 },
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
  $('.tab-link').click(function (e) {
    e.preventDefault();
    var tab = $(this).data('tab');

    $('.tab-link').removeClass('active');
    $(this).addClass('active');

    $('.tab-pane').removeClass('active').addClass('d-none');
    $('#' + tab)
      .removeClass('d-none')
      .addClass('active');
  });
  // Star rating selection inside the popup
  $('.rating-stars span').click(function () {
    let index = $(this).index();
    $('.rating-stars span').each(function (i) {
      if (i <= index) {
        $(this).addClass('active');
        $(this).find('iconify-icon').attr('icon', 'typcn:star');
      } else {
        $(this).removeClass('active');
        $(this).find('iconify-icon').attr('icon', 'typcn:star-outline');
      }
    });
  });
  $('.review-stars .iconify-icon').click(function () {
    let index = $(this).parent().index();
    let parent = $(this).closest('.review-stars');

    parent.find('.iconify-icon').each(function (i) {
      let icon = $(this).find('iconify-icon');
      if (i <= index) {
        $(this).addClass('active');
        icon.attr('icon', 'typcn:star');
      } else {
        $(this).removeClass('active');
        icon.attr('icon', 'typcn:star-outline');
      }
    });

    // Update rating number
    let ratingValue = (index + 1).toFixed(1);
    parent.find('.rating-number').text('(' + ratingValue + ')');
  });
  let reviewsPerPage = window.innerWidth <= 767 ? 2 : 4;
  let reviews = $('#reviews-list .review-item');
  let totalReviews = reviews.length;
  let totalPages = Math.ceil(totalReviews / reviewsPerPage);
  let currentPage = 1;

  function showPage(page) {
    reviews.hide();
    reviews.slice((page - 1) * reviewsPerPage, page * reviewsPerPage).fadeIn();

    $('.pagination .page-number').removeClass('active');
    $('.pagination .page-number')
      .eq(page - 1)
      .addClass('active');

    if (page === 1) {
      $('.prev-page').addClass('disabled');
    } else {
      $('.prev-page').removeClass('disabled');
    }
    if (page === totalPages) {
      $('.next-page').addClass('disabled');
    } else {
      $('.next-page').removeClass('disabled');
    }
  }

  // Generate page numbers
  function generatePagination() {
    $('.pagination .page-number').remove(); // Clear existing numbers
    for (let i = 1; i <= totalPages; i++) {
      $(
        '<li class="page-item page-number"><a class="page-link" href="#">' +
          i +
          '</a></li>'
      ).insertBefore('.next-page');
    }
  }

  generatePagination();
  showPage(currentPage);

  // Pagination Clicks
  $(document).on('click', '.page-number', function (e) {
    e.preventDefault();
    currentPage = parseInt($(this).text());
    showPage(currentPage);
  });

  $('.prev-page').click(function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  $('.next-page').click(function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  $(window).resize(function () {
    let newReviewsPerPage = window.innerWidth <= 767 ? 2 : 4;
    if (newReviewsPerPage !== reviewsPerPage) {
      reviewsPerPage = newReviewsPerPage;
      totalPages = Math.ceil(totalReviews / reviewsPerPage);
      currentPage = 1;
      generatePagination();
      showPage(currentPage);
    }
  });

  $('#edit-account-btn').click(function () {
    $('.account-input').prop('disabled', false);
    $('#edit-account-btn').addClass('d-none');
    $('#save-account-btn, #cancel-account-btn').removeClass('d-none');
  });

  $('#cancel-account-btn').click(function () {
    $('.account-input').prop('disabled', true);
    $('#edit-account-btn').removeClass('d-none');
    $('#save-account-btn, #cancel-account-btn').addClass('d-none');
  });

  $('#save-account-btn').click(function () {
    // You could do AJAX saving here
    $('.account-input').prop('disabled', true);
    $('#edit-account-btn').removeClass('d-none');
    $('#save-account-btn, #cancel-account-btn').addClass('d-none');
    alert('Changes saved successfully!');
  });

  $('#editAccountBtn').on('click', function () {
    $(this)
      .closest('.profile-section')
      .find('input, select')
      .prop('disabled', false);
  });

  $('#editPasswordBtn').on('click', function () {
    $(this).closest('.profile-section').find('input').prop('disabled', false);
  });
  $('#edit-security-btn').click(function () {
    $('.security-input').prop('disabled', false);
    $('#edit-security-btn').addClass('d-none');
    $('#save-security-btn, #cancel-security-btn').removeClass('d-none');
  });

  $('#cancel-security-btn').click(function () {
    $('.security-input').prop('disabled', true);
    $('#edit-security-btn').removeClass('d-none');
    $('#save-security-btn, #cancel-security-btn').addClass('d-none');
  });

  $('#save-security-btn').click(function () {
    // Insert actual save logic here
    $('.security-input').prop('disabled', true);
    $('#edit-security-btn').removeClass('d-none');
    $('#save-security-btn, #cancel-security-btn').addClass('d-none');
    alert('Security settings updated!');
  });
  // MOBILE TAB TOGGLING
  $('.mobile-tab-btn').on('click', function () {
    $('.mobile-tab-btn').removeClass('active');
    $(this).addClass('active');
  });

  // Cart Page Javascript
});
