
var deleteButton = document.getElementsByClassName('delete-item');
var deleteItemlist = [];
for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', (event) => {
        const item = Number(event.currentTarget.getAttribute('value'));
        delitem(item);
    });
}
const deleteURL = '/buy/delete';
function delitem(item) {
    const option = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deletes: item }),
    }
    fetch(deleteURL, option)
        .then(res => {
            res.json().then(data => {
                if (data.res) {
                    alert("삭제 완료하였습니다.");
                    location.reload();
                }
                else {
                    alert("삭제 실패하였습니다.");
                }
            })
        });
}



var price = document.getElementsByClassName('item-price-all')[0];
if (price) {
    price.innerHTML = price.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


window.onload = () => {
    if (new URL(location.href).searchParams.get('loginError')) {
      alert(new URL(location.href).searchParams.get('loginError'));
    }
  };




function hospital(v) { 
    location.href=""+v; 
   } 



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