window.onload = function()
{
var button = document.getElementById("Button");
window.onscroll = function() 
{
    scrollFunction()
};
    
function scrollFunction() 
{
        if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
          button.style.display = "block";
        } 
        else 
        {
          button.style.display = "none";
        }
    }

    function topFunction()
      {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}
AOS.init({
    duration: 1200,
  })
}