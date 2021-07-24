//console.log('I work');

/* let firstMember = {
    id: 1,
    name: "Meseret",
    email: "negash4@gmail.com",
    favColor: "Tumeric",
    uniqItem: "9 Siblings",
    userImg: "https://avatars.githubusercontent.com/u/86808221?v=4"
}
let secondMember = {
    id: 2,
    name: "Grace",
    email: "rgs6090@gmail.com",
    favColor: "Green",
    uniqItem: "Twin",
    userImg:"https://avatars.githubusercontent.com/u/78558344?v=4"
}
let thirdMember = {
    id: 3,
    name: "Derek B",
    email: "dbaylor@gmail.com",
    favColor: "Green",
    uniqItem: "Excelent Vision",
    userImg: "https://avatars.githubusercontent.com/u/83030603?v=4"
}
let fourthMember = {
    id: 4,
    name: "Derek M",
    email: "laxmalone@gmail.com",
    favColor: "Blue",
    uniqItem: "Arthritic Knee's",
    userImg: "https://avatars.githubusercontent.com/u/77118878?v=4"
} */

let group5 = [
    {
        id: 1,
        name: "Meseret",
        favNumber: 12,
        email: "negash4@gmail.com",
        favColor: "Tumeric",
        uniqItem: "9 Siblings",
        userImg: "https://avatars.githubusercontent.com/u/86808221?v=4",
    },
    {
        id: 2,
        name: "Grace",
        favNumber: 56,
        email: "rgs6090@gmail.com",
        favColor: "Green",
        uniqItem: "Twin",
        userImg:"https://avatars.githubusercontent.com/u/78558344?v=4",
    },
    {
        id: 3,
        name: "Halie",
        favNumber: 33,
        email: "halie@email.com",
        favoriteColor: "green",
        somethingUnique: "allergic to advil",
        userImg: "https://avatars.githubusercontent.com/u/86806913?v=4", 
    },
    {
        id: 4,
        name: "Klay",
        favNumber: 56,
        email: "klaythacker@email.com",
        favoriteColor: "purple",
        somethingUnique: "has hearing loss",
        userImg: "https://avatars.githubusercontent.com/u/86626953?v=4",
    }
]


// const filterFavColor = (array, color) => {
//         return array.filter(taco => taco.favoriteColor === color)
// }

// const filterFavNum = (array, number) => {
//         return array.filter(taco => taco.favNumber === number)
// }

// console.log(filterFavNum (group5, 56));



//console.log(filterAll (group5, "favNumber", 56));

const filterAll = (array = null, key = null, item = null) => { //Setting arguments to null helps programers find errors
    if (array === null, key === null, item === null) {
         return "Need arguments passed."
    }else{
        return array.filter(taco => taco[key] === item); 
    }   
}

console.log(filterAll(group5));