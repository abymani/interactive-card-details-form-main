

$(document).ready(function(){
    
    //handling click event when confirm is clicked
    $("#confirm").click(function(){
        let error = true;

        //card holder name validation
        let name = $("#name").val();
        if( name=== ""){
            $(".error-name").css("display","block");
            error=false;
        }
        //card number validation
        let number = $("#number").val();
        number = number.replace(/\s/g, ''); //spaces removed
        if(number==="" ||number.length !==16 ){
            $(".error-number").css("display","block");
            error=false;
        }

        //expiry date validation
        let month= $("#month").val();
        let year = $("#year").val();
        if(month == "" || year == "" || month > 13 ){
            $(".error-date").css("display","block");
            error= false;
        }

        //cvc number validation
        let cvc= $("#cvc").val();
        if(cvc==="" ||cvc.length !==3){
            $(".error-cvc").css("display","block");
        }      

        //setting thankyou in place of form and update card on successfull form validation
        if(error==true){
            $(".content-container").addClass("active");
            updateCards(name,number,month + "/" + year,cvc);
        }
        });

        // Updating cards after form validation 
    function updateCards(name,number,expDate,cvc){
            $("#card-name").text(name);           
            $("#card-number").text(number.replace(/\d{4}(?=.)/g, '$& '));
            $("#card-exp-date").text(expDate);
            $("#card-cvc").text(cvc);
    }
    // Handling focus event on input fields
    $("input").focus(function(){
        $(this).next().css("display","none");
    });    
    //handling month and year seperatly as there error message is not next to them
    $("#month,#year").focus(function(){
        $(".error-date").css("display","none");
    });    

    //checking for non number values while entering card number
    $("#number").keypress(function (e) {
        if ((e.which < 48 || e.which > 57) && (e.which !== 8) && (e.which !== 0) && (e.which !== 32) ) {
            return false;
        }
        
        return true;
    });
    
    //checking for non number values while entering expiry date and cvc
    $("#month").keypress(function (e) {

        if ((e.which < 48 || e.which > 57) && (e.which !== 8) && (e.which !== 0) || $(this).val().length > 1) {
            return false;
        }
    
        return true;
    });
    $("#year").keypress(function (e) {

        if ((e.which < 48 || e.which > 57) && (e.which !== 8) && (e.which !== 0) || $(this).val().length > 1 ) {
            return false;
        }
    
        return true;
    });
    $("#cvc").keypress(function (e) {

        if ((e.which < 48 || e.which > 57) && (e.which !== 8) && (e.which !== 0) || $(this).val().length > 2) {
            return false;
        }
    
        return true;
    });

    //handling continue button click event 
    $(".continue-btn").click(function(){
        resetValues();
        $(".content-container").removeClass("active");
      });
    
      //reseting to defulat values
    function resetValues(){
        $("#name").val("");
        $("#number").val("");
        $("#month").val("");
        $("#year").val("");
        $("#cvc").val("");

        //setting default values of cards
        $("#card-name").text("Jane Appleseed");
        $("#card-number").text("0000 0000 0000 0000");
        $("#card-exp-date").text("00/00");
        $("#card-cvc").text("000");
    }

    


  });