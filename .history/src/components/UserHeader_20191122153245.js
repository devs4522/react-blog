import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const user = this.props.users.find((user) => user.id === this.props.userId);
        console.log(user);
        return (
            <h5>{user.name}</h5>
        );
    }


}

const mapStateToProps = (state) => {
    return { users: state.users}
}
export default connect(mapStateToProps, { fetchUser })(UserHeader);