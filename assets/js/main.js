$(document).ready(function () {
  // Open menu
  $('.menu-icon').click(function () {
    $('.mobile_menu').addClass('active');
    $('.overlay-menu').fadeIn();
  });

  // Close menu by button
  $('.closeBtn').click(function () {
    $('.mobile_menu').removeClass('active');
    $('.overlay-menu').fadeOut();
  });

  // Close menu by clicking on overlay-menu
  $('.overlay-menu').click(function () {
    $('.mobile_menu').removeClass('active');
    $(this).fadeOut();
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
  $('.wishlist-close').click(function () {
    $('.wishlist-popup').removeClass('active');
    $('.wishlist-overlay').fadeOut();
  });
  $('.wishlist-overlay').click(function () {
    $('.wishlist-popup').removeClass('active');
    $(this).fadeOut();
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
});
