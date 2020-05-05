const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { workout } = this.props;
        return(
            <Default>
                <header className="showHeader">
                    <h1>{workout.title}</h1>
                    <nav>
                        <ul>
                            <li><button id="mainPage"><a href="/workouts">Main Page</a></button></li>
                            <li><button id="Schedule"><a href="#">Schedule</a></button></li>
                            <li><button id="Addnew"><a href="/workouts/new">Add New</a></button></li>
                        </ul>
                    </nav>
                </header>
                <div className="workoutContainer">
                    <div className="exerciseImg">
                        <img src="../images/stockPhoto.jpg" alt="Workout Photo"/>
                    </div>
                    <div className="exerciseDisplay">
                        <table>
                            <tr>
                                <th>Exercise</th>
                                <th>Sets</th>
                                <th>Reps</th>
                            </tr>
                            {workout.workout.map((object, index) => {
                                return(
                                    <tr>
                                        <th>{object.exercise}</th>
                                        <th>{object.sets}</th>
                                        <th>{object.reps}</th>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
                <div className="changeButtons">
                    <form action={`/workouts/${workout._id}?_method="PUT"`} method="POST">
                        <input type="submit" name="" value="Add a Comment"/>
                    </form>
                    <form action={`/workouts/${workout._id}?_method="DELETE"`} method="PUT">
                        <input type="submit" name="" value="Delete Workout"/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Show;