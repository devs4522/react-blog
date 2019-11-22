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
            <div>User Header</div>
        )
    }


}

const mapStateToProps = (state) => {
    return { users: state.users}
}
export default connect(null, { fetchUser })(UserHeader);