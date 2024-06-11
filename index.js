const items = document.querySelectorAll('.item');

items.forEach(function(item){
    item.addEventListener('mouseenter', function(){
        item.classList.remove('basis-1/4');
    });
});