import React, { Component } from 'react';
import { login } from "../../actions/user";
import Swal from 'sweetalert2';

export default class Login extends Component {
  // Formik + yup
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submit = () => {
    const infoUser = this.state;
    login(infoUser)
      .then((result) => {
        //Lưu vào local storage
        localStorage.setItem("jwt", result.data.accessToken);
        // PopUp dang ky thanh cong, ok --> login
        Swal.fire({
          title: 'Bạn đã đăng nhập thành công',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        })
          .then((result) => {
            this.props.history.push("/");
          })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1 className="my-5 text-center">Đăng nhập</h1>
        <div className="container">
          <div className="form-group">
            <label htmlFor="taiKhoan">Tên tài khoản:</label>
            <input type="text"
              name="taiKhoan" value={this.state.user}
              className="form-control" id="taiKhoan"
              onChange={this.onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="matKhau">Mật khẩu:</label>
            <input type="password"
              name="matKhau" value={this.state.pass}
              className="form-control" id="matKhau"
              onChange={this.onChange} />
          </div>

          <button className="btn btn-success" onClick={this.submit} >Đăng nhập</button>
        </div>
      </div>
    )
  }
}
