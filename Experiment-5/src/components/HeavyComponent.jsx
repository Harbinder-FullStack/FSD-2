export default function HeavyComponent() {
  
    /* need to simulate heavy component */
    for(let i=0;i<100000000;i++){} 

    return (
    <div>
      <h2>Heavy Component</h2>
      <p>Welcome to the Dashboard!</p>
    </div>
  )
}