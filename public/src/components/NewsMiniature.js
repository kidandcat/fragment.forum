import React from 'reactn'
import {Typography, message} from 'antd'

const {Title} = Typography

export default function NewsMiniature() {
    return (
        <div className='news-miniature pointered-element' onClick={()=>{message.warning('Not implemented yet')}}>
           <span style={{fontSize:12, fontWeight:'bold', fontVariant:'all-small-caps'}}>Jairo deja de cambiar de juegos todo el tiempo y decide centrarse en uno</span>
           <span style={{fontSize:12}}>Después de 29 años por fin Jairo decide bajarse un juego y centrarse en él.</span> 
       </div> 
    )
}