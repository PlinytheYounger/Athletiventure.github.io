const React = require('react');
const Default = require('./Default');

class New extends React.Component {
    render() {
        const array = ['1', '2', '3', '4', '5', '6'];
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
                        Add New Workout!
                    </h1>
                    <div className="progressDisplay">
                        <h4>Weekly Progress</h4>
                        <h4>Points: 10</h4>
                    </div>
                </header>
                <div>
                    <form action={`/workouts`} method="POST" id="createWorkout">
                        <div className="newWorkout">
                            <div className="inputs1">
                                <input type="text" name="title" placeholder="Title"/><br/>
                                <input type="text" name="link" placeholder="Link"/>
                                <input type="text" name="length" placeholder="Workout Length"/><br/>
                                <select name="bodyFocus">
                                    <option>Body Focus</option>
                                    <option>Full Body</option>
                                    <option>Lower Body</option>
                                    <option>Upper Body</option>
                                    <option>Core</option>
                                </select>
                                <select name="workoutType">
                                    <option>Workout Type</option>
                                    <option>Cardio</option>
                                    <option>HIIT (High Intensity Interval Training)</option>
                                    <option>Strength</option>
                                    <option>Recovery</option>
                                </select>
                                <select name="difficulty">
                                    <option>Difficulty</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                    <option>Extreme Advanced</option>
                                </select>
                            <input type="submit" name="" value="Publish New Workout"></input>

                            </div>

                            <div className="inputs2">
                                {array.map((item, index) => {
                                    return(
                                    <>
                                    <input type="text" name={`exercise${item}Exercise`} placeholder={`Exercise ${item}`}/>
                                    <input type="text" name={`exercise${item}Sets`} placeholder="Sets"/>
                                    <input type="text" name={`exercise${item}Reps`} placeholder="Reps"/>
                                    <input type="text" name={`exercise${item}Rest`} placeholder="Rest"/>
                                    <div></div>
                                    </>)
                                })}
                            </div>
                        </div>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = New;