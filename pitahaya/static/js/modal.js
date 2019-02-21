//modal

var modal=document.getElementById('modal');
var btnModal = document.getElementById('btnModal');
var closeModal= document.getElementById('close');

btnModal.onclick = function()
{
  modal.style.display = "block";
}

closeModal.onclick = function()
{
  modal.style.display = "none";
}

window.onclick = function(afuera)
{
  if (afuera.target == modal)
  {
    modal.style.display = "none";
  }
}



// end modal
