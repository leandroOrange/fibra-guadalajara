"use strict";$(document).on("submit","form",function(){var t=$(this);if(t.find(".form-status").hide(),t.find(".form-status .error-text").html("Debe ingresar un numero de 10 digitos."),10==t.find('input[name="tel"]').val().length){$(".fixed-send-form").addClass("show");var e={serviceToken:theToken,serviceAction:"c2c",contentUrl:window.location.href,contactData:{phone:$(this).find('input[name="tel"]').val()}},o={method:"POST",url:"https://megacable.convertia.com/public/integration/process",contentType:"application/json",dataType:"json",data:JSON.stringify(e),async:!0,crossDomain:!0,processData:!1};$.ajax(o).done(function(e){if(e.status){console.log("done");var o=window.location.search;return o=o.replace("page=entry","page=typ"),window.location.href="gracias.php"+o,!1}console.log("error"),t.find(".form-status .error-text").html("Error interno: "+e.error),t.find(".form-status").show(),$(".fixed-send-form").removeClass("show")})}else t.find(".form-status").show();return!1});