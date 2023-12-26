


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

















// //js for web header
// $('#courses-menu').on('mouseover', function () {
//     $(".course-dropdown").attr("data-bs-popper", "static");
//     // $(".course-dropdown").show();
// }).on('mouseleave', function () {
//     $(".course-dropdown").removeAttr("data-bs-popper");
//     // $(".course-dropdown").hide();
// }).click(function () {
//     $(".course-dropdown").attr("data-bs-popper", "static");
// });
// // For loading placed companies slider section.
// var loadingPage = false;
// $(window).scroll(function () {
//     if ($(this).scrollTop() >= 100 && loadingPage === false) {
//         loadingPage = true;
//         $.ajax({
//             type: "post",
//             dataType: "json",
//             url: $app_url + '/get-placed-companies',
//             data: [],
//             beforeSend: function () {
//                 //
//             },
//             success: function (data) {
//                 $('#placedCompaniesSection').html('');
//                 $('#placedCompaniesSection').html(data.html);
//             }
//         });
//     }
// });
// // Placed companies ends here.
// //js for mobile header
// $(document).ready(function () {
//     $(document).on('click', '.inqFormSubmit', function (e) {
//         e.preventDefault();
//         var self = $(this);
//         var formDataArr = self.parents('.inqForm').serialize();
//         $.ajax({
//             type: "post",
//             dataType: "json",
//             url: $app_url + '/inquiry',
//             data: formDataArr,
//             beforeSend: function () {
//                 $.blockUI({message: '<div class="course-loader mx-auto"><svg viewBox="0 0 80 80"><circle id="test" cx="40" cy="40" r="32"></circle></svg></div>'});
//             },
//             success: function (data) {
//                 $.unblockUI();
//                 $('.inqAlertDiv').html('');
//                 self.parents('.inqForm').find('.inqAlertDiv').html(data.html);
//                 $('.inqForm').trigger("reset");
//                 if ('dl' in data) {
//                     inquiryData(data.dl);
//                 }
//                 setTimeout(function () {
//                     $('#inquiryForm').modal('hide')
//                 }, 2000);
//             },
//             error: function(){
//                 $.unblockUI();
//                 $('.inqAlertDiv').html('');
//                 self.parents('.inqForm').find('.inqAlertDiv').html('Thanks for your interest with TOPS Technologies, we will contact you shortly.');
//                 $('.inqForm').trigger("reset");
//                 setTimeout(function () {
//                     $('#inquiryForm').modal('hide')
//                 }, 2000);
//             },
//             timeout: 30000
//         });
//     });
//     $(document).on('click', '.inqFormShow', function (e) {
//         var type = $(this).attr('data-type');
//         var source = $(this).attr('data-source');
//         var source_value = $(this).attr('data-source_value');
//         var form_element = $(this).attr('data-form_element');
//         var course_category = $(this).attr('data-course_category');
//         getInquiryForm(type, source, source_value, course_category, form_element);
//     });
//     $(".navbar-toggler").click(function (e) {
//         $("#navbarMobile").toggle("slide", {direction: "right"}, 300);
//         $("#navbarMobile").toggleClass("show");
//         $(".mobile-navbar-toggler-icon .fa-solid").toggleClass("fa-bars fa-xmark");

//         if ($("#navbarMobile").hasClass("show")) {
//             $('body').css('overflow', 'hidden');
//             //alert("hide");
//         } else {
//             $('body').css('overflow', 'auto');
//             $('.level-2-mobile').hide();
//             $('.level-3-mobile').hide();
//             $('.level-1-mobile').show();
//             $('body').css('overflow', 'visible');
//         }
//         e.stopPropagation();
//     });
//     $(".open-item-mobile").click(function (e) {
//         $("#" + $(this).data('show_class')).show("slide", {direction: "right"}, 300);
//         e.stopPropagation();
//     });
//     $(".back-item-mobile").click(function (e) {
//         $("#" + $(this).data('hide_class')).hide("slide", {direction: "right"}, 300);
//         e.stopPropagation();
//     });
//     $('#webinarJoin').on('hidden.bs.modal', function (e) {
//         $('.webinarJoinAlertDiv').html('');
//     })
//     $(document).on('click', '.joinWebinarFormSubmit', function (e) {
//         e.preventDefault();
//         var self = $(this);
//         var formDataArr = self.parents('.webinarJoinForm').serialize();
//         $.ajax({
//             type: "post",
//             dataType: "json",
//             url: $app_url + '/webinar/validate-registration',
//             data: formDataArr,
//             beforeSend: function () {
//                 $('.webinarJoinAlertDiv').html('');
//                 $.blockUI({message: '<div class="course-loader mx-auto"><svg viewBox="0 0 80 80"><circle id="test" cx="40" cy="40" r="32"></circle></svg></div>'});
//             },
//             success: function (data) {
//                 $.unblockUI();
//                 self.parents('.webinarJoinForm').find('.webinarJoinAlertDiv').html(data.html);
//                 $('.webinarJoinForm').trigger("reset");
//                 if (data.status && !data.validator) {
//                     setTimeout(function () {
//                         $('#webinarJoin').modal('hide');
//                         window.location = data.redirect_link;
//                     }, 5000);
//                 }
//                 if (!data.status) {
//                     toastr.error(data.message, "Error!", {timeOut: 2000});
//                     $('#webinarJoin').modal('hide');
//                 }
//             }
//         });
//     });
// });

