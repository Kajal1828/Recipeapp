import React, { PureComponent } from 'react'
import MealComponents from '../MEAL/Meal.components';
import { fetchFailure, fetchRequest, fetchSuccess,Url,find,filter } from '../../Store/Meal/MealAction';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state.meal.data,
    error: state.meal.error,
    loading: state.meal.loading,
    url: state.meal.url,
    filterData:state.meal.filterData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequest: () => dispatch(fetchRequest()),
    fetchSuccess:(data)=>dispatch(fetchSuccess(data)),
    fetchFialure:(msg)=>dispatch(fetchFailure(msg)),
    Url:(urldata)=>dispatch(Url(urldata)),
    filter:()=>dispatch(filter()),
  }
}
export class MealContainer extends PureComponent {
  state = {
      search: "",
      show: false,
      item: [],
    };
  

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.url !== this.props.url) {
      this.fetchData();
    }
  }

  fetchData() {
    this.props.fetchRequest();
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => {
        this.props.fetchSuccess(data.meals)
        this.setState({
          show: true,
        });
      })
      .catch(err=>this.props.fetchFailure(err.message));
  }

  searchRecipe =  () => {
    const  url =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.search}`
    this.props.Url(url)
    setTimeout(()=>{
      this.fetchData();
    },1000)
   
  };

  setIndex = (alpha) => {
    const url =  `https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`;
    this.props.Url(url)

  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value }, this.searchRecipe());
  };

  render() {
    console.log(this.props)
    return (
      <>
        <MealComponents
        {...this.props}
          show={this.state.show}
          item={this.props.data}
          search={this.state.search}
          searchRecipe={this.searchRecipe}
          setIndex={this.setIndex}
          handleSearchChange={this.handleSearchChange}
        />

      </>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MealContainer)