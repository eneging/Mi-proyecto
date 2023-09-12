
import { useState } from 'react';

export const useContador =() => {

    const [contador, setContador] = useState(0);


    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);
    

  return ([contador,sumar,restar]);
}





/*<div className='btn-add-number'>
        
        
        <h1 className='title-conter'>Adult</h1>
        <span>Age 13 or above</span>
        <div className='conter'>
        <button onClick={restar}>
          -
        </button >

        <span>0</span>

<button onClick={sumar}>+</button>


</div>

<div>
      <h1 className='title-conter'>Children</h1>
      <span>Age 2-12</span>
        <div className='conter'>
        <button>
          -
        </button>

        <span>0</span>

<button>+</button>

</div>
</div>
</div>
 */