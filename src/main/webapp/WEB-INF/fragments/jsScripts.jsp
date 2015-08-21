<script>
  $(function () { $("input,select,textarea,password").not("[type=submit]").jqBootstrapValidation(); } );
</script> 
<script>

// jQuery for page scrolling feature - requires jQuery Easing plugin

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
</script>
