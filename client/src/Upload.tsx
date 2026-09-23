import * as React from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elementName: string]: any;
        }
    }
}

function Upload() {
    //practice code, IGNORE

    //    const handleSubmit = async (formData: any) => {
    //        const username = formData.get('username');
    //        const recipeName = formData.get('recipeName');

    //        console.log('Username:', username, ' Recipe Name:', recipeName);
    //    };

    //    return (
    //        <form action={handleSubmit}>
    //            <div className="col-auto">
    //                <label>Username: </label>
    //                <input type="text" className="form-control" id="inputUsername" placeholder="Username..." name="username" />
    //                <label>Recipe Name: </label>
    //                <input type="text" className="form-control" id="inputRecipeName" placeholder="Name..." name="recipeName" />
    //                <button type="submit" className="btn btn-primary mb-3">Submit Recipe :D</button>
    //            </div>
    //        </form>
    //    );

    /*
 
    JSX from: https://getbootstrap.com/docs/5.3/forms/form-control/?#readonly-plain-text
    specifically the "readonly plain text" section
    
    */

    const [formData, setFormData] = React.useState({ username: '', recipeName: '' });

    //this is to handle input from the user
    //e, the character within the parentheses, is the 'event', which is the input from the user
    //...formData is a spread operator, which makes a shallow copy of the data in the form so that it can be stored 
    // in the state variable formData
    //[e.target.name] is the name of the input field, which is either 'username' or 'recipeName'
    //[e.target.value] is the value of the input field, which is the actual input from the user
    const handleChange = (e: Event & { target: HTMLInputElement }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: Event) => { //FormEvent deprecated; ChangeEvent supposedly doesn't work. Event does though
        e.preventDefault();
        try {
            //await is a keyword to pause the execution of the fuction til the server responds
            //fetch is the built-in browser tool used to make HTTP requests to the server
            const response = await fetch('http://localhost:5000/api/recipes', { //https://pantrypal-sbeo.onrender.com/api/recipes
                //look up this line, if required, implement api/auth/register and handle the request

                // is the endpoint we are sending the request to
                //POST request is used to send/submit new data to a server
                method: 'POST',
                //tells the server that the data is formatted for JSON files and to read it as such
                headers: { 'Content-Type': 'application/json' },
                //converts the formData object into a JSON string so that it can be sent to the server
                body: JSON.stringify(formData),
            });
            
            //wait for the servert to respond, and then convert the response into a JSON object so that
            //it can be read by the client
            const data = await response.json();
            if (response.ok) {
                alert('Successfully submitted recipe!');
            }
            else {
                alert('Failed to submit recipe: ' + data.message);
            }
        }
        catch (error) {
            console.error('Error:', error);
        };

        //try-catch is trying to send the data to the server, and if it fails, it will catch the error and log it to the console

        //****in JS/TS there can't bee a ';' after the try section, or it won't detect the catch section
    };

    //'col-auto' is a bootstrap class that makes the form responsive to the size of the screen and automatically adjuststhe width 
    //of the form to fit the content
    return (
        <form onSubmit={handleSubmit}>
            <div className="col-auto">
                <label>Username: </label>
                <input type="text" name="username" className="form-control" placeholder="Enter Username..." onChange={handleChange} required />
                <label>Recipe Name: </label>
                <input type="text" name="recipeName" className="form-control" placeholder="Enter Recipe Name..." onChange={handleChange} required />
                <br></br>
                <button type="submit" className="btn btn-primary">Submit Recipe :D</button>
            </div>
        </form>
    ); //there are errors here but somehow it builds and deploys
}

export default Upload;