import Book from "./Book";
const bookData = [
    {
    id:1,
    title:"Atomic Habits",
    author:"Harshita",
    imgLink:"https://m.media-amazon.com/images/I/81Ls+SBCLiL.SL1500.jpg",
    price:454.9,
},
{
    id:2,
    title:"The New Menopause",
    author:" Mary Claire Haver MD",
    imgLink:"https://images-na.ssl-images-amazon.com/images/I/71CIAeNeF1L._AC_UL600_SR600,400_.jpg",
    price:454.9,
}, 
{
    id:3,
    title:"The women",
    author:"Erik Larson",
    imgLink:"https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL600_SR600,400_.jpg",
    price:454.9,
}, 
{
    id:4,
    title:"The Demon of Unrest",
    author:"Kristin Hannah",
    imgLink:"https://images-na.ssl-images-amazon.com/images/I/9104lsvQ9iL._AC_UL600_SR600,400_.jpg",
    price:454.9,
}, 
{
    id:5,
    title:"Turkuzk Cooking",
    author:"Claude Davis",
    imgLink:"https://images-na.ssl-images-amazon.com/images/I/81erI7sNo5L._AC_UL600_SR600,400_.jpg",
    price:454.9,
}
];

const BookList=()=>{
return (
<div className="booklist">
    {/* <Book {...bookData[0]}/> */}
    {
        bookData.map((b)=>{
            return <Book{...b}key={b.id}/>;
        })
    }
    {
        bookData.map((b)=>(
            <Book{...b}/>
    ))
    }
</div>

);
};
export default BookList;
// const Book=()=>{
//     return (
//         <>
//         <Image/>
//         <Title/>
//         <Author/>
//         <Price/>
//         </>

//     );
// };
// function Title(){
//     return <h1>Book Title</h1>
// }
// function Image(){
//     return 
//     (
//         <img src=""></img>
//     )
// }
// function Author(){
//     return <h1>Author</h1>
// }
// function Price(){
//     return <h1>Price</h1>
// }
// export default BookList;