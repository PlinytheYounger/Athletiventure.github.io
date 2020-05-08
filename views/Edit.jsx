const React = require('react');
const Default = require('./Default');

class Edit extends React.Component {
    render() {
        const { workout } = this.props;
        return(
            <Default>
                <header className="newHeader">
                    <nav>
                        <ul>
                                <li><button id="mainPage"><a href="/workouts">Main Page</a></button></li>
                                <li><button id="profilePage"><a href="/workouts/user">Profile Page</a></button></li>
                                <li><button id="Addnew"><a href="/workouts/new">Add New</a></button></li>
                        </ul>
                    </nav>
                    <h1>
                        Add a Comment!
                    </h1>
                    <div className="progressDisplay">
                        <h4>Weekly Progress</h4>
                        <h4>Points: 10</h4>
                    </div>
                </header>
                
                <div className="updateComment">
                    <form action={`/workouts/${workout._id}?_method=PUT`} method="POST">
                        <h2>Leave a comment for: <span>{workout.title}</span></h2>
                        <input type="textarea" name="comments"/>
                        <input type="submit" name="" value="Add Comment"/>
                    </form>
                </div>

            </Default>
        )
    }
}

module.exports = Edit;