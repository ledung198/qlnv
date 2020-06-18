// import React, { Component } from 'react';
// import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

// export class AddDepModal extends Component {
//     constructor(props) {
//         super(props);
//     }
//     handleSubmit(event) {
//         event.preventDefault();

//         // URL
//         //AUTO
//         let url = 'http://quanlyapi.somee.com/api/NhanVien?';
//         for (let key of Object.keys(event.target)) {
//             console.log(key, event.target[key])
//             url += `${event.target[key].name}=${event.target[key].value}&`
//         }

//         console.log(url)

//         // Fetch

//         // THen
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'aplication/json',
//                 'Content-type': 'aplication/json',
//             },
//             body: JSON.stringify({
//                 maNv: event.target.maNv.value,
//                 hoTen: event.target.hoTen.value,
//                 danToc: event.target.danToc.value,
//                 gioiTinh: event.target.gioiTinh.value,
//                 diaChi: event.target.diaChi.value,
//                 ngaySinh: event.target.ngaySinh.value,
//                 soDT: event.target.soDT.value,
//                 maCv: event.target.maCv.value,
//                 maPb: event.target.maPb.value,
//                 bacLuong: event.target.bacLuong.value,
//             })
//         })
//             .then(res => res.json())
//             .then((result) => {
//                 alert(result)
//             },
//                 (error) => {
//                     alert('Failed')
//                 })
//     }

//     render() {
//         return (
//             <Modal
//                 {...this.props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Sửa Nhân Viên
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className="container">
//                         <Row>
//                             <Col sm={6}>
//                                 <Form onSubmit={this.handleSubmit}>
//                                     <Form.Group controlID="maNv">
//                                         <Form.Control type="number" name="maNv" required placeholder="Mã Nhân Viên"></Form.Control>
//                                         <Form.Control type="text" name="hoTen" required placeholder="Họ và Tên"></Form.Control>
//                                         <Form.Control type="text" name="danToc" required placeholder="Dân tộc"></Form.Control>
//                                         <Form.Control type="text" name="gioiTinh" required placeholder="Giới Tính"></Form.Control>
//                                         <Form.Control type="text" name="diaChi" required placeholder="Địa Chỉ"></Form.Control>
//                                         <Form.Control type="date" name="ngaySinh" required placeholder="Ngày Sinh"></Form.Control>
//                                         <Form.Control type="number" name="soDT" required placeholder="Số điện thoại"></Form.Control>
//                                         <Form.Control type="text" name="maCv" required placeholder="Mã Chức vụ"></Form.Control>
//                                         <Form.Control type="text" name="maPb" required placeholder="Mã Phòng Ban"></Form.Control>
//                                         <Form.Control type="text" name="bacLuong" required placeholder="Bậc Lương"></Form.Control>
//                                     </Form.Group>
//                                     <Form.Group>
//                                         <Button variant="primary" type="submit">Thêm</Button>
//                                     </Form.Group>
//                                 </Form>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         )
//     }
// }