from flask_app import app
from flask_app.controller import dojo_con
from flask_app.controller import ninja_con
#! ALWAYS REMEMBER TO DECLARE YOUR ROUTES



if (
    __name__ == "__main__"
):  # Ensure this file is being run directly and not from a different module
    app.run(debug=True)  # Run the app in debug mode.
