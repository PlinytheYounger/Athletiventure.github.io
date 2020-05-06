const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { workout } = this.props;
        return(
            <Default>
                <header className="editHeader">
                    <h1>Add a comment for workout: {workout.title}</h1>
                </header>
                
                <form action={`/workouts/${workout._id}?_method=PUT`} method="POST">
                    <input type="textarea" name="comments"/>
                    <input type="submit" name="" value="Add Comment"/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit;