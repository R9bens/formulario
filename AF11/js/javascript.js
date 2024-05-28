function valida_envia() {
        var f = valida_vacios();
        var f1 = valida_nombre();
        var f2 = valida_edad();
        var f3 = valida_tlf();
        var f4 = valida_nif();
        var f5 = valida_mail();

        if (f && f1 && f2 && f3 && f4 && f5) {
            alert("Nombre: " + document.formulario1.nombre.value +"\nEdad: " + document.formulario1.edad.value +"\nTelefono: " + document.formulario1.tele.value +"\nNIF: "+ document.formulario1.nif.value + "\nMail:"+ document.formulario1.mail.value)
            document.formulario1.submit()
        }
    }
    function valida_vacios() {
        if (document.formulario1.nombre.value.length==0 || document.formulario1.edad.value.length==0 || document.formulario1.tele.value.length==0  || document.formulario1.nif.value.length==0  || document.formulario1.mail.value.length==0){
        alert("Tienes que rellenar todos los campos del formulario");
        return false;
        }
        else {
            return true;
        }
    }
    function valida_nombre(){
        if (document.formulario1.nombre.value.length>70) {
        alert("El nombre y apellidos tiene un maximo de 70 caracteres.");
        document.formulario1.nombre.focus();
        return false;
    }
        else {
            return true;
        }
    }
    function valida_edad() {
        if (isNaN(document.formulario1.edad.value) ||document.formulario1.edad.value<1 || document.formulario1.edad.value>100) {
        alert("La edad tiene que ser un número entre 1 y 100");
        document.formulario1.edad.focus();
        return false;
    }
        else {
            return true
        }
    }
    function valida_tlf() {
        if (document.formulario1.tele.value.length!=9 || (isNaN(document.formulario1.tele.value))) {
        alert("El telefono tiene que tener 9 números.")
        document.formulario1.tele.focus();
        return false;
    }
        else {
            return true;
        }
    }
    function valida_nif() {
        var val = true
        var contdni = 0;
        var contdni2 = 0;
        var letras = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m"];
        if (document.formulario1.nif.value.length!=9) {
        alert("El NIF tiene que tener 9 caracteres.")
        document.formulario1.nif.focus();
        val = false
    }

    for (var i = 0; i < 8; i++) {
        if (isNaN(document.formulario1.nif.value[i])) {
            contdni++;
        }
        
    }
    for (var i =0; i<letras.length; i++) {
        if (letras[i] == document.formulario1.nif.value.slice(-1)) {
            contdni2++;
        }
    }
   
    if (contdni!=0 || contdni2!=1){
        alert("El NIF tiene que tener 8 numeros y una letra al final");
        document.formulario1.nif.focus();
        val = false
    }
    if (val) {
        return true;
    }
    else {
        return false
    }
    }
    function valida_mail() {
        var cont = 0;
        var vali = true;
        for (var i = 0; i < document.formulario1.mail.value.length; i++) {
        if (document.formulario1.mail.value[i] == "@") { 
            cont++;
            if (i == 0 || i ==document.formulario1.mail.value.length-1){
            alert("El @ del coreo no puede ser el primer ni el ultimo caracter.");
            document.formulario1.mail.focus();
            vali = false
            }
            
        }
        }
        if (cont !==1) {
         alert("El mail tiene que llevar un @");
         document.formulario1.mail.focus();
         vali = false
        }
        if (vali) {
            return true;
        }
        else {
            return false;
        }
    }