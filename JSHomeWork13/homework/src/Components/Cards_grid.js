
import './Cards_grid.css'

const arr = [
  "Component 19@2x.png",
  "Component 20@2x.png",
  "Component 21@2x.png",
  "Component 22@2x.png",
  "Component 23@2x.png",
  "Component 24@2x.png",
  "Component 25@2x.png",
  "Component 26@2x.png",
  "Component 27@2x.png",
  "Component 28@2x.png",
  "Component 29@2x.png",
  "Component 30@2x.png",
  "Component 31@2x.png",
  "Component 32@2x.png",
  "Component 33@2x.png",
  "Component 34@2x.png",
  "Component 35@2x.png",
  "Component 36@2x.png",
];


export function Cards_grid(){
    const list = arr.map((item, index) => 
      <div className="card" key={index}>
        <img src={`Images_Cards/${item}`} />
      </div>
    );
    return(
        <div className='cards_grid'>
            {list}
        </div>
    );
}




