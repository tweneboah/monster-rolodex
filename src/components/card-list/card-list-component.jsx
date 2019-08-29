import React from 'react'
import '../../stylesheet/card-list.css'
import Card from '../../components/card/card'


const CardList = (props) => {
 return (
  <div className='card-list'>
     {props.monsters.map((monster) => {
        return (
             <Card key = {monster.id} monster = {monster}/>
        )
     })}
  </div>
 )
}
export default CardList


