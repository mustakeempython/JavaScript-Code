const books = [
    {title : 'book1', genre : 'C', publish : 1972, edition : 2023},
    {title : 'book2', genre : 'C++', publish : 1997, edition : 2024},
    {title : 'book3', genre : 'Java', publish : 1995, edition : 2023},
    {title : 'book4', genre : 'Python', publish : 1991, edition : 2023},
    {title : 'book5', genre : 'JavaScript', publish : 1999, edition : 2022},
    {title : 'book6', genre : 'PHP', publish : 1994, edition : 2024}
]
let userBook = books.filter( (bk) => bk.genre === 'Java' )
userBook = books.filter( (bk) => {
    return bk.publish >= 1991 && bk.genre === 'Python'
} )
console.log(userBook)