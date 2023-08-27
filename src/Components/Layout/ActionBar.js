import React from 'react'
import Button from '../Fields/Button'

export default function ActionBar(props) {
    const {button, button_name,event} = props
  

    switch(button){
        case 2 : return(
            <div className='flex'>
              <Button name={button_name[0]} onClick={event}/>
              <Button name={button_name[1]} onClick={event}/>
            </div>
        )

        default :return(
            <div className='py-2'>
             <Button name={button_name} onClick={event}/>
            </div>
        )
    }
}

