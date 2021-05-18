import React from 'react';


class Person extends React.Component{
	render(){
		return(
			<div className="col-md-4 mb-5">
				<div className="card user-card shadow border-0 text-center m-auto p-3">
		  			<div><img src={this.props.avatar_url} className="user-avatar" alt="user" /></div>
					<strong className="d-block my-3">{this.props.login}</strong>
					<button to={'user/' + this.props.login} className="btn btn-sm btn-dark">More Info</button>
				</div>
			</div>
		)
	}
}
export default Person;