const React = require('react');
const Default = require('./Default');

class Index extends React.Component {
    render() {
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
                    <div className="workoutsContainer">
                        {/*use map to populate*/}
                        <h2>Leg Burner</h2>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = Index;