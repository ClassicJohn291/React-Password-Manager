import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { fetchCreds } from '../../components/APIs';
import DeleteCred from './sections/DeleteCred';

import Loader from '../../components/Loader';


class Index extends Component {
    constructor(){
        super();
        this.state = {
            credentials: [],
            loading: true
        }
    }

    fetchData = () =>{
        fetch(fetchCreds)
        .then(res => res.json())
        .then(data =>{
            if(data.status){
                this.setState(()=>({ credentials: data.credentials, loading: false }));
            }
        })
        .catch(err =>{
            console.error(err);
        })
    }

    componentDidMount(){
        this.fetchData();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Table striped hover borderless size="sm">
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Platform</td>
                                <td>Username</td>
                                <td>Password</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.credentials.map((cred, index) =>(
                                <tr key={index}>
                                    <td> {++index} </td>
                                    <td> {cred.platform} </td>
                                    <td> {cred.username} </td>
                                    <td> {cred.password} </td>
                                    <td>
                                        <div className="btn-group">
                                            <Link to={`/edit/${cred.id}`} className="btn btn-info btn-sm">Edit</Link>
                                            <DeleteCred platform={cred.platform} id={cred.id} refresh={this.fetchData} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {this.state.loading ? <Loader /> : null}
                </div>
            </div>
        );
    }
}

export default Index;