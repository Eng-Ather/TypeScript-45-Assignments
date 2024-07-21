// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let arr:string[] = ["bilal" ,"ather" , "sufyan"];
arr[1] = "Muhammad"
arr.unshift("malik")
// console.log(arr.length/2 )
arr.splice(arr.length/2 ,0 , "hassan")
arr.push("ather bahi GIAIC")
console.log(arr)
for(let i = 0 ; i < arr.length ; i++){
    console.log(`${arr[i]} you are inviting to lunch`)
}