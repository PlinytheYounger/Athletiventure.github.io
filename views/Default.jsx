const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="../style.css"/>
                </head>
                <body>
                    <header>
                        <h1>World of Weightloss</h1>
                        <div>
                            <div className="userDisplay">
                                <img src="../images/profilePlaceholder.jpg" alt="Profile Photo"/>
                                <div className="progressDisplay">
                                    <h3>Weekly Progress</h3>
                                    <h3>Points: [XXXXXXXXOOOOOO]</h3>
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
                    {this.props.children}    
                    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossOrigin="anonymous"></script>
                    <script src="../app.js"></script>
                </body>
                <footer>
                    <h2>Contact</h2>
                </footer>
            </html>
        )
    }
}

module.exports = Default;