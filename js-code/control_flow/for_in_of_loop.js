const arr = [2, 3, 5, 6, 8, 9]

for(const num of arr){
    // console.log(`Value of num ${num}`)
}

const myName = "Muhd Mustakeem"

for(const name of myName){
    // console.log(`Value of name is ${name}`)
}

// map

const map = new Map()
map.set('IN', 'India')
map.set('UK','United Kingdom')
map.set('UAE','United Arab oa Amirat')
map.set('USA','Unoted State of America')
// console.log(map)

for(const [key, value] of map){
    console.log(key, ':-', value);
}