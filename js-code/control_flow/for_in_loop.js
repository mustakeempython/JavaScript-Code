const myObj = {
    JS : 'JavaScript',
    PY : 'Python',
    CPP : 'C++',
    DS : 'Data Structure'
} 

for(const key in myObj){
    console.log(`${key} : shortcut is for ${myObj[key]}`);
}

const myArr = ['python', 'java', 'c++', 'html']

for(const key in myArr){
    console.log(myArr[key])
}