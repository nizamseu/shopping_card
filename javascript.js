
var amount=0;
const iphone=document.getElementById("pluse");

iphone.addEventListener("click",function(){

    
    // const input_values=document.getElementById("input_value").value;
    // const input_valuesNum=parseFloat(input_values);

   const input_valuesNum= converter("input_value");

     // var i=1;
    // if(i>0)
    //     {
    //         document.getElementById("input_value").value=input_valuesNum+i;
    //         i++;
    //     }
    // document.getElementById("subtotal").innerText=(input_valuesNum)*2
    increment("input_value",input_valuesNum);

    
// Subtotal total and VAT calculation And update 

    const input_again= converter("input_value");
    const CoverValueagain=converter("cover_value");
    document.getElementById("subtotal").innerText=( CoverValueagain*59)+(input_again*1219);
    const subtotal_1=document.getElementById("subtotal").innerText=( CoverValueagain*59)+(input_again*1219);
    document.getElementById("vat").innerText=Math.round(subtotal_1*.15);
    const vat_1=Math.round(subtotal_1*.15);
   document.getElementById("total").innerText=subtotal_1+ vat_1;


})



const btn_minus =document.getElementById("minus");
btn_minus.addEventListener("click",function(){
    // const input_values=document.getElementById("input_value").value;
    // const input_valuesNum=parseFloat(input_values);
    
    const input_valuesNum=converter("input_value");
    // var j=1;
    // if(j>0){
    //     document.getElementById("input_value").value=input_valuesNum-j;
    //     j=1;
    // }
    decrement("input_value",input_valuesNum);

    
// Subtotal total and VAT calculation And update 
    const input_again_1=converter("input_value");
    const CoverValueagain=converter("cover_value");
    document.getElementById("subtotal").innerText=(CoverValueagain*59)+(input_again_1*1219);
    const subtotal_2=document.getElementById("subtotal").innerText=( CoverValueagain*59)+(input_again*1219);
    document.getElementById("vat").innerText=Math.round(subtotal_2*.15);
    const vat_2=Math.round(subtotal_2*.15);
   document.getElementById("total").innerText=subtotal_2+ vat_2;
   


})



const coverPluse=document.getElementById("cover_plus");
coverPluse.addEventListener("click",function(){
    const CoverValueNum=converter("cover_value");
    increment("cover_value",CoverValueNum);

  


    // Subtotal total and VAT calculation And update 
    const CoverValueagain=converter("cover_value");
    const input_valuesNum= converter("input_value");
    document.getElementById("subtotal").innerText= (input_valuesNum*1219)+(CoverValueagain*59);

    const subtotal_1= document.getElementById("subtotal").innerText= (input_valuesNum*1219)+(CoverValueagain*59);
    document.getElementById("vat").innerText=Math.round(subtotal_1*.15);
    const vat_1=Math.round(subtotal_1*.15);
   document.getElementById("total").innerText=subtotal_1+ vat_1;
})

const coverMinus=document.getElementById("cover_minus");
coverMinus.addEventListener("click",function(){
   const inputValueNum= converter("cover_value");
   decrement("cover_value",inputValueNum);

   
// Subtotal total and VAT calculation And update 
    const input_again_3= converter("cover_value");
    const input_valuesNum= converter("input_value");
    document.getElementById("subtotal").innerText=(input_valuesNum*1219)+(input_again_3*59);

    const subtotal_2=document.getElementById("subtotal").innerText=(input_valuesNum*1219)+(input_again_3*59);
    document.getElementById("vat").innerText=Math.round(subtotal_2*.15);
    const vat_2=Math.round(subtotal_2*.15);
   document.getElementById("total").innerText=subtotal_2+ vat_2;
})


// for iphone 
 const iphoneAmount=document.getElementById("input_value").value;
const iphoneAmountNum=parseFloat(iphoneAmount);
const iphonePrice=iphoneAmountNum*1219;

// for cover
const coverAmount=document.getElementById("cover_value").value;
const coverAmountNum=parseFloat(coverAmount);
const coverPrice=coverAmountNum*59;

const subTotalAmount=iphonePrice+coverPrice;


// vat calcutation
const withVat=subTotalAmount*1.15;
const onlyVat=Math.round(subTotalAmount*.15)

// total Price
const totalAmount=Math.round(withVat);



// Accounting 
    
    // document.getElementById("subtotal").innerText=subTotalAmount;
    document.getElementById("vat").innerText=onlyVat;
    document.getElementById("total").innerText=totalAmount;

//deleting item
const deleteItem_1=document.getElementById("delete_item_1");
deleteItem_1.addEventListener("click",function(){
    const itemOne=document.getElementById("item_one");
    itemOne.style.display="none";
})


const deleteItem_2=document.getElementById("delete_item_2");
deleteItem_2.addEventListener("click",function(){
    const itemTwo=document.getElementById("item_two");
    itemTwo.style.display="none";
})


// converter Function
function converter(id){
    const input_values=document.getElementById(id).value;
    const input_valuesNum=parseFloat(input_values);
    return input_valuesNum;
}

// Add Function
function increment(id_number,current_item){
     var i=1;
    if(i>0)
        {
            document.getElementById(id_number).value=current_item+i;
            i++;
        }
  
}

// Minus Function
function decrement (id_number,current_item){
    var j=1;
    if(j>0){
        document.getElementById(id_number).value=current_item-j;
        j=1;
    }
}
const check_hide=document.getElementById("check");
check_hide.style.display="none";

const checkOut=document.getElementById("check_out");
checkOut.addEventListener("click",function(){
    const fullPage=document.getElementById("Full_page");
    fullPage.style.display="none"
    check_hide.style.display="block";
})
const backIn=document.getElementById("back");
backIn.addEventListener("click",function(){
    const fullPage=document.getElementById("Full_page");
    fullPage.style.display="block";
    check_hide.style.display="none";

})
