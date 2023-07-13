import React, { PureComponent } from 'react'
import './RecipeIndex.scss'

export class RecipeIndexComponents extends PureComponent {
    constructor(props) {
        super(props);
        this.alpha = ['A', "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        this.num = 0;
    }
  render() {
    return (
        <>
          <div className={this.props.filterData ? "indexContainer" : "hidden"}>
       
        {  
            this.alpha && this.alpha.map((item,index) => (
                <div>
                    
                    <div className={this.props.filterData && "numBox"} key={index} onClick={() => this.props.alphaIndex(item)}  >
                    <label for={index} className='label'>
                    <input type='radio' value={item} id={index} name='item' onClick={() => this.props.alphaIndex(item)} />
                     <h3 style={{display:'inline'}}>{item}</h3>
                    </label>
                </div>
                </div>
            ))
        }
          </div>

    </>
    )
  }
}

export default RecipeIndexComponents