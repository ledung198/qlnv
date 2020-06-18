import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';


export class Edit extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit(event) {
        event.preventDefault();

        // URL
        //AUTO
        let url = 'http://quanlyapi.somee.com/api/NhanVien?';
        for (let key of Object.keys(event.target)) {
            console.log(key, event.target[key])
            url += `${event.target[key].name}=${event.target[key].value}&`
        }
        console.log(url)

        // Fetch
        fetch(url, {
            method: 'PUT',
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
                alert('Sửa thành công')
            },
                (error) => {
                    alert('Sửa thất bại')
                })
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sửa nhân viên
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlID="maNv">
                                        <Form.Control type="number" name="maNv" required disabled defaultValue={this.props.depmaNv} placeholder="Mã Nhân Viên"></Form.Control>
                                        <Form.Control type="text" name="hoTen" required defaultValue={this.props.dephoTen} placeholder="Họ và Tên"></Form.Control>
                                        <Form.Control type="text" name="danToc" required defaultValue={this.props.depdanToc} placeholder="Dân tộc"></Form.Control>
                                        <Form.Control type="text" name="gioiTinh" required defaultValue={this.props.depgioiTinh} placeholder="Giới Tính"></Form.Control>
                                        <Form.Control type="text" name="diaChi" required defaultValue={this.props.depdiaChi} placeholder="Địa Chỉ"></Form.Control>
                                        <Form.Control type="date" name="ngaySinh" required defaultValue={this.props.depngaySinh} placeholder="Ngày Sinh"></Form.Control>
                                        <Form.Control type="number" name="soDT" requireddefaultValue={this.props.depsoDT} placeholder="Số điện thoại"></Form.Control>
                                        <Form.Control type="text" name="maCv" required defaultValue={this.props.depmaCv} placeholder="Mã Chức vụ"></Form.Control>
                                        <Form.Control type="text" name="maPb" required defaultValue={this.props.depmaPb} placeholder="Mã Phòng Ban"></Form.Control>
                                        <Form.Control type="text" name="bacLuong" required defaultValue={this.props.depbacLuong} placeholder="Bậc Lương"></Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">Sửa</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
