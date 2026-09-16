

enum productRate{
    low = "thấp",
    medium ="trung bình",
    hight = "cao",

}

const product:{name:string; rate: productRate; price: number} = {

    name: "laptop",
    rate: productRate.low,
    price: 100

};
   console.log(product);

   const listProduct=   [
    {
     name: "laptop",
    rate: productRate.low,
    price: 100
    }
   ]