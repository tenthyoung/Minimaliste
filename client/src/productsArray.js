let productsArray = [
    {
        productid: '18237401298',
        productName: "Baby",
        imageName: "baby.jpeg",
        price: 200,
        description: "Shipments take 9 months minimum.",
        category: 'essentials'
    },
    {
        productid: '13249172364',
        productName: "Travel Backpack",
        imageName: "backpack.jpg",
        price: 450,
        description: "This elegant bag was made out of pure camel hair.",
        category: 'essentials'
    },
    {
        productid: '18293u412347',
        productName: "Half Dozen Eggs",
        imageName: "eggs.jpg",
        price: 20,
        description: "These eggs are completely gluten-free. 100% organic. Pasture raised. Protein-free eggs.",
        category: 'essentials'
    },
    {
        productid: '9817234',
        productName: "Siebermanns Gold Watch",
        imageName: "goldWatch.jpg",
        price: 3999,
        description: "Die Technik dieser Golduhr ist so gut, dass wir diese Beschreibung auf Deutsch machen mussten.",
        category: 'essentials'
    },
    {
        productid: '19243y7',
        productName: "Brass Clock",
        imageName: "brassClock.jpg",
        price: 300,
        description: "This brass clock was manufactured with the finest steel in Canada.",
        category: 'essentials'
    },
    {
        productid: 'wg1134',
        productName: "Cactus",
        imageName: "cactus.jpg",
        price: 75,
        description: "9 out of 10 people who bought this cactus said it improved their dating life.",
        category: 'essentials'
    },
    {
        productid: '1fr234g',
        productName: "Konaha Bed",
        imageName: "bed.jpg",
        price: 1200,
        description: "This bed was hand crafted by the Swedish. The wood was imported from the Italians.",
        category: 'furniture'
    },
    {
        productid: '1gwreg32451',
        productName: "Neko Bed",
        imageName: "bed2.jpeg",
        price: 2500,
        description: "This bed was made out of pure duck feathers. The Queen of England slept on it.",
        category: 'furniture'
    },
    {
        productid: 'qfdg12354',
        productName: "Empress Bed",
        imageName: "bed3.jpeg",
        price: 3000,
        description: "Empress your guests with the Empress Bed 2000. Massages randomly throughout the night. Fully equipped with voice commands.",
        category: 'furniture'
    },
    {
        productid: 'sdfg31425',
        productName: "Snow Rocking Chair",
        imageName: "whiteRockingChair.jpg",
        price: 400,
        description: "A small rocking chair to use whilst in the snow.",
        category: 'furniture'
    },
    {
        productid: '1234dsfg145',
        productName: "Armani Chair",
        imageName: "chair.jpg",
        price: 75,
        description: "This is one of our premium chairs. Hand-crafted by the finest wood workers in Ohio.",
        category: 'furniture'
    },
    {
        productid: 'afh2345',
        productName: "Drawer Table",
        imageName: "drawertable.jpg",
        price: 75,
        description: "Made with the finest mahogany in the land.",
        category: 'furniture'
    },
    {
        productid: 'wdgfn341',
        productName: "Large Succulent",
        imageName: "bigPlant.jpeg",
        price: 50,
        description: "This radioactive succulent plant weighs 500 lbs. Shipping and Handling is $1000 extra. Minimaliste is not liable for any radioactive symptoms.",
        category: 'homedecor'
    },
    {
        productid: 'agrvbc32y5',
        productName: "Wooden Fruit Bowl",
        imageName: "fruitBowl.jpg",
        price: 40,
        description: "Are you tired of losing your fruit? Need we say more?",
        category: 'homedecor'
    },
    {
        productid: 'sfgn23t4',
        productName: "Black Wall Clock",
        imageName: "clock.jpg",
        price: 99,
        description: "An exquisite addition to your home. Soothe your guests with this minimal design.",
        category: 'homedecor'
    },
    {
        productid: 'dbfw435',
        productName: "iClock Mini",
        imageName: "clockStand.jpeg",
        price: 999,
        description: "The iClock Mini has revolutionized the clock industry.  With pure innovation this elegant design features the time like no other clock has ever done before.",
        category: 'homedecor'
    },
    {
        productid: 'sdfg3425y',
        productName: "Lamp",
        imageName: "lamp.jpg",
        price: 790,
        description: "A delicate lamp made out of 1mm glass. Completely safe and practical.",
        category: 'homedecor'
    },
    {
        productid: '2435sdfbh3',
        productName: "Pill Lamp",
        imageName: "pillLamp.jpg",
        price: 600,
        description: "Our pill lamps are on the most high demand in the market. Lightbulb is included with an extra fee of $500. Terms and Conditions may apply.",
        category: 'homedecor'
    },
    {
        productid: 'wert32456',
        productName: "Tea Cup",
        imageName: "claycup.jpg",
        price: 30,
        description: "This clay cup was hand molded by the finest potterers in Japan.",
        category: 'pottery'
    },
    {
        productid: '1245bfsj34',
        productName: "Clay Vase",
        imageName: "clayVase.jpg",
        price: 50,
        description: "Our clay vases are made with the best sand in the industry.",
        category: 'pottery'
    },
    {
        productid: 'wergwe651234',
        productName: "Bedazzled Cup",
        imageName: "cup.jpg",
        price: 35,
        description: "This cup was bedazzled by a group of our finest kindegartner employees.",
        category: 'pottery'
    },
    {
        productid: 'rweh364321',
        productName: "Straw Vase",
        imageName: "strawVase.jpg",
        price: 100,
        description: "Made with the finest bamboo. This straw vase is a great addition to any home.",
        category: 'pottery'
    },
    {
        productid: 'qwegt5y261',
        productName: "Marble Vase",
        imageName: "vase.jpg",
        price: 200,
        description: "Our marble vases are in-demand across the globe in 234 countries. Made with the finest marble in Montana.",
        category: 'pottery'
    },
    {
        productid: 'wfh23451234',
        productName: "Wooden Flower Vase",
        imageName: "woodenVase.jpg",
        price: 35,
        description: "This wooden vase was hand-sanded to resemble a unique and enticing shape for artist-enthusiasts alike.  Appreciate its slender curves and contours.",
        category: 'pottery'
    },
    {
        productid: 'brg4321',
        productName: "Egyptian Silk Scarf",
        imageName: "grayScarf.jpg",
        price: 99,
        description: "This scarf was smuggled out of one of the most secure, ancient Pyramids. It is highly illegal, but our staff member, Mike, got the job done.",
        category: 'accessories'
    },
    {
        productid: '1regwt135rtwh',
        productName: "Hunk of Metal",
        imageName: "hunkOfMetal.jpg",
        price: 150,
        description: "This hunk of metal actually has a recording device, so you can find out if your loved ones are speaking behind your back. Comes in 3 shapes and sizes. Limited edition.",
        category: 'accessories'
    },
    {
        productid: '1234fwy4235',
        productName: "Mini Table",
        imageName: "mini-table.jpg",
        price: 75,
        description: "This small wooden table stands at a staggering 2 feet. A great accessory for your child.",
        category: 'accessories'
    },
    {
        productid: 'wergwerg1435',
        productName: "La Vioure Perfumé",
        imageName: "Perfume.jpg",
        price: 200,
        description: "The finest French perfume from Paris.",
        category: 'accessories'
    },
    {
        productid: 'ergw3415',
        productName: "Office Scissors",
        imageName: "scissors.jpg",
        price: 90,
        description: "The key to cutting paper effectively is having the right scissors.",
        category: 'accessories'
    },
    {
        productid: '13245fgenh',
        productName: "Tea Basket",
        imageName: "basket.jpg",
        price: 680,
        description: "This minimal tea basket delivers tea well. An essential product to your kitchenware.",
        category: 'accessories'
    },
    {
        productid: '235fbg3425',
        productName: "Pillow In A Basket",
        imageName: "pillowInABasket.jpg",
        price: 7999,
        description: "Our designers are constantly pushing the bounds of innovation. The pillow in a basket brings a mood to your room that exudes tranquility. Assembly required.",
        category: 'premium'
    },
    {
        productid: 'ewhgnfh342',
        productName: "Pink Salt Rock",
        imageName: "pinkSaltRock.jpg",
        price: 250,
        description: "What more is there to say. It is a pink salt rock. Completely edible. Please consult your doctor before consuming in one sitting.",
        category: 'premium'
    },
    {
        productid: 'nw43512tht',
        productName: "Viking Table",
        imageName: "smalltable.jpg",
        price: 9001,
        description: "This viking table has been fully remanufactured based off the ancient viking blueprints of finely crafted tables.",
        category: 'premium'
    },
    {
        productid: 'weggnyt23',
        productName: "Clip Board",
        imageName: "whiteBoard.jpg",
        price: 250,
        description: "Nowadays, it is hard to collect your thoughts with all the clutter of technology. Our patented clip boards solve this worldwide problem.",
        category: 'premium'
    },
    {
        productid: 'nehwer2534',
        productName: "Rocking Chair",
        imageName: "blackRockingChair.jpg",
        price: 800,
        description: "This rocking chair can sync with your Fitbit, so you know how many times you rocked back and forth.",
        category: 'premium'
    },


]

export default productsArray;