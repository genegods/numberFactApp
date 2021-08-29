import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { loadData } from '../../redux/numberRedux/number.actions'
import {NUMBER_KEY} from '../../redux/numberRedux/number.reducer'

const NumberApp = () => {
    // initialize dispatch
    let dispatch = useDispatch()

    // useEffect(() =>{
    //     dispatch(loadData(number))

    // }, [])

    let [number, setNumber] = useState('')

    // handle click
    let handleClick = (e) =>{
        setNumber(number.concat(e.target.value))

    }

    // handle submit
    let handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(loadData(number))
        setNumber('')

    }

    // view fact from store
  let viewFact = useSelector((state) =>{
      return state[NUMBER_KEY]

  })
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewFact)}</pre> */}
           <div className='card'>
               <div className='card-header centered'>
                   <h2>NUMBER FACT APPP</h2>
               </div>

               {/* body section */}
               <div className='card-body'>
                   <div className='numberContainer'>
                       <div className='leftSide'>
                           <form onSubmit={handleSubmit}>
                               <input
                               type='text'
                               value={number}
                               onChange={handleClick}
                               disabled

                               />

                               <button type='submit' className='searchBtn'>Enter</button>
                           </form>
                       </div>
                       <div className='rightSide'>
                           <div className='keypad'>
                               <button value='1' onClick={handleClick}>1</button>
                               <button value='2' onClick={handleClick}>2</button>
                               <button value='3' onClick={handleClick}>3</button>
                               <button  onClick={handleClick}>Clear</button>

                               <button value='4' onClick={handleClick}>4</button>
                               <button value='5' onClick={handleClick}>5</button>
                               <button value='6' onClick={handleClick}>6</button>
                               <button value='0' onClick={handleClick}>0</button>

                               <button value='7' onClick={handleClick}>7</button>
                               <button value='8' onClick={handleClick}>8</button>
                               <button value='9' onClick={handleClick}>9</button>
                             
                           </div>
                       </div>
                   </div>
               </div>

               {/* footer section */}
               <div className='card-footer'>
                   <div className='factContainer centered'>
                       <h6> {viewFact.data} </h6>
                   </div>
               </div>
           </div>
        </React.Fragment>
            
        
    )
}

export default NumberApp
