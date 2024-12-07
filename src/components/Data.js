import ImageMenu1 from "../assets/images/download1.avif";
import ImageMenu2 from "../assets/images/download2.jpeg";
import ImageMenu3 from "../assets/images/download3.jpeg";
import ImageMenu4 from "../assets/images/download4.jpeg";
import ImageMenu5 from "../assets/images/download5.jpeg";
import ImageMenu6 from "../assets/images/download6.jpeg";
import cartImage1 from "../assets/images/download7.jpeg";
import cartImage2 from "../assets/images/download8.jpeg";
import cartImage3 from "../assets/images/download9.jpeg";
import cartImage4 from "../assets/images/download10.jpeg";
import productImage1 from "../assets/images/download11.jpeg";
import productImage2 from "../assets/images/download12.jpeg";
import productImage3 from "../assets/images/download13.jpeg";
import productImage4 from "../assets/images/download14.jpeg";
import reviewImage1 from "../assets/images/scientist1.jpeg";
import reviewImage2 from "../assets/images/scientist4.jpeg";
import reviewImage3 from "../assets/images/scientist2.jpeg";
import reviewImage4 from "../assets/images/scientist3.jpeg";
import blogImage1 from "../assets/images/download19.jpeg";
import blogImage2 from "../assets/images/download20.jpeg";
import blogImage3 from "../assets/images/download21.jpeg";
import blogImage4 from "../assets/images/download22.jpeg";
const menu = [
    {
        img: ImageMenu1,
        name: "Classic Cheeseburger",
        price: "20$"

    },
    {
        img: ImageMenu2,
         name: "BBQ Bacon Burger",
        price: "25$"
    },
    {
        img: ImageMenu3,
         name: "Spicy Jalapeño Burger",
        price: "27$"
    },
    {
        img: ImageMenu4,
         name: "Mushroom Swiss Burger",
        price: "28$"
    },
    {
        img: ImageMenu5,
         name: "Double Patty Smash Burger",
        price: "24$"
    },
    {
        img: ImageMenu6,
         name: "Classic Cheeseburger",
        price: "22$"
    },
];
const cart = [
    {
      img: cartImage1,
       name: "Grilled Chicken Sandwich",
        price: "30$"
    },
    {
      img: cartImage2,
       name: "Turkey Club Sandwich",
        price: "20$"
    },
    {
      img: cartImage3,
       name: "Veggie Delight Sandwich",
        price: "25$"
    },
    {
      img: cartImage4,
       name: "Philly Cheesesteak",
        price: "44$"
    },
  ];
  const product = [
    {
      img: productImage1,
       name: "spicy pizza",
        price: "22$"
    },
    {
      img: productImage2,
       name: "sandwich pizza",
        price: "23$"
    },
    {
      img: productImage3,
       name: "normal pizza",
        price: "20$"
    },
    {
      img: productImage4,
       name: "special pizza",
        price: "20$"
    },
  ];
  const review = [
    {
      img: reviewImage1,
       name: " Nikola Tesla",
        price: "24$",
        description: "Step into a world of culinary innovation, where dishes are served with a spark—literally. Electric vibes guaranteed with every bite."
        
    },
    {
      img: reviewImage2,
       name: "Charles Darwin (Naturalist",
        price: "20$",
        description: "Only the fittest ingredients make it to your plate. Experience a natural selection of dishes that evolve with seasonal produce."

    },
    {
      img: reviewImage3,
       name: "Marie Curie (Physicist and Chemist)",
        price: "20$",
        description: "Dedicated to the pursuit of flavor and discovery, this is a place where every dish shines with brilliance—literally and figuratively."
    },
    {
      img: reviewImage4,
       name: "einstein",
        price: "40$",
        description: "A place where taste and time are relative. Experience the best fusion of flavors while pondering the mysteries of the universe over a slice of cosmic cheesecake."
    },
  ];
  const blog = [
    {
      img: blogImage1,
       name: "hot time",
        price: "20$",
        description: "this is so much spicy as you never taste like before"
        ,
        startingDate : "2 Aughust 2024"
    },
    {
      img: blogImage2,
       name: "nice",
        price: "20$",
        description: "This is our favourite item to taste everbody like it very much"
        ,
        startingDate : "1 june 2024"

    },
    {
      img: blogImage3,
       name: "juicy",
        price: "30$",
        description:"This is too much juicy and creamy"
        ,
        startingDate : "10 march 2024"
    },
    {
      img: blogImage4,
       name: "extra time",
        price: "40$",
        description:"This is very huge to eat this is like a deal this will take your almost 25 mt to eat",
        startingDate : "21 may 2024"
 
    },
   
  ];

  export{menu, review, blog, product, cart}