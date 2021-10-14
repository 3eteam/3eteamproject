$('#hoverr').hover(function(){
    $('#hoverrr').css('display','flex');
})

$('#hoverrr').hover(function(){
    $('#hoverrr').css('display','flex');
},function(){
    $('#hoverrr').css('display','none');
})




$(function(){ 
    const gallery_box = $('.gallery_box'); 
    const light_box = $('.light_box');
    const light_exit = $('.light_exit');

    initDataBinding(); 
    imageCover();
    
    gallery_box.find('a').on('click',function(){
        light_box.addClass('visible');
        var img_src = $(this).find('img').data('img_src');
        console.log('img_src :>> ', img_src);
        light_box.find('img').attr('src',img_src );
        
    });

    
    light_exit.on('click',function(){
        $(this).removeClass('visible');
    }) 
    
    function initDataBinding(){ // 이미지소스 dat속성에 할당 
        gallery_box.find('img').each(function(i){
            var img_src = $(this).attr('src');
            $(this).data({'img_src' : img_src });
        });
    }

    function imageCover(){ 
        gallery_box.find('a').append('<div class="cover" ></div>');
    }

});