const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { workout } = this.props;
        return(
            <Default>
                <h1>{workout.title}</h1>
            </Default>
        )
    }
}

module.exports = Show;