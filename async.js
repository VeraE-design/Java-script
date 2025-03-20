// asynchronous js
// codes that take time
const url = "https://dummyjson.com/products";

// fetch request async/await
const getProducts =async () => {
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.products); 
}
getProducts();


// .then
const getProducts2 = () => {
    fetch (url)
    .then((response) => {
        return response.json();
    })
     .then ((data) => {
        console.log(data.products);
    });
};
getProducts2();