const coding = ["muhd", "mustakeem", "kassar", "sabir", "ali"]
coding.forEach(function(val){
    // console.log(val);
})

const net = ["Airtel", "Vi", "Jio", "BSNL"]
net.forEach(function(num){
    // console.log(num);
})

const internet = {
    Mittal :"Airtel",
    Mundra : "Vi", 
    Ambani : "Jio", 
    TGI :  "BSNL"
}
for(const item in internet){
    // console.log(`${item} : is owner of ${internet[item]} company`)
}

