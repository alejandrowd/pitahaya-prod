
// slider en agencia

var slideIndex=1;
var myTimer;
var tiempoSegundos = 10000;

window.addEventListener("load",function()
{
  clearInterval(myTimer);
  showSlides(slideIndex);
  myTimer=setInterval(function()
  {
    plusSlides(1)
  },tiempoSegundos)
});


  function plusSlides(a)
  {
    clearInterval(myTimer);
    showSlides(slideIndex+=1);
    if(a===-1)
    {
      myTimer=setInterval(function()
      {plusSlides(a+2)},tiempoSegundos)
    }
      else
      {
        myTimer=setInterval(function()
        {
          plusSlides(a+1)},tiempoSegundos)
      }
    }



    function prevSlides(a)
    {
      clearInterval(myTimer);
      showSlides(slideIndex-=1);
      if(a===-1)
      {
        myTimer=setInterval(function()
        {
          plusSlides(a+2)},tiempoSegundos)
        }
        else
        {
        myTimer=setInterval(function()
        {
          plusSlides(a+1)
        },tiempoSegundos)
      }
    }



    function currentSlide(a)
    {
      clearInterval(myTimer);
      this.showSlides(slideIndex=a);
      if(a===-1)
      {
        myTimer=setInterval(function()
        {
          this.plusSlides(a+2)},tiempoSegundos)
        }
        else
        {
          myTimer=setInterval(function()
          {
            this.plusSlides(a+1)},tiempoSegundos)
          }
        }



        function showSlides(d)
        {
          var a;
          var b=document.getElementsByClassName("mySlides");
          var c=document.getElementsByClassName("dot");
          if(d>b.length){
            slideIndex=1
          }
            if(d<1)
            {
              slideIndex=b.length
            }
            for(a=0;a<b.length;a++)
            {
              b[a].style.display="none"
            }
            for(a=0;a<c.length;a++)
            {
              c[a].className=c[a].className.replace(" active","")
            }
            b[slideIndex-1].style.display="block";
            c[slideIndex-1].className+=" active"
          }



          function showPhotoSlide(a){
            if(a.target.parentElement.children[0].style.display===""&&a.target.parentElement.children[1].style.display==="")
            {
              a.target.parentElement.children[2].innerText="AFTER";
              a.target.parentElement.children[0].setAttribute("style","display: none !important");
              a.target.parentElement.children[1].setAttribute("style","display: block !important")
            }
            else
            {
              if(a.target.parentElement.children[0].style.display==="none"||a.target.parentElement.children[0].style.display==="none !important")
              {
                a.target.parentElement.children[2].innerText="BEFORE";
                a.target.parentElement.children[1].setAttribute("style","display: none !important");
                a.target.parentElement.children[0].setAttribute("style","display: block !important")
              }
              else
              {
                a.target.parentElement.children[2].innerText="AFTER";
                a.target.parentElement.children[0].setAttribute("style","display: none !important");
                a.target.parentElement.children[1].setAttribute("style","display: block !important")
              }
            }
          };

// fin de slider


// area dinamica al mostrar servicios

var servicioIndex=1;


window.addEventListener("load",function()
{
  showServicio(servicioIndex);
});

    function currentServicio(servicio)
    {
      this.showServicio(servicioIndex=servicio);

        }

        function showServicio(d)
        {
          var a;
          var $caption=document.getElementsByClassName("output-servicios");
          var $showService=document.getElementsByClassName("opcion");
          if(d>$caption.length){
            servicioIndex=1
          }
            if(d<1)
            {
              servicioIndex=$caption.length
            }
            for(a=0;a<$caption.length;a++)
            {
              $caption[a].style.display="none"
            }
            for(a=0;a<$showService.length;a++)
            {
              $showService[a].className=$showService[a].className.replace(" activo","")
            }
            $caption[servicioIndex-1].style.display="flex";
            $showService[servicioIndex-1].className+=" activo"
          }

          function showDescriptionService(a){
            if(a.target.parentElement.children[0].style.display===""&&a.target.parentElement.children[1].style.display==="")
            {
              a.target.parentElement.children[2].innerText="AFTER";
              a.target.parentElement.children[0].setAttribute("style","display: none !important");
              a.target.parentElement.children[1].setAttribute("style","display: block !important")
            }
            else
            {
              if(a.target.parentElement.children[0].style.display==="none"||a.target.parentElement.children[0].style.display==="none !important")
              {
                a.target.parentElement.children[2].innerText="BEFORE";
                a.target.parentElement.children[1].setAttribute("style","display: none !important");
                a.target.parentElement.children[0].setAttribute("style","display: block !important")
              }
              else
              {
                a.target.parentElement.children[2].innerText="AFTER";
                a.target.parentElement.children[0].setAttribute("style","display: none !important");
                a.target.parentElement.children[1].setAttribute("style","display: block !important")
              }
            }
          };
// fin de servicios
