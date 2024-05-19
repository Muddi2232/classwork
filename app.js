
var boldText= document.getElementById('bold'),
italicText = document.getElementById('italic'),
underlineText =document.getElementById('underline'),
para =document.getElementById ('paragraph');

boldText.addEventListener('click', function(){
    para.style.fontWeight= 'bold';
});
italicText.addEventListener('click', function(){
    para.style.fontStyle= 'italic';
});
underlineText.addEventListener('click', function(){
    para.style.textDecoration= 'underline';
});