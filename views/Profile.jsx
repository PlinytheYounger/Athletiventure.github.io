const React = require('react');
const Default = require('./Default');

class Profile extends React.Component {
    render() {
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

                <main>
                    <div className="level">
                        <h2>Level:</h2>
                        <h2 className="levelNum">1</h2>
                    </div>
                    <div className="weight">
                        <h2>Current Weight:</h2>
                        <h2 className="weightNum">XXX lbs</h2>
                    </div>
                    <div className="goal">
                        <h2>Goal:</h2>
                        <h2 className="goalNum">XXX lbs</h2>
                    </div>
                    <div className="avatar">
                        <img src="../images/tronAvatarEx.png" alt="avatar"/>
                    </div>
                    <div className="progressContainer">
                        <div className="circle small">
                            <h2>Weekly Progress</h2>
                        </div>
                    </div>
                    <div className="points">
                        <h2>Points: 10/50</h2>
                        <div className="pointsContainer">
                            <div className="pointsTracker"></div>
                        </div>
                    </div>
                </main>

            </Default>
        )
    }
}

module.exports = Profile;