// function getSearchData(data = null) {
//     $.ajax({
//         type: "post",
//         dataType: "json",
//         url: $app_url + '/search-courses',
//         data: data,
//         beforeSend: function () {
//             $.blockUI({message: '<div class="course-loader mx-auto"><svg viewBox="0 0 80 80"><circle id="test" cx="40" cy="40" r="32"></circle></svg></div>'});
//         },
//         success: function (data) {
//             $.unblockUI();
//             if (data.status) {
//                 $('#course-tabContent').empty();
//                 $('#course-tabContent').html(data.html);
//             }
//         }
//     });
//     return true;
// }

// function getInquiryForm(type, source, source_value = null, course_category = null, form_element = 'inquiryFormDiv') {
//     $.ajax({
//         type: "post",
//         dataType: "json",
//         url: $app_url + '/get-inquiry-form',
//         data: {'type': type, 'source': source, 'source_value': source_value, 'form_element': form_element, 'course_category': course_category},
//         success: function (data) {
//             $('#' + data.form_element).html('');
//             $('#' + data.form_element).html(data.html);
//             initCountryCodes('inquiry_modal_contact');
//         }
//     });
//     return true;
// }

// function disableNullFields() {
//     $('input').each(function (i) {
//         var $input = $(this);
//         if ($input.val() == '')
//             $input.attr('disabled', 'disabled');
//     });
// }

// function searchClearFn(searchTermInput, searchClear, isSearch = false) {
//     searchTermInput.on('keyup', function () {
//         ($(this).val().length > 0) ? searchClear.show() : searchClear.hide();
//     });
//     searchClear.on('click', function (e) {
//         e.preventDefault();
//         searchTermInput.val('');
//         $(this).hide();
//         if (isSearch) {
//             getSearchData({'search': null});
//         }
//     });
// }

// function setWhatsappMessage(contact, msg) {
//     var utm_source = readCookie('utm_source');
//     var utm_medium = readCookie('utm_medium');
//     var msg_init = 'Hi';
//     if (utm_source == 'google' && utm_medium == 'cpc') {
//         msg_init = 'Hello';
//     }
//     if (utm_source == 'facebook' && utm_medium == 'cpc') {
//         msg_init = 'Hey';
//     }
//     var wp_link = 'https://wa.me/91' + contact + '?text=' + encodeURIComponent(msg_init + ', I want to inquire about ' + msg);
//     $('.dl-whatsapp-msg').attr("href", wp_link);
//     return true;
// }

// function initCountryCodes(selector = 'inquiry_contact') {
//     let country_code = "IN";
//     let dial_code = "91", min_length = "";
//     $("." + selector).each(function () {
//         let self = $(this);
//         let input = this;
//         // init plugin
//         let iti = window.intlTelInput(input, {
//             formatOnDisplay: false,
//             initialCountry: country_code,
//             utilsScript: "https://intl-tel-input.com/intl-tel-input/js/intlTelInput.js" // just for formatting/placeholders etc
//         });
//         input.addEventListener("countrychange", function () {
//             dial_code = iti.getSelectedCountryData().dialCode;
//             min_length = $countryISDCodes[dial_code] ?? 10;
//             self.attr('data-validation-length', 'min' + min_length);
//             self.parents('.inqForm').find(".isd_code").val(dial_code);
//         });
//     });
//     return true;
// }
