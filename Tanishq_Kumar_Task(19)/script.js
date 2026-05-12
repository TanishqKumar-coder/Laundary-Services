const images=[
    {
        title: "Wash & Fold",
        image: "/Images/Services_Imgs/Wash & Fold.png",
        price: "200"
    },
    {
        title: "Dry Cleaning",
        image: "/Images/Services_Imgs/Dry Cleaning.png",
        price: "100"
    },
    {
        title: "Curtain Cleaning",
        image: "/Images/Services_Imgs/Curtain Cleaning.png",
        price: "100"
    },
    {
        title: "Ironing",
        image: "/Images/Services_Imgs/Ironing.png",
        price: "50"
    },
    {
        title: "Express Service",
        image: "/Images/Services_Imgs/Express Service.png",
        price: "300"
    },
]
let sum=0;
const total=document.getElementById("total");
total.innerHTML=`<span>Total Amount ₹${sum}</span>`
const serviceImage=document.getElementById("serviceImage");
const skipBtn=document.getElementById("skipBtn");
let currIndex=0;
skipBtn.addEventListener("click",()=>{
    currIndex++;
    if(currIndex>=images.length) currIndex=0;
    serviceImage.src=images[currIndex].image
    document.getElementById("title").innerHTML=images[currIndex].title
    document.getElementById("Price").innerHTML=`₹${images[currIndex].price}`
})
const addBtn=document.getElementById("addBtn");
const msg=document.getElementById("emptyMessage");
const listItems=document.getElementById("list-Of-items");
addBtn.addEventListener("click", ()=>{
    msg.style.display='none';
    const item=document.createElement("div");
    item.classList.add("item");
    item.innerHTML=` <span>${images[currIndex].title}</span>
        <span>${images[currIndex].price}</span>`;
        listItems.appendChild(item);
        sum=sum+Number(images[currIndex].price);
        total.innerHTML=`<span>Total Amount ₹${sum}</span>`
        currIndex++;
        if(currIndex>=images.length) currIndex=0;
        serviceImage.src=images[currIndex].image
        document.getElementById("title").innerHTML=images[currIndex].title
        document.getElementById("Price").innerHTML=`₹${images[currIndex].price}`
})
const bookBtn=document.getElementById("bookNow")
const cartMsg=document.getElementById("No-Items-Message")
const fullName=document.getElementById("fullName");
const email=document.getElementById("email");
const phone=document.getElementById("phoneNumber");
bookBtn.addEventListener("click", ()=>{
    if(sum===0)
    {
        cartMsg.innerHTML="No Items added to the cart";
    }
    else if(fullName.value==="" ||email.value==="" ||phone.value==="")
    {
        cartMsg.innerHTML="Please fill all the fields";
    }
    else{
        cartMsg.innerHTML="Booking Successful"
        cartMsg.id="bookMessage"
    }
})
