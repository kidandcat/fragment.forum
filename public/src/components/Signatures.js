import React from 'reactn'
import { hash } from '../utils/Utilities'

export default function Signatures () {
  const firmas = [
    {
      author: 'Asky',
      signature: 'Illo que guapo me he bajado un mmorpg que es la leche. Es como la vida real. Vas a caballo a todos lados y tardas mil y encima tienes que trabajar como si fuera un segundo trabajo.'
    }, {
      author: 'Jabato',
      signature: 'Ni puto caso al Jairo ese juego es la ruina'
    }]
  return (
    <div>
      {
        firmas.map((firma) => {
          return (
            <div key={hash(firma.author)} style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                {firma.author}.{firma.signature}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
