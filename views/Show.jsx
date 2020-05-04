const React = require('react');
const Default = require('./Default');

class Show extends React.Component {
    render() {
        const { workout } = this.props;
        console.log(workout.workout);
        return(
            <Default>
                <h1>{workout.title}</h1>
                <div className="workoutContainer">
                    <div className="exerciseImg">
                        <img src="../images/stockPhoto.jpg" alt="Workout Photo"/>
                    </div>
                    <div className="exerciseDisplay">
                        <table>
                            {/* {workout.} */}
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
            </Default>
        )
    }
}

module.exports = Show;