import React, { PureComponent } from 'react'
import { withRouter } from '../MealItem/withRouter';
import './MealItem.scss'

 class MealItemComponents extends PureComponent {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
        <>
        {(!data) ? "Not Found" : data.map(item => (
          <div className="card" key={item.idMeal} onClick={() => this.props.navigate(`/${item.idMeal}`)}>
            <img src={item.strMealThumb} alt="" />
            <h3>{item.strMeal}</h3>
          </div>
        ))}
      </>
    )
  }
}

export default withRouter(MealItemComponents)