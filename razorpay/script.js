const details = JSON.parse(sessionStorage.getItem('amountPaid'))
console.log(details);
let total =Math.floor(details.amount*80.85);
    if(details != null){
      let fullname = details.name;
       console.log(fullname);
     // console.log( document.getElementById('details'))
      document.getElementById('userName').innerHTML = `Welcome TO MeShop ${fullname}`;
      document.getElementById('amount').innerHTML =`Total Amount : ₹ ${total}`
    }else{
      document.getElementById('userName').innerText = `Please Login`
    }