/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Mike",
            last: "Williams",
            age: 35,
            description: "He is a great and funny guy",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg"
        },
        {
            id: 2,
            first: "John",
            last: "Smith",
            age: 29,
            description: "John loves music and games.",
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        {
            id: 3,
            first: "Jena",
            last: "Barkley",
            age: 27,
            description: "She is a party girl and also loves hooliday",
            thumbnail: "http://i.imgur.com/4EMtxHB.png"
        }
    ]
}
