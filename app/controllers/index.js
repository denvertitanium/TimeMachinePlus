$.slider.text = $.slider.value;
function updateLabel(event){
    $.label.text = String.format("%3.1f", event.value);
    if (event.value <= 40) {
      $.image.image = "/denver_skyline.jpg";    
    }
    else if (event.value > 40 && event.value <= 50) {
      $.image.image = "/denver_skyline2.jpeg";    
    }
    else {
        $.image.image = "/denver_skyline3.jpeg";      
    } 
}

$.index.open();
