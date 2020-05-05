const React = require('react');

class Default extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="../style.css"/>
                </head>
                <body>
                    {this.props.children}    
                    <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossOrigin="anonymous"></script>
                    <script src="../app.js"></script>
                </body>
                <footer>
                    <h2><a href="#">Contact</a></h2>
                </footer>
            </html>
        )
    }
}

module.exports = Default;