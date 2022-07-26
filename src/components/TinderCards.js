import React,{useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import '../css/TinderCards.css'
import axios from "../axios";

function TinderCards() {

  const [people,setPeople] = useState([]);
  
  useEffect(()=>{
    async function fetchData()
    {
      const req = await axios.get('/tinder/cards');
      setPeople(req.data);
    }

    fetchData();
  },[])

  console.log(people);

  const swiped = (direction,nametodelete)=>{
    console.log("removing: "+ nametodelete);
  };

  const outOfFrame = (name)=>{
    console.log(name+" left the screen");
  };

  return (
    <div className="tindercards">
        <div className="tindercards_cardcontainer">
        {
            people.map((person) =>(
                <TinderCard
                  className="swipe"
                  key={person.name}
                  preventSwipe={["up","down"]}
                  onSwipe={(dir)=> swiped(dir,person.name)}
                  onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                <div className="card"
                style={{backgroundImage: `url(${person.imgUrl})`}}
                >
                    <h3>{person.name}</h3>  
                </div>               
                </TinderCard>

                ))
        }
        </div>
    </div>
  )
}

export default TinderCards