import React, { ReactElement, useState } from 'react'
import { actorCreationDTO, actorsMovieDTO } from '../actors/actors.model';
import { Typeahead } from 'react-bootstrap-typeahead';

const TypeaheadActors = (props: typeAheadActorsProps) => {
const actors:actorsMovieDTO[]=[{
  id: 1, name: 'Hrithik Roshan', character: '', picture:'https://upload.wikimedia.org/wikipedia/commons/9/9c/Hrithik_at_Rado_launch.jpg'
},
{
  id: 2, name: 'Ester', character: '', picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Premios_Goya_2020_-_Ester_Exp%C3%B3sito_%28cropped%29.jpg/440px-Premios_Goya_2020_-_Ester_Exp%C3%B3sito_%28cropped%29.jpg'
},
{
  id: 3, name: 'Sydney Sweeney', character: '', picture:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sydney_Sweeney_at_the_2024_Toronto_International_Film_Festival_%28cropped%2C_rotated%29.jpg/440px-Sydney_Sweeney_at_the_2024_Toronto_International_Film_Festival_%28cropped%2C_rotated%29.jpg'
}
]


const selected: actorsMovieDTO[]
 = [];

const[draggableElement, setDraggableElement] = useState<actorsMovieDTO|undefined>(undefined)

function handleDragStart(actor: actorsMovieDTO){
  setDraggableElement(actor);
}

function handleDragOver(actor: actorsMovieDTO){
  if(!draggableElement){
    return;
  }

  if(actor.id!==draggableElement.id){

    let dragIndex = props.actors.findIndex(a=> a.id===draggableElement.id);

    let actorIndex = props.actors.findIndex(a=> a.id===actor.id);

    let actors = [...props.actors];

    actors[actorIndex] = draggableElement;
    actors[dragIndex] = actor;

    props.onAdd(actors); 


  }

}

  return (
    <div className='mb-3'>
      <label>{props.displayName}</label>
      <Typeahead
      id='typeahead'
      onChange={actors=>{

        if(props.actors.findIndex(actor=> actor.id===actors[0].id)===-1){
          props.onAdd([...props.actors, actors[0]]);
        }
      
        console.log(actors)
      }}
      options={actors}
      selected={selected}
      labelKey={actor=>actor.name}
      filterBy={['name']}
      placeholder='Write the name of the actor...'
      minLength={1}
      className='mb-1'
      flip={true}
      renderMenuItemChildren={actor=>(
        <>
        <img src={actor.picture} alt="actor"
        style={{
          height:'64px',
          marginRight:'10px',
          width:'64px'
        }}
        />
        <span>{actor.name}</span>
        </>
      )}
      />
       <ul className='list-group'>
                        {props.actors.map(actor=><li key={actor.id}
                        className='list-group-item list-group-item-action'

                        draggable={true}
                        onDragStart={()=>handleDragStart(actor)}
                        onDragOver={()=>handleDragOver(actor)}
                        >
                          
                          {props.listUI(actor)}
                          <span className='badge badge-primary badge-pill pointer text-dark'
                          style={{marginLeft:'0.5em'}}
                          onClick={()=>props.onRemove(actor)}
                          >X</span>
                        
                        </li>)}
                     </ul>
    </div>
  )
}

interface typeAheadActorsProps{
    displayName :string;
    actors: actorsMovieDTO[];
    onAdd(actors: actorsMovieDTO[]):void;
    listUI(actor: actorsMovieDTO): ReactElement;
    onRemove(actor:actorsMovieDTO):void;
}

export default TypeaheadActors
