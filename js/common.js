function openNav() {
  document.getElementById("mySidenav").style.width = "365px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("show_all_nav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("show_all_nav").style.display = "none";
}

function closesidenav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("show_all_nav").style.display = "none";
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("show_all_nav1").style.display = "none";
}

function closesidenav3() {
  document.getElementById("show_all_nav2").style.display = "none";
  document.getElementById("mySidenav2").style.width = "0";
  document.getElementById("show_all_nav3").style.display = "none";
}

function editshipping(){
  document.getElementById("shippping_address").style.display = "block";
  document.getElementById("delivery_address").style.display = "none"; 
}

function canceleditshipping(){
  document.getElementById("shippping_address").style.display = "none";
  document.getElementById("delivery_address").style.display = "block"; 
}

// function openNav2() {
//   document.getElementById("mySidenav2").style.width = "365px";
//   document.getElementById("main").style.marginLeft = "0px";
//   document.getElementById("show_all_nav2").style.display = "block";
// }

// function closeNav2() {
//   document.getElementById("mySidenav2").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
//   document.getElementById("show_all_nav2").style.display = "none";
// }

function openNav3() {
document.getElementById("mySidenav2").style.width = "365px";
//document.getElementById("main").style.marginLeft = "0px";
document.getElementById("show_all_nav2").style.display = "block";
}

function closeNav3() {
document.getElementById("mySidenav2").style.width = "0";
//document.getElementById("main").style.marginLeft= "0";
document.getElementById("show_all_nav2").style.display = "none";
}  


function openNav1() {
  document.getElementById("mySidenav1").style.width = "365px";
  document.getElementById("main").style.marginLeft = "0px";
  document.getElementById("show_all_nav1").style.display = "block";
}

function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("show_all_nav1").style.display = "none";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "365px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}


