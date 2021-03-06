import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import './../App.css';
import Swal from 'sweetalert2';


export class Post extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();

        // URL
        //AUTO
        let url = 'https://quanlyapi.somee.com/api/NhanVien?';
        for (let key of Object.keys(event.target)) {
            console.log(key, event.target[key])
            url += `${event.target[key].name}=${event.target[key].value}&`
        }
        console.log(url)

        // Fetch

        // THen
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'aplication/json',
                'Content-type': 'aplication/json',
            },
            body: JSON.stringify({
                maNv: event.target.maNv.value,
                hoTen: event.target.hoTen.value,
                danToc: event.target.danToc.value,
                gioiTinh: event.target.gioiTinh.value,
                diaChi: event.target.diaChi.value,
                ngaySinh: event.target.ngaySinh.value,
                soDT: event.target.soDT.value,
                maCv: event.target.maCv.value,
                maPb: event.target.maPb.value,
                bacLuong: event.target.bacLuong.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Thêm Thành Công',
                    showConfirmButton: true,
                })
            },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm thất bại!',
                    })
                })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 style={{ textAlign: "center" }}>Thêm Nhân Viên</h1>
                    <Row>
                        <Col sm={6} style={{ margin: "auto" }}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="form-add">
                                    <Form.Control type="number" name="maNv" required placeholder="Mã Nhân Viên"></Form.Control>
                                    <Form.Control type="text" name="hoTen" required placeholder="Họ và Tên"></Form.Control>
                                    <Form.Control type="text" name="danToc" required placeholder="Dân tộc"></Form.Control>
                                    <Form.Control type="text" name="gioiTinh" required placeholder="Giới Tính" as="select">
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                        <option>Khác</option>
                                    </Form.Control>
                                    <Form.Control type="text" name="diaChi" required placeholder="Địa Chỉ"></Form.Control>
                                    <Form.Control type="date" name="ngaySinh" required placeholder="Ngày Sinh"></Form.Control>
                                    <Form.Control type="number" name="soDT" required placeholder="Số điện thoại"></Form.Control>
                                    <Form.Control type="text" name="maCv" required placeholder="Mã Chức vụ" as="select">
                                        <option>CV01</option>
                                        <option>CV02</option>
                                        <option>CV03</option>
                                        <option>CV04</option>
                                        <option>CV05</option>
                                        <option>CV06</option>
                                        <option>CV07</option>
                                        <option>CV08</option>
                                        <option>CV09</option>
                                        <option>CV10</option>
                                        <option>CV11</option>
                                        <option>CV12</option>
                                        <option>CV13</option>
                                        <option>CV14</option>
                                        <option>CV15</option>
                                    </Form.Control>
                                    <Form.Control type="text" name="maPb" required placeholder="Mã Phòng Ban" as="select">
                                        <option>PB01</option>
                                        <option>PB02</option>
                                        <option>PB03</option>
                                        <option>PB04</option>
                                        <option>PB05</option>
                                        <option>PB06</option>
                                        <option>PB07</option>
                                        <option>PB08</option>
                                        <option>PB09</option>
                                        <option>PB10</option>
                                        <option>PB11</option>
                                        <option>PB12</option>
                                        <option>PB13</option>
                                        <option>PB14</option>
                                    </Form.Control>
                                    <Form.Control type="text" name="bacLuong" required placeholder="Bậc Lương" as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group >
                                    <Button variant="primary" type="submit" style={{ margin: "auto" }} className="add">Thêm</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>

        )
    }
}