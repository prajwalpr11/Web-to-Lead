function beforesubmit(){
     let outputdate = document.querySelector(".outputdate");
     let inputdate = document.querySelector(".inputdate");
     console.log(outputdate.value, inputdate.value);

     let formatteddate = new Date(inputdate.value ) .toLocaleDateString("en-US");
     outputdate.value = formatteddate;
}