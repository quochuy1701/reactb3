import React, { Component } from 'react'
import ProDuctItem from './ProDuctItem'

export default class ProDuctList extends Component {
  renderList = () => {
    return this.props.mangShoe.map((Shoe) => {
      return <div className="col-4" key={Shoe.id} style={{paddingBottom:"20px"}}>
        <ProDuctItem Shoe={Shoe} xemChitiet={this.props.xemChitiet}/>
      </div>
    })
  }

  render() {
    return (
      <div className="row">
        {this.renderList()}

      </div>
    )
  }
}
