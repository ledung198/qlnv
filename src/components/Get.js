import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Edit } from './Edit';
import Swal from 'sweetalert2';



export class Get extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deps: [],
            editModalShow: false,
            term: '',
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({
            term: event.target.value
        })
    }
    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        fetch('https://quanlyapi.somee.com/api/NhanVien')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data })
            })

    }

    componentDidUpdate() {
        this.refreshList()
    }

    deleteDep(depmaNv) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Bạn có muốn xóa người này?',
            text: "Sau khi xóa bạn sẽ không thể khôi phục dữ liệu về người dùng này!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true

        }).then((result) => {

            if (result.value) {
                fetch('https://quanlyapi.somee.com/api/NhanVien?maNv=' + depmaNv, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'applicontion/json',
                        'Content-Type': 'application/json'
                    }
                })
                swalWithBootstrapButtons.fire(
                    'Bạn đã xóa!',
                    'Người này đã bị xóa khỏi dữ liệu.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Hủy bỏ',
                    'Bạn không xóa người này!',
                    'error'
                )
            }
        })
        // if (window.confirm('Bạn có chắc xóa người này?')) {

        // }
    }
    render() {

        const { deps, depmaNv, dephoTen, depdanToc, depgioiTinh, depdiaChi, depngaySinh, depsoDT, depmaCv, depmaPb, depbacLuong } = this.state;
        let editModalClose = () => this.setState({ editModalShow: false })
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Thông tin nhân viên</h1>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Mã Nhân Viên</th>
                            <th>Họ Tên</th>
                            <th>Dân Tộc</th>
                            <th>Giới Tính</th>
                            <th>Địa Chỉ</th>
                            <th>Ngày Sinh</th>
                            <th>Số Điện Thoại</th>
                            <th>Mã Chức Vụ</th>
                            <th>Tên Chức vụ</th>
                            <th>Mã Phòng Ban</th>
                            <th>Tên Phòng Ban</th>
                            <th>Bậc Lương</th>
                            <th>Lương cơ bản</th>
                            <th>Lương tháng</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep =>
                            <tr key={dep.MaNv}>
                                <td>{dep.MaNv}</td>
                                <td>{dep.HoTen}</td>
                                <td>{dep.DanToc}</td>
                                <td>{dep.GioiTinh}</td>
                                <td>{dep.DiaChi}</td>
                                <td>{dep.NgaySinh}</td>
                                <td>{"0" + dep.SoDT}</td>
                                <td>{dep.MaCV}</td>
                                <td>{dep.TenCV}</td>
                                <td>{dep.MaPB}</td>
                                <td>{dep.TenPhongBan}</td>
                                <td>{dep.BacLuong}</td>
                                <td>{dep.LuongCB}</td>
                                <td>{dep.LuongCB * 30}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={() => this.setState({ editModalShow: true, depmaNv: dep.MaNv, dephoTen: dep.HoTen, depdanToc: dep.DanToc, depgioiTinh: dep.GioiTinh, depdiaChi: dep.DiaChi, depngaySinh: dep.NgaySinh, depsoDT: dep.SoDT, depmaCv: dep.MaCV, depmaPb: dep.MaPB, depbacLuong: dep.BacLuong })}>Sửa</Button>
                                        <Edit
                                            show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            depmaNv={depmaNv}
                                            dephoTen={dephoTen}
                                            depdanToc={depdanToc}
                                            depgioiTinh={depgioiTinh}
                                            depdiaChi={depdiaChi}
                                            depngaySinh={depngaySinh}
                                            depsoDT={depsoDT}
                                            depmaCv={depmaCv}
                                            depmaPb={depmaPb}
                                            depbacLuong={depbacLuong}
                                        />
                                        <Button className="mr-2"
                                            onClick={() => this.deleteDep(dep.MaNv)} variant="danger"
                                        >Delete</Button>
                                    </ButtonToolbar>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        )
    }
}
