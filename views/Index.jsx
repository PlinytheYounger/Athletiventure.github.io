const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
        const { workouts } = this.props;
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
                    <h1>Athletiventure</h1>
                    <div className="progressDisplay">
                        <h4>Weekly Progress</h4>
                        <h4>Points: 10</h4>
                    </div>
                </header>
                <div className="mainContainer">
                    <div className="dropdowns">
                        <div className="dropdownContainer">

                            <form action="/workout" method="GET" className="workoutFilter">
                                <label>
                                    Difficulty:
                                    <select name="difficulty">
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                        <option value="Extreme Advanced">Extreme Advanced</option>
                                    </select>
                                </label>
                                <label>
                                    Body Focus:
                                    <select name="bodyFocus">
                                        <option value="Upper Body">Upper Body</option>
                                        <option value="Core">Core</option>
                                        <option value="Lower Body">Lower Body</option>
                                        <option value="Full Body">Full Body</option>
                                    </select>
                                </label>
                                <label>
                                    Workout Type:
                                    <select name="difficulty">
                                        <option value="Cardio">Cardio</option>
                                        <option value="Hiit">Hiit</option>
                                        <option value="Strength">Strength</option>
                                        <option value="Recovery">Recovery</option>
                                    </select>
                                </label>

                            </form>
                        </div>
                    </div>
                        {workouts.map((item, index) => {
                            return (
                                <div className="workoutsContainer">
                                    <div className="workoutImage">
                                        <img src="../images/namaste.jpg" alt="Workout Image"/>
                                    </div>
                                    <div className="workoutDisplay">
                                        <h3>{item.title}</h3>
                                        <ul>
                                            <li>Workout Length:  <span>{item.length} minutes</span></li>
                                            <li></li>
                                            <li>Type:  <span>{item.workoutType.map((element) => {return (element) })}</span></li>
                                            <li>Difficulty:  <span>{item.difficulty}</span></li>
                                            <li>Points:  <span>{item.points}</span></li>
                                            <li>Comments:  {item.comments.map((string) => {
                                                return(<span>{string}</span>)
                                            })}</li>
                                            <li><a href={`/workouts/${item._id}`}>Do Workout!</a></li>
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