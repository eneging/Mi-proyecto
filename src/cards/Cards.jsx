
 import './cards.css'

 
 // eslint-disable-next-line react/prop-types
 function Cards({filter}) {



  return (<>
  


    {filter.map((el, i) => {

        return(
        <>
        
        <div key={i} className="Container-card">
        <img src={el.photo}></img>
        <div>
       
        <h2>{(el.superHost === true ) ? 
        <span className="cursor">SUPER HOST</span> : ''}</h2>
        <p>{el.type}{el.beds === null ? ' beds': <>.{el.beds} beds</> }
                     


        </p> 
        <h3><span id="start" className="material-symbols-outlined">
star
</span>{el.rating}</h3>  
       
        </div >
        <h1>{el.title}</h1>
       </div> </>)
      })} 
        </>   
  )
}

export default Cards