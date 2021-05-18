import { isAuthenticated } from '../utils/Sessions'
import React from 'react'

const DummyComponent = () => {
    return (
        <div> Loading... </div>
    )
}

const withAuth = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }

        componentDidMount = () => {
            if (isAuthenticated())
                this.setState({
                    component: <WrappedComponent
                        {...this.props}
                    />
                })
            else
                this.setState({
                    component: <DummyComponent />
                })
        }

        render() {
            return this.state.component
        }
    };
}

export default withAuth;