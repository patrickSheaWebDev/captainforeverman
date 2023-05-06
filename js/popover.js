
var popoverTriggerList = [].slice.call(
  document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  )
)
var popoverList = popoverTriggerList.map(
  function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  }
)

$(function () {
$("[data-toggle=popover]").popover({html:true})//add html as true to use html 
});
