import React, { PureComponent } from 'react'
import ReacipeIndexContainer from '../RecipeIndex'
import MealItemContainer from '../MealItem';
import './Meal.scss'



export class MealComponents extends PureComponent {
    
  render() {
    const { show, item } = this.props;
    return (
        <>
        <div className="main">
          <div className="heading">
            <h1>Search Your Food Recipe</h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              tempore unde sed ducimus voluptates illum!
            </h4>
          </div>
          <div className="searchBox">
            <input
              type="search"
              className="search-bar"
              onChange={this.props.handleSearchChange}
              placeholder='Search Recipe.'
            />
          </div>
          <div className='filter' onClick={this.props.filter}>Filter by </div>
          <div className='gallery'>
            <ReacipeIndexContainer alphaIndex={(alpha) => this.props.setIndex(alpha)} {...this.props}/>
          <div className="container">
            {show ? (
              <MealItemContainer data={item} />
            ) : (
              <p>"Not Found"</p>
            )}
          </div>
          </div>

        </div>
      </>
    )
  }
}

export default MealComponents