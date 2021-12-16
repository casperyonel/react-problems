import React from 'react'
import { useState } from 'react'


const EvenAndOdd = () => {

    const [evenArr, setEvenArr] = useState([])
    const [oddArr, setOddArr] = useState([])
    const [userInput, setUserInput] = useState('')

    function splitArray(string) {
        // let evenAry = []
        // let oddAry = []=
        let splitArr = string.split('')
        setEvenArr(splitArr.filter(elem => elem % 2 === 0 && elem != " " ))
        setOddArr(splitArr.filter(elem => elem % 2 !== 0 && elem != "," ))
        console.log('hi')
      }

    return (
        <div>
 
            <div className='puzzleBox evenAndOddPB'></div>

            <h4>Evens and Odds</h4>

            <input className='inputLine' type="text" onChange={(e) => setUserInput(e.target.value)} />
            <button className='confirmationButton' onClick={splitArray(userInput)}></button>

            <span className='resultsBox'>{evenArr}</span>
            <span className='resultsBox'>{oddArr}</span>

        </div>
    )
}

export default EvenAndOdd
