const tinderUser = {}

tinderUser.id = "R15"
tinderUser.name = "Muhd"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const rockUser = {
    email: "muhd@gamil.com",
    fullName: {
        userFullName: {
            firstName: "muhd",
            lastName: "kassar"
        }
    }
}

// console.log(rockUser.fullName.userFullName)

const obj1 = {2:"high", 4:"low"}
const obj2 = {1:"normal", 3:"medium"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('thand'))

const course = {
    courseName: "English Speaking",
    coursePrice: 2000,
    coursePeriod: "Lifetime",
    courseTeacher: "Adnan"
}

const {courseTeacher: ct} = course
console.log(ct)
