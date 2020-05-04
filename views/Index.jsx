const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const { workouts } = this.props;
        return(
            <Default>
                <div className="mainContainer">
                    <div className="dropdowns">
                        <button id="buttonDiffculty" className="dropbtn">Difficulty</button>
                        <div id="dropdownDifficulty" className="dropdownContent">
                            <a href="#">Recovery</a>
                            <a href="#">Beginner</a>
                            <a href="#">Intermediate</a>
                            <a href="#">Advanced</a>
                            <a href="#">Very Advanced</a>
                        </div>

                        <button id="buttonBodyFocus"  className="dropbtn">Body Focus</button>
                        <div id="dropdownBodyFocus" className="dropdownContent">
                            <a href="#">Upper Body</a>
                            <a href="#">Back and Chest</a>
                            <a href="#">Core</a>
                            <a href="#">Lower Body</a>
                            <a href="#">Glutes</a>
                            <a href="#">Full body</a>
                        </div>

                        <button id="buttonType" className="dropbtn">Workout Type</button>
                        <div id="dropdownType" className="dropdownContent">
                            <a href="#">Cardio</a>
                            <a href="#">Hiit</a>
                            <a href="#">Weightlifting</a>
                            <a href="#">Recovery</a>
                            <a href="#">Stretching</a>
                        </div>
                    </div>
                        {workouts.map((item, index) => {
                            return (
                                <div className="workoutsContainer">
                                    <div className="workoutImage">
                                        <img src="../images/stockPhoto.jpg" alt="Workout Image"/>
                                    </div>
                                    <div className="workoutDisplay">
                                        <h3><a href={`/workouts/${item._id}`}>{item.title}</a></h3>
                                        <ul>
                                            <li>Workout Length: {item.length} minutes</li>
                                            <li>Type: {item.workoutType.map((element) => {return (element) })}</li>
                                            <li>Difficulty: {item.difficulty}</li>
                                            <li>Points: {item.points}</li>
                                            <li>Comments: {item.comments}</li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })};
                    </div>
            </Default>
        )
    }
}

module.exports = Index;