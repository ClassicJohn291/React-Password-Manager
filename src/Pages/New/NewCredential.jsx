import React from 'react';
import { newCred } from '../../components/APIs';
import Loader from '../../components/Loader';

class NewCredential extends React.Component{
    constructor(){
        super();
        this.state = {
            platform: '',
            username: '',
            password: '',
            showSuccess: false,
            loading: false
        }
    }

    handleChange = (e) =>{
        const { name, value } = e.target;
        this.setState(()=>({ [name]: value }));
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState(()=>({ loading: true, showSuccess: false }));

        fetch(newCred, {
            method: 'POST',
            headers: new Headers({ "Content-Type": "Application/json" }),
            body: JSON.stringify({ 
                platform: this.state.platform, 
                username: this.state.username, 
                password: this.state.password 
            })
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.status){
                this.setState(()=>({ 
                    showSuccess: true,
                    platform: '',
                    username: '',
                    password: '',
                    loading: false
                }));
            }
        })
        .catch(err =>{
            console.error(err);
        })
    }

    render(){
        return(
            <div className="bg-light">
                <div className="container py-5">
                    <h3>New Credential</h3>
                    <hr/>

                    {this.state.loading ? 
                        <Loader />
                        :
                        <form className="py-5" onSubmit={this.handleSubmit}>
                            
                            {this.state.showSuccess ? 
                                <div className="alert alert-info">
                                    New Credential has been created successfully.
                                </div>
                            : null}

                                <div className="form-group">
                                    <label htmlFor="platform">Platform</label>
                                    <input type="text" className="form-control w-50" value={this.state.platform} id="platform" name="platform" onChange={this.handleChange} placeholder="Enter Platform here..." />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control w-50" value={this.state.username} id="username" name="username" onChange={this.handleChange} placeholder="Enter Username here..." />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" className="form-control w-50" value={this.state.password} id="password" name="password" onChange={this.handleChange} placeholder="Enter Password here..." />
                                </div>

                                <div className="form-group pt-3">
                                    <hr/>
                                    <button type="submit" className="btn btn-info btn-block">Create</button>
                                </div>

                        </form>
                    }
                </div>
            </div>
        );
    }
}

export default NewCredential;