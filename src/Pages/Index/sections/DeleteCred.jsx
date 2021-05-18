import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';
import { deleteCred } from '../../../components/APIs';

class DeleteCred extends Component {
constructor(){
    super();
    this.state = {
        open: false,
        id: 0,
        platform: ''
    }
}

handleOpen = () =>{
    this.setState(()=>({ open: true }));
}

handleClose = () =>{
    this.setState(()=>({ open: false }));
}

handleDelete = () =>{
    fetch(`${deleteCred}${this.state.id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.status){
            this.props.refresh();
        }
    })
    .catch(err =>{
        console.error(err);
    })
}

componentDidMount(){
    this.setState(()=>({
        id: this.props.id,
        platform: this.props.platform
    }));
}

render() {
    return (
        <Fragment>
            <button className="btn btn-danger btn-sm" onClick={this.handleOpen}>Delete</button>

            <Modal show={this.state.open} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Delete Credentials</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete your <b className="text-muted">{this.state.platform}</b> credentials</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-info" onClick={this.handleClose}>Cancel</button>

                    <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
}

export default DeleteCred;