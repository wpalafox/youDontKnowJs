/* Write a program to calculate the total price of your phone purchase. 
You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. 
ou'll also buy accessories for each phone as long as your purchase amount is below your mental
 spending threshold. 

 After you've calculated your purchase amount, add in the tax, 
 then print out the calculated purchase amount, properly formatted. 

 Finally, check the amount against your bank account balance to see if you can afford it or not.

You should set up some constants for the "tax rate," "phone price," "accessory price," and 
"spending threshold," as well as a variable for your "bank account balance.""

You should define functions for calculating the tax and for formatting the price with a "$" 
and rounding to two decimal places.

Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) 
covered in "Input" earlier. You may prompt the user for their bank account balance, for example.
 Have fun and be creative!
*/


const PHONE_PRICE = 349.9;
const SPENDING_THRESHOLD = 2000;
const ACCESSORY_PRICE = 49.99; 

let bank_balance = 3000; 



var buyPhones = (bank_balance, PHONE_PRICE, ACCESSORY_PRICE, budget) => {
	let purchase_amount = 0 
	let phone_counter = 0
	let accessory_counter = 0 


	while(bank_balance>purchase_amount){
		//purchase a phone 
		
			purchase_amount += PHONE_PRICE
			phone_counter +=1 
	
		//CHecks to see if we can purchase an accessory 
		if(purchase_amount< SPENDING_THRESHOLD){
			purchase_amount += ACCESSORY_PRICE
			accessory_counter +=1 
		}
	  }
	//Calculate and add state tax
	purchase_amount += (purchase_amount*.0825);
	
	console.log(purchase_amount);

	//console.log(total_cost)
}

buyPhones(bank_balance, PHONE_PRICE, ACCESSORY_PRICE)










