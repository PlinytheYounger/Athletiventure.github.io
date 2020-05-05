const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const { workouts } = this.props;
        return(
            <Default>
                <header>
                    <h1>Workout Adventure</h1>
                    <div>
                        <div className="userDisplay">
                            <img src="../images/profilePlaceholder.jpg" alt="Profile Photo"/>
                            <div className="progressDisplay">
                                <h4>Weekly Progress</h4>
                                <h4>Points: 10</h4>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li><button id="mainPage"><a href="/workouts">Main Page</a></button></li>
                                <li><button id="Schedule"><a href="#">Schedule</a></button></li>
                                <li><button id="Addnew"><a href="/workouts/new">Add New</a></button></li>
                            </ul>
                        </nav>
                    </div>
                </header>
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
                                            <li>Workout Length:  <span>{item.length} minutes</span></li>
                                            <li>Type:  <span>{item.workoutType.map((element) => {return (element) })}</span></li>
                                            <li>Difficulty:  <span>{item.difficulty}</span></li>
                                            <li>Points:  <span>{item.points}</span></li>
                                            <li>Comments:  <span>{item.comments}</span></li>
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