function openpayment() { 
  document.getElementById("shipping_id").style.display = "none";
  document.getElementById("payment_id").style.display= "block";
  document.getElementById("shipping_billing_add").style.display = "block";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const change = src => {
  document.getElementById('main').src = src
  }

  // function listview() {
  //   debugger;
  //   var x = document.getElementById("rp_list_view");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }

  function listview() {

    document.getElementById("rp_list_view").style.display = "block";
    // document.getElementById("erp_grid_view").style.display = "none";
    document.getElementById("erp_detailed_view").style.display = "none";
    document.getElementById("rp_list_view").classList.add('list_wrapper');
    document.getElementById("rp_list_view").classList.remove('grid_wrapper');
    document.getElementById("listview_btn").style.color ="red";
    document.getElementById("gridview_btn").style.color ="black";
    document.getElementById("detailview_btn").style.color ="black";
    // document.getElementsByClassName('yellowBorder example')[0].style.border ="10px solid yellow";

    document.getElementById("erp_pro_detail").classList.remove('col-lg-2')
  }

  function gridview() {
    document.getElementById("rp_list_view").style.display = "block";
    //document.getElementById("erp_grid_view").style.display = "block";
      document.getElementById("rp_list_view").classList.add('grid_wrapper');
      
    document.getElementById("erp_pro_detail").classList.add('col-lg-3');
      document.getElementById("rp_list_view").classList.remove('list_wrapper');
    document.getElementById("erp_detailed_view").style.display = "none";
    document.getElementById("listview_btn").style.color ="black";
    document.getElementById("gridview_btn").style.color ="red";
    document.getElementById("detailview_btn").style.color ="black";
  }

  function detailview() {
   // document.getElementById("rp_list_view").style.display = "none";
   // document.getElementById("erp_grid_view").style.display = "none";
   
   document.getElementById("rp_list_view").classList.remove('grid_wrapper');
   
   document.getElementById("erp_pro_detail").classList.remove('col-lg-3');
   document.getElementById("rp_list_view").classList.add('list_wrapper');
    document.getElementById("erp_detailed_view").style.display = "block";
    document.getElementById("listview_btn").style.color ="black";
    document.getElementById("gridview_btn").style.color ="black";
    document.getElementById("detailview_btn").style.color ="red";
  }

  function sublistview() {

    document.getElementById("sub_rp_list_view").style.display = "block";
    document.getElementById("erp_detailed_view").style.display = "none";
    document.getElementById("sub_rp_list_view").classList.add('sub_list_wrapper');
    document.getElementById("sub_rp_list_view").classList.remove('sub_grid_wrapper');
    document.getElementById("sub_listview_btn").style.color ="red";
    document.getElementById("sub_gridview_btn").style.color ="black";
    document.getElementById("sub_detailview_btn").style.color ="black";
    document.getElementById("sub_erp_pro_detail").classList.remove('col-lg-2')
  }

  function subgridview() {
    document.getElementById("sub_rp_list_view").style.display = "block";
    document.getElementById("sub_rp_list_view").classList.add('sub_grid_wrapper');
    document.getElementById("sub_rp_list_view").classList.remove('sub_list_wrapper');
    document.getElementById("sub_erp_detailed_view").style.display = "none";
    document.getElementById("sub_listview_btn").style.color ="black";
    document.getElementById("sub_gridview_btn").style.color ="red";
    document.getElementById("sub_detailview_btn").style.color ="black";
    document.getElementById("sub_erp_pro_detail").classList.add('col-lg-2')
  }

  function subdetailview() {
    document.getElementById("sub_rp_list_view").style.display = "none";
    //document.getElementById("sub_erp_grid_view").style.display = "none";
    document.getElementById("sub_erp_detailed_view").style.display = "block";

    document.getElementById("sub_listview_btn").style.color ="black";
    document.getElementById("sub_gridview_btn").style.color ="black";
    document.getElementById("sub_detailview_btn").style.color ="red";
  }



  function readmore() {
    document.getElementById("read_more_text").style.display = "block";
    document.getElementById("show_less").style.display = "block";
    document.getElementById("read_more").style.display = "none";
  }

  function showless() {
    document.getElementById("read_more_text").style.display = "none";
    document.getElementById("read_more").style.display = "block";
    document.getElementById("show_less").style.display = "none";
  }

  function paysuccess() {
    document.getElementById("payment_success").style.display = "block";
    document.getElementById("payment_id").style.display = "none";
  }

  function my_hist1() {
    document.getElementById("order_history1").style.display = "block";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";
  }


  function showinvoice() {
    document.getElementById("order_history").style.display = "block";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";
  }
 
  function showorderhistory() {

    document.getElementById("order_history").style.display = "none";
    document.getElementById("order_history1").style.display = "block";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";

  }

  function showquickorder1() {

    document.getElementById("quick_order123").style.display="block";
    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_setting").style.display="none";
    
  }

  function showpendingorders() {
    document.getElementById("order_history").style.display = "none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("pending_orders").style.display = "block";
    document.getElementById("change_password").style.display="none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";
    
  }
  function myaccountdetails() {
   
    document.getElementById("myaccount_details").style.display = "block";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";

  }
  function changeword(){
   
    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("change_password").style.display="block";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";

  }

  function changenameuser(){
    
  
    document.getElementById("change_password").style.display="none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display ="none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("change_loginuser").style.display="block";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";


  }
  function mycompany(){

    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("my_company_user").style.display = "block";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";

  }
  function myfavoriteproduct(){

   

    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("create_new_list").style.display="block";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";

    document.getElementById("c_myfavorite").addClass("active");
    document.getElementById("quick_order123").style.display="none";

  }

  function showmylistname() {
    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("my_fav").style.display="block";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";
  }


  function mysettingscom(){

    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_wallet").style.display="none";
    document.getElementById("my_setting").style.display="block";
    document.getElementById("quick_order123").style.display="none";

  }
  function mywalletaccount(){

    document.getElementById("change_loginuser").style.display="none";
    document.getElementById("order_history1").style.display = "none";
    document.getElementById("change_password").style.display="none";
    document.getElementById("pending_orders").style.display = "none";
    document.getElementById("order_history").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("my_company_user").style.display = "none";
    document.getElementById("my_fav").style.display="none";
    document.getElementById("edit_user_company").style.display="none";
    document.getElementById("my_list_name").style.display="none";
    document.getElementById("my_wallet").style.display="block";
    document.getElementById("create_new_list").style.display="none";
    document.getElementById("my_setting").style.display="none";
    document.getElementById("quick_order123").style.display="none";

  }

  function showeditcompany() {
    document.getElementById("edit_user_company").style.display="block";
    document.getElementById("my_company_user").style.display="none";
    document.getElementById("my_list_name").style.display="none";
  }

  function openlistname() {
    document.getElementById("my_list_name").style.display="block";
    document.getElementById("my_fav").style.display="none";
  }

 

  // function show_lfilter() {
  //   document.getElementById("ms-options").style.display = "block";
  // }

  // Add active class to the current button (highlight it)
var header = document.getElementById("activeordermenu");
var btns = header.getElementsByClassName("figure2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var header = document.getElementById("activeordermenu1");
var btns = header.getElementsByClassName("figure2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var header = document.getElementById("activeordermenu2");
var btns = header.getElementsByClassName("figure2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



  function show_lfilter() {
    var x = document.getElementById("ms-options");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function show_cfilter() {
    var x = document.getElementById("color_options");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function valueChanged()
  {
      if($('.length_value').is(":checked"))   
          $(".ms-options").hide();
      else
          $(".ms-options").show();
  }

  function colorvalue()
  {
      if($('.color_value').is(":checked"))   
          $(".color_options").hide();
      else
          $(".color_options").show();
  }


  $('#myCarousel').carousel({
    interval: false
  });
  $('#carousel-thumbs').carousel({
    interval: false
  });
  
  // handles the carousel thumbnails
  // https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr('id');
    var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
    $('#myCarousel').carousel(id);
  });
  // Only display 3 items in nav on mobile.
  if ($(window).width() < 575) {
    $('#carousel-thumbs .row div:nth-child(4)').each(function() {
      var rowBoundary = $(this);
      $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
    });
    $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
      var boundary = $(this);
      $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
    });
  }
  // Hide slide arrows if too few items.
  if ($('#carousel-thumbs .carousel-item').length < 2) {
    $('#carousel-thumbs [class^=carousel-control-]').remove();
    $('.machine-carousel-container #carousel-thumbs').css('padding','0 5px');
  }
  // when the carousel slides, auto update
  $('#myCarousel').on('slide.bs.carousel', function(e) {
    var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
  });
  // when user swipes, go next or previous
  $('#myCarousel').swipe({
    fallbackToMouseEvents: true,
    swipeLeft: function(e) {
      $('#myCarousel').carousel('next');
    },
    swipeRight: function(e) {
      $('#myCarousel').carousel('prev');
    },
    allowPageScroll: 'vertical',
    preventDefaultEvents: false,
    threshold: 75
  });
  /*
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
  */
  
  $('#myCarousel .carousel-item img').on('click', function(e) {
    var src = $(e.target).attr('data-remote');
    if (src) $(this).ekkoLightbox();
  });