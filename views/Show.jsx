const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
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
                        {workout.title}
                    </h1>
                    <div className="progressDisplay">
                        <h4>Weekly Progress</h4>
                        <h4>Points: 10</h4>
                    </div>
                </header>
                <div className="workoutContainer">
                    <div className="exerciseImg">
                        <img src="../images/stockPhoto.jpg" alt="Workout Photo"/>
                    </div>
                    <div className="exerciseParent">
                        <table>
                            <tr>
                                <th>Exercise</th>
                                <th>Reps</th>
                                <th>Sets</th>
                            </tr>
                        {workout.workout.map((object, index) => {
                            return (
                                <tr>
                                    <td>{object.exercise}</td>
                                    <td>{object.sets}</td>
                                    <td>{object.reps}</td>
                                </tr>
                            )
                        })}
                        </table>
                    </div>
                </div>
                <div className="changeButtons">
                    <button><a href={`/workouts/${workout._id}/edit`}>Add Comment</a></button>
                    <form action={`/workouts/${workout._id}?_method=DELETE`} method="POST">
                        <input type="submit" name="" value="Delete Workout"/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Show;