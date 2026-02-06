$(document).ready(function(){
   
    $("#kfcvv").on("focus", function(){
       var ic = $("#anaKKarti #kart #kart_ici");
       ic.addClass("kartDon");
    });


    $("#kfcvv").on("focusout", function(){  
        var ic = $("#anaKKarti #kart #kart_ici");
        ic.removeClass("kartDon");
    });


    $("#kfno").on("input" , function(){
       var deger=$(this).val();
       deger= deger.replace(/\D/g, "");
       $(this).val(deger);

       let yd=""; 
       for(let i=0; i<deger.length; i++){
            if(i!=0 && i%4==0)
                yd +=" ";

            yd +=deger[i];
       }

       $(this).val(yd);



        //card number section
        let divler=$("#kno .digit");

        for(let i=0; i<divler.length;i++){
            if(i==4 || i==9 || i==14)
                continue;

            if(yd[i]==undefined){
                divler.eq(i).children("span").text("#");

            }else if(divler.eq(i).children("span").last().text()!=yd[i]){
                //divler.eq(i).children("span").text(yd[i]);
                divler.eq(i).children("span").addClass("yokOl");
                divler.eq(i).append("<span class='varOl'>"+yd[i]+"</span>");

                setTimeout(function(){
                    divler.eq(i).children(".yokOl").remove();
                },300);

                setTimeout(function(){
                    divler.eq(i).children("span").removeClass("varOl");
                },10);

            }
        }
    });

    //expiration date section 

    $("#kfay").on("change", function(){
        let deger = $(this).val();

        if(deger == ""){
            deger = "MM"; 
        }

        $("#ktar .kay span").text(deger);
    });

    $("#kfyil").on("change", function(){
        let deger = $(this).val();
        
        if(deger == ""){
            deger = "YY";
        }
        
        $("#ktar .kyil span").text(deger);
    });

    $("#kfcvv").on("input", function(){
        let deger = $(this).val();
        
        deger = deger.replace(/\D/g, ""); 
        $(this).val(deger);

        if(deger == "") {
            $("#cvvMetin").text("CVV");
        } else {
            $("#cvvMetin").text(deger);
        }
    });

    //focuss events
    $("#kfno, #kfad, #kfay, #kfyil").on("focus",function(){
        let id= $(this).attr("id");
        let eklenecekClass="";
        switch(id)
        {
            case"kfno": eklenecekClass="knoIsaretci"; break;
            case"kfad": eklenecekClass="kadIsaretci"; break;
            case"kfyil": case"kfay": eklenecekClass="kTarihIsaretci"; break;
        }
        $(".isaretci").addClass(eklenecekClass);

    });
    
    $("#kfno, #kfad, #kfay, #kfyil").on("focusout",function(){
        let id= $(this).attr("id");
        let eklenecekClass="";
        switch(id)
        {
            case"kfno": eklenecekClass="knoIsaretci"; break;
            case"kfad": eklenecekClass="kadIsaretci"; break;
            case"kfyil": case"kfay": eklenecekClass="kTarihIsaretci"; break;
        }
        $(".isaretci").removeClass(eklenecekClass);
    });

    //card name section
    $("#kfad").on("input",function(){

        let deger= $(this).val();
        deger= deger.replace(/\d/g,"");
        $(this).val(deger);

        let divler=$("#kad .kis");

        let uzunluk=(deger.length> divler.length)?deger.length:divler.length; //ask

        if(deger.length>0){
            $("#kad .tutucu").remove();
        }



        for(let i=0; i<uzunluk; i++){
            let karakter=deger[i];
            if($("#kad").children(".kis").eq(i).html()==undefined){


                if(karakter==" ")
                    $("#kad").append('<div class="kis" style="padding-left:12px;">'+karakter+'</div>' );
                else
                    $("#kad").append('<div class="kis">'+karakter+'</div>' );



            }else if(karakter==undefined){
                $("#kad").children(".kis").eq(i).remove();
            }
        }

        if(deger.length==0){
            $("#kad").html('<div class="kis tutucu">İsim Soyisim</div>' ); 
              }

    });

});