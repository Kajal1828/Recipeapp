import React, { PureComponent } from 'react';
import {withRouter} from '../MealItem/withRouter';
import RecipeComponents from './Recipe.components';

 class RecipeContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      id: '',
    };
  }

  componentDidMount() {
    const { recipeId } = this.props.match;
    if (recipeId !== ' ') {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ item: data.meals[0] });
        });
    }
  }

  componentDidUpdate() {
    if (this.state.item) {
      const strYoutube = this.state.item.strYoutube;
      const str = strYoutube.split("=");
      const id = str[str.length - 1];
      this.setState({ id });
    }
  }

  render() {
    const { item, id } = this.state;
    return <RecipeComponents 
     item={item} id={id} />;
  }
}

export default withRouter(RecipeContainer);

