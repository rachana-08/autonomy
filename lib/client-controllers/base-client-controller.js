function addToCartServerClicked(event){
    //  console.log(event);
  var button=event
  var shopItem = button.parentElement
  var title = document.getElementById("add_server").value;
  console.log(title);
}

function addToCartDBClicked(event){
    //  console.log(event);
  var button=event
  var shopItem = button.parentElement
  var title = document.getElementById("add_db").value;
  console.log(title);
}

var addToCartButtons = document.getElementsByClassName('shop-item-button')
{
  for(var i=0; i<addToCartButtons.length;i++){
      var button = addToCartButtons[i]
      button.addEventListener('click',addToCartClicked)
  }
}

if(typeof(Storage)!=='undefined'){

}else{
    console.log('storage is not working on your browser');
}