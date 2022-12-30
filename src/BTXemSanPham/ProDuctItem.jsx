import React, { Component } from 'react'

export default class ProDuctItem extends Component {
  render() {
    let { Shoe } = this.props;
    return (
      <div className="card">
        <img src={Shoe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Shoe.name}</h5>
          <p className="card-text">{Shoe.price}.</p>
          <a href="#" className="btn" style={{ background: "black", color: "white" }} onClick={() => {
            this.props.xemChitiet(Shoe);
          }}>Xem chi tiết</a>
        </div>
      </div>
    )
  }
}
