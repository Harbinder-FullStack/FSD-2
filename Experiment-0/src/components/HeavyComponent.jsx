export default function HeavyComponent() {
  
    /* need to simulate heavy component 
       Fetcxhing large data from server or complex calculations
    */
    for(let i=0;i<100000000;i++){} 
    
  console.log("HeavyComponent Rendered");
    return (
    <div>
      <h2>Heavy Component</h2>
      <p>Welcome to the Dashboard!</p>
    </div>
  )
}