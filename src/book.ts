class Bookss {
    id: number;
    title: string;
    author: string;
    price: number;
    rating: number;  
    constructor(id:number,title:string,author:string,price:number,rating:number) {
    this.id = id;
    this.title=title;
    this.author=author;
    this.price= price;
    this.rating= rating;  
    }
}
class bookManager {

    bookData: Bookss[] = [];
    displayAll(bookData) {
        let template1=`<tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>`;
        document.getElementById("tbdy")!.innerHTML=template1;
        for (let i = 0; i < bookData.length; i++) {
            if(bookData[i] !=null){
            let id1 = bookData[i].id;
            let title1 = bookData[i].title;
            let author1 = bookData[i].author;
            let price1=bookData[i].price;
            let rating1=bookData[i].rating;
            let template = `
                    <tr>
                        <td>${id1}</td>
                        <td>${title1}</td>
                        <td>${author1}</td>
                        <td>${price1}</td>
                        <td>${rating1}</td>
                        <td><button onclick="deleteall(${id1})"><i class="fa fa-trash-o" style="font-size:24px;color:red"></i></button> </td>
                    </tr>`;

            document.getElementById("tbdy")!.innerHTML += template;
            }
        }
    }
    searchById(bookData:Bookss[],searchValue:number) {
        for (let i = 0; bookData.length; i++) {
            if (searchValue == bookData[i].id) {
                console.log("hi");
                let id1 = bookData[i].id;
                let title1 = bookData[i].title;
                let author1 = bookData[i].author;
                let price1=bookData[i].price;
                let rating1=bookData[i].rating;
                let template = `
            <tr>
                <td>${id1}</td>
                <td>${title1}</td>
                <td>${author1}</td>
                <td>${price1}</td>
                <td>${rating1}</td>
                
                <td><button onclick="deleteall(${id1})"><i class="fa fa-trash-o" style="font-size:24px;color:red"></i></button> </td>
            </tr>`;

                document.getElementById("tbdy")!.innerHTML = template;
            }



        }
}
   
    searchByTitle(bookData:Bookss[],searchValue:string) {
          
        for (let i = 0; bookData.length; i++) {
            if (searchValue == bookData[i].title) {
                let id1 = bookData[i].id;
                let title1 = bookData[i].title;
                let author1 = bookData[i].author;
                let price1=bookData[i].price;
                let rating1=bookData[i].rating;
                let template = `
            <tr>
                <td>${id1}</td>
                <td>${title1}</td>
                <td>${author1}</td>
                <td>${price1}</td>
                <td>${rating1}</td>
                
                <td><button onclick="deleteall(${id1})"><i class="fa fa-trash-o" style="font-size:24px;color:red"></i></button> </td>
            </tr>`;

                document.getElementById("tbdy")!.innerHTML = template;
            }
        }
}
searchByAuthor(bookData:Bookss[],searchValue:string) {
          
    for (let i = 0; bookData.length; i++) {
        if (searchValue == bookData[i].author) {
            let id1 = bookData[i].id;
            let title1 = bookData[i].title;
            let author1 = bookData[i].author;
            let price1=bookData[i].price;
            let rating1=bookData[i].rating;
            let template = `
        <tr>
            <td>${id1}</td>
            <td>${title1}</td>
            <td>${author1}</td>
            <td>${price1}</td>
            <td>${rating1}</td>
            
            <td><button onclick="deleteall(${id1})"><i class="fa fa-trash-o" style="font-size:24px;color:red"></i></button> </td>
        </tr>`;

            document.getElementById("tbdy")!.innerHTML = template;
        }
    }
}
searchByRating(bookData:Bookss[],searchValue:number) {
        
    for (let i = 0; bookData.length; i++) {
        if (searchValue == bookData[i].rating) {
            let id1 = bookData[i].id;
            let title1 = bookData[i].title;
            let author1 = bookData[i].author;
            let price1=bookData[i].price;
            let rating1=bookData[i].rating;
            let template = `
        <tr>
            <td>${id1}</td>
            <td>${title1}</td>
            <td>${author1}</td>
            <td>${price1}</td>
            <td>${rating1}</td>
            <td><button onclick="deleteall(${id1})"><i class="fa fa-trash-o" style="font-size:24px;color:red"></i></button> </td>
        </tr>`;

            document.getElementById("tbdy")!.innerHTML = template;
          }
    }
}
}

let bookData: Bookss[] = [
{ id: 1, title: "The Accursed God", author: "Vivek Dutta Mishra", price: 42, rating: 4 },
{ id: 2, title: "I Too Had A Love Story", author: "Ravinder Singh", price: 39, rating: 5 },
{ id: 3, title: "The Girl in Room 105", author: "Chetan Bhagat", price: 128, rating: 4},
{ id: 4, title: "The Glass Hotel", author: "John Mandel", price: 95, rating: 3},
{ id: 5, title: "Arthashastra", author: "Kautilya", price: 105, rating: 2 },
{ id: 6, title: "To Kill a MockingBird", author: "Harper Lee", price: 200, rating: 3 }
];
 let manager = new bookManager;
 manager.displayAll(getlocalStorageData());
function option() {
    var selectedvalues = (<HTMLInputElement>document.getElementById("searchOptions")).value;
    return selectedvalues;

}
function searchByDetails() {
    var optionvalue = option();
    let searchValue = (<HTMLInputElement>document.getElementById('searchid')).value;
let local=getlocalStorageData();
    switch (optionvalue) {
        case "id":
            //console.log("search by id")
            manager.searchById(local,searchValue)
            break;
        case "title":
            manager.searchByTitle(local,searchValue);
            break;
        case "author":
                manager.searchByAuthor(local,searchValue);
                break;
        case "rating":
            manager.searchByRating(local,searchValue);
            break;
                
    }
}
function addbook(){
    
    alert(`added successful`);
    let newid=(<HTMLInputElement>document.getElementById("newid")).value;
    let newtitle=(<HTMLInputElement>document.getElementById("newtitle")).value;
    let newauthor=(<HTMLInputElement>document.getElementById("newauthor")).value;
    let newprice=(<HTMLInputElement>document.getElementById("newprice")).value;
    let newrating=(<HTMLInputElement>document.getElementById("newrating")).value;
    var booklist=getlocalStorageData();
    booklist.push({id: newid, title:newtitle,author:newauthor,price:newprice,rating:newrating})
    
updatelocalStroage(booklist)
}
function deleteall(id1){
    alert(`deleted successfully`);
    let localbooks=getlocalStorageData();
    for(let i=0;i<localbooks.length;i++){
        if(localbooks[i]!=null){
            if(id1==localbooks[i].id){
                localbooks[i]=null;
            }
        }
    }
    updatelocalStroage(localbooks);
    
}
function updatelocalStroage(bookData:Bookss[]){
    console.log("update local storage")
    localStorage.setItem('item',JSON.stringify(bookData))
}
function getlocalStorageData(){
    return (JSON.parse(localStorage.getItem("item")!));
}
function display(bookData:Bookss[]){
manager.displayAll(bookData);
}
function show1()
{
    manager.displayAll(getlocalStorageData());
}
