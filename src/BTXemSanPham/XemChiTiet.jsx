import React, { Component } from 'react'

export default class XemChiTiet extends Component {
  render() {
    let { shoeChitiet } = this.props;
    return (
      <div className="div text-center">
        <h3> Thông Tin Chi Tiết</h3>
        <div className="row">

          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">name</th>
                  <th scope="col">alias</th>
                  <th scope="col">price</th>
                  <th scope="col">description</th>
                  <th scope="col">shortDescription</th>
                  <th scope="col">quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={shoeChitiet.image} alt="" className='img-fluid' style={{ width: "150px" }} />
                  </td>
                  <td >{shoeChitiet.name}</td>
                  <td>{shoeChitiet.alias}</td>
                  <td>{shoeChitiet.price}</td>
                  <td>{shoeChitiet.description}</td>
                  <td>{shoeChitiet.shortDescription}</td>
                  <td>{shoeChitiet.quantity}</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>

    )
  }
}
