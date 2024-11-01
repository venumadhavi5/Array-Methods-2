
import './App.css';

function App() {
  let alphabeticalWords =["Apple","Ball","Car","Doll","Egg","Fish","Grapes","Hat","Ice Cream","Jeep","Kite","Lion","Moon","Nest","Orange","Pen","Queen","Rose","Star","Egg","Tiger","Umbrella","Van","Watch","X-Ray","Yalk","Zeebra"]
  return (
    <div className="App">
      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
         delete alphabeticalWords[5];
        console.log(alphabeticalWords);
        alphabeticalWords.splice(5,1);
        console.log(alphabeticalWords);
       }}>delete</button>

      <button type='button' onClick={()=>{
        let fruits=["Apple","Banana","Mango"];
        let vegetables=["Tomato","carrot","Beans"];
        let flowers=["Jasmine","Rose","Lotus"];
        let treeProducts=fruits.concat(vegetables,flowers);
        console.log(fruits);
        console.log(vegetables);
        console.log(flowers);
        console.log(treeProducts);


        let treeProducts1=[...fruits,...vegetables,...flowers];
        console.log(treeProducts1);
      }}>concat</button>

      <button type='button' onClick={()=>{
        let teluguActors=["Nani","Mahesh Babu","NTR"];
        let tamilActors=[["Surya","Karthi"],"Vijay","Siva Karthikeya"];
        let hindiActors=["Aishwarya Rai","Ranbeer","Alia Bhatt"];
        let actors =[teluguActors,tamilActors,hindiActors];
        console.log(actors);
        let allActors=actors.flat(2);
        console.log(allActors);

      }}>flat</button>

      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
        let letters=alphabeticalWords.slice(5,10);
        console.log(letters);
      }}>slice</button>

      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
        let letters1=alphabeticalWords.fill("Letters",5,10);
        console.log(letters1);
      }}>fill</button>
      <button type='button' onClick={()=>{
        
        let movieName="Bahubali-The Begining"
        console.log(movieName);
        let arr = Array.from(movieName);
        console.log(arr);
      }}>from</button>

      <button type='button' onClick={()=>{
        let result= alphabeticalWords.includes("Frog");
        console.log(result);
        let result1= alphabeticalWords.includes("Fish");
        console.log(result1);
      }}>includes</button>

      <button type='button' onClick={()=>{
        let result=alphabeticalWords.indexOf("Egg");
        console.log(result);
      }}>indexOf</button>
      <button type='button' onClick={()=>{
         let result=alphabeticalWords.lastIndexOf("Egg");
         console.log(result);
      }}>lastIndexOf</button>
      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
        let letters=alphabeticalWords.reverse();
        console.log(letters);
      }}>reverse</button>
      <button type='button' onClick={()=>{
        let movie = ["Kalki"]
        let arr =Array.isArray(movie);
        console.log(arr);
        let movie1 = "Devara"
        let arr1 =Array.isArray(movie1);
        console.log(arr1);
      }}>isArray</button>

      <button type='button' onClick={()=>{
       let words= ["Ball","Dog","Ant","Elephant","Cat"]
        let letters =words.sort();
        console.log(letters);
      }}>sort</button>
      
      
    </div>
  );
}

export default App;
