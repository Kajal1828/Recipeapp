import React, { PureComponent } from 'react'
import MealItemComponents from './MealItem.components'

export class MealItemContainer extends PureComponent {
    
  render() {
    return (
      <>
      <MealItemComponents {...this.props}/>
      </>
    )
  }
}

export default MealItemContainer