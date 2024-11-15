const wrapper=document.querySelector(".sliderWrapper");
console.log(wrapper)
wrapper.style.transform="translate(-1000px)"
const menuItems=document.querySelectorAll(".menuItem");
const product=[
    {
    id:1,
    title: "Air Force",
    price: 119,
    colors: [
        {
            code: "black",
            img: "air.png",
        },
        {
            code: "blue",
            img: "air2.png",
        },
    ]
    },
    
    {id:2,
    title: "Air Jordan",
    price: 115,
    colors: [
        {
            code: "lightgray",
            img: "jordan.png",
        },
        {
            code: "green",
            img: "jordan2.png",
        },
    ]
    },
    {id:3,
        title: "Blazer",
        price: 159,
        colors: [
            {
                code: "lightgray",
                img: "blazer.png",
            },
            {
                code: "blue",
                img: "blazer2.png",
            },
        ]
        },
        {id:4,
            title: "crater",
            price: 219,
            colors: [
                {
                    code: "black",
                    img: "crater.png",
                },
                {
                    code: "lightgray",
                    img: "crater2.png",
                },
            ]
            },
            {id:5,
                title: "Hippie",
                price: 139,
                colors: [
                    {
                        code : "gray",
                        img : "hippie.png",
                    },
                    {
                        code: "black",
                        img: "hippie2.png",
                    },
                ]
                },
    
];

let choosenProduct=product[0];
const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentproductPrice=document.querySelector(".productPrice");
const currentproductColors=document.querySelectorAll(".color")
const currentproductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
    item.addEventListener("click",()=>{
wrapper.style.transform=`translateX(${-80 *index}vw)`;
//change the choosen product
choosenProduct=product[index];
currentProductTitle.textContent=choosenProduct.title;
currentproductPrice.textContent="$"+choosenProduct.price;
currentProductImg.src=choosenProduct.colors[0].img;

currentproductColors.forEach((color,index)=>{
color.style.backgroundColor = choosenProduct.colors[index].code;
    });
    });
});

currentproductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img;
    })
})
currentproductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentproductSizes.forEach(size=>{
              size.style.backgroundColor="white"
        size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"

    })
})
const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close =document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})
