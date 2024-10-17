
const requesturl='https://jsonplaceholder.typicode.com/posts'
const xhr = new XMLHttpRequest();
xhr.open('GET', requesturl);
xhr.onreadystatechange=function(){
   console.log(xhr.readyState);
   if(xhr.readyState === 4){
       const data = JSON.parse(this.responseText)
       console.log(data);
    
   }
}
xhr.send();

