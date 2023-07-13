import React, { PureComponent } from 'react'
import RecipeIndexComponents from './RecipeIndex.components'
import { connect } from 'react-redux'

const mapStateToProps =(state)=>({
  filter:state.meal.filter,
})
 class RecipeIndexContainer extends PureComponent {
  render() {
    return (
      <>
      <RecipeIndexComponents alphaIndex={this.props.alphaIndex} {...this.props}/>
      </>
    )
  }
}

export default connect(mapStateToProps,null)(RecipeIndexContainer)