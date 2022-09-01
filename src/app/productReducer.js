
let initialState = {
    products: [
          {
            categoryAssociation: "Food",
            displayName: "Apple",
            description: "A juicy crispy fruit you can pick from a tree.",
            price: "$1",
            inventoryCount: 522,
            image: "https://source.unsplash.com/random?apple"

        },
        {
            categoryAssociation: "Food",
            displayName: "Orange",
            description: "If you didn't know, it's not just a color... it's a fruit.",
            price: "1$",
            inventoryCount: 97,
            image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F01%2F03%2FGettyImages-1205638014-2000.jpg&q=60"

        },
        {
            categoryAssociation: "Food",
            displayName: "Strawberry",
            description: "soft, sweet, bright red berries",
            price: "1$",
            inventoryCount: 150,
            image: "https://img.lovepik.com/background/20211029/medium/lovepik-strawberry-mobile-phone-wallpaper-background-image_400297857.jpg"

        },
        {
            categoryAssociation: "Food",
            displayName: "Mango",
            description: "Very delicious fruit",
            price: "1$",
            inventoryCount: 140,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudIYsIQBogJB0lXrmOC7herozWDUnrxzMmQ&usqp=CAU"

        },
        {
            categoryAssociation: "Food",
            displayName: "Watermelon ",
            description: "a sweet and refreshing low calorie summer snack",
            price: "5$",
            inventoryCount: 100,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcXQZKo9VNqNEjP95m-PTE8I8HYz9eLFqPdg&usqp=CAU"

        },
        {
            categoryAssociation: "Electronics",
            displayName: "TV ",
            description: "Watch your favorite shows and channels with this new 50 TV!",
            price: "500$",
            inventoryCount: 40,
            image: "https://source.unsplash.com/random?TV"

        },
        {
            categoryAssociation: "Electronics",
            displayName: "NES Nintendo Entertainment System",
            description: "8-bit third-generation video game console.",
            price: "150$",
            inventoryCount: 98,
            image: "https://source.unsplash.com/random?Nintendo Entertainment System"

        },
        {
            categoryAssociation: "Electronics",
            displayName: "Record Player",
            description: "Some say it's the only way to listen to music.",
            price: "145$",
            inventoryCount: 70,
            image: "https://source.unsplash.com/random?Record Player"
        },
        {
            categoryAssociation: "Electronics",
            displayName: "Laptop",
            description: "laptops with 10 cameras",
            price: "550$",
            inventoryCount: 170,
            image: "https://source.unsplash.com/random?laptop"
        },
        {
            categoryAssociation: "Electronics",
            displayName: "Phone",
            description: "The ability to sync more than one email account to a device , Embedded memory",
            price: "550$",
            inventoryCount: 170,
            image: "https://source.unsplash.com/random?iphone"
        },
        {
            categoryAssociation: "Games",
            displayName: "Connect Five",
            description: "It's like Connect Four you know.",
            price: "15$",
            inventoryCount: 78,
            image: "https://source.unsplash.com/random?Connect Five game"
        },
        {
            categoryAssociation: "Games",
            displayName: "Metroid",
            description: "Defend the galaxy from Space Pirates as Samus the bounty hunter",
            price: "49.99$",
            inventoryCount: 90,
            image: "https://source.unsplash.com/random?Metroid"
        },
        {
            categoryAssociation: "Games",
            displayName: "Backgammon",
            description: "Role dice to advance checkers to the finish.",
            price: "9.99$",
            inventoryCount: 83,
            image: "https://source.unsplash.com/random?Backgammon"
        },
        {
            categoryAssociation: "Games",
            displayName: "Super Mario Bros 3",
            description: "Everyone's favorite plumber back in action!",
            price: "550$",
            inventoryCount: 170,
            image: "https://source.unsplash.com/random?Super Mario Bros 3"
        },
        {
            categoryAssociation: "Games",
            displayName: "Castlevania",
            description: "Spooky spooky vampires.",
            price: "19.9$",
            inventoryCount: 323,
            image: "https://source.unsplash.com/random?Castlevania"
        },
        {
            categoryAssociation: "Fashion",
            displayName: "Top",
            description: "Trendy Queen Women’s Fall Long Sleeve Peplum Tunic Tops Casual V Neck Flowy Tiered T Shirts Babydoll Ruffle Swing Blouse",
            price: "19.9$",
            inventoryCount: 323,
            image: "https://source.unsplash.com/random?Top shirt"
        },
        {
            categoryAssociation: "Fashion",
            displayName: "Skirt",
            description: "Bellivera Womens High Waist Faux Suede Leather Mini A-Line Short Bodycon Skirt for Spring and Fall",
            price: "19.9$",
            inventoryCount: 323,
            image: "https://source.unsplash.com/random?skirt"
        },
        {
            categoryAssociation: "Fashion",
            displayName: "Dress",
            description: "Drimmaks Women's Summer Casual Dress Florals Buttons Down Ruched Sweetheart Neck Sleeveless Midi Sundress",
            price: "19.9$",
            inventoryCount: 323,
            image: "https://source.unsplash.com/random?dress"
        },
        
    ],
}
// eslint-disable-next-line import/no-anonymous-default-export
export default  (state = initialState, action) => {
    const {
        type,
        payload
    } = action;
    switch (type) {
        case 'Active_Catagory':
            let products = state.products.filter((data) => {
                if (data.categoryAssociation === payload) {
                    return data;
                }
                return null;
            })
            return {products:products};
            case 'RESET':
                return initialState;
            default:
                return state;
    }
}


//actions

export const activeCatagory = (name) => {
    console.log(name)
    return {
        type: 'Active_Catagory',
        payload: name
    }
}
export const reset = () => {
    return {
        type: 'RESET',
    }
}