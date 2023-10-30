//Learning Creation of Promises by Ecommerce website example


/*Suppose we are building an Ecom website. First API call is Create order takes place then proceed to payment takes place, 
Then show order summary, at last updateWallet happens.*/

const card=["purse","shoes","mercedes","lilamani"];


createOrder(card)
    .then(function (orderId){
        console.log(orderId);
        return orderId
    })
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    })




//Producer Part

//Creating createOrder function
function createOrder(orderId){
    const pr=new Promise(function(resolve, reject){

        //checking if card is valid or not
        if(!validate(card)){
            const err="Card is not valid";
            reject(err);
        }

        //if card is valid
        const orderId="12345";
        if(orderId){
            resolve(orderId);
        }


    })
    return pr;
}



//Creating proceedToPayment function
function proceedToPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve("Payemnet Successful")
    })
}



//Creating validate function
function validate(card){
    return false;
}