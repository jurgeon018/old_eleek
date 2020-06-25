import './index.scss';
 
$('.btn-lean_more').on('mouseenter', function(){
    $(this).addClass('is-focus-over');
    $(this).removeClass('is-focus-out');
});
$('.btn-lean_more').on('mouseleave', function(){
    $(this).addClass('is-focus-out');
    $(this).removeClass('is-focus-over');

});



 


