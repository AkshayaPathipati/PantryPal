function ListGroup() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    //items = [];

    const getMessage = () => {
        if (items.length === 0) return <p>bruh, there's really nothing here</p>;
    }

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 ? <p>No item found</p> : null}
            {items.length === 0 && <p>this is the same thing, just written differently</p>}
            {getMessage()}
            <ul className="list-group">
                {items.map((item) => (<li className="list-group-item" key={item} onClick={() => console.log(item)}>{item}</li>))}
            </ul>
        </>
    );
}

/*
NOTES 

the <> and </> are called React fragments, which allow us to group multiple elements without adding extra nodes to the DOM

on line 12, we are using a ternary operator to conditionally render a message if the items array is empty. If items.length is 0, it will render <p>No item found</p>, 
otherwise it will render null (nothing).

On lines 5-7 and 13, we use arrow functions to define the getMessage function and the map callback function. Arrow functions are a concise way to write functions within functions
in JavaScript.

on line 15, we are mapping over the items array to create list items
the syntax is {items.map(item => <li>{item}</li>)}, which essentially means "for each item in the items array, create a list item with the value of that item"
the curly braces {} are used to embed JavaScript expressions in JSX

also on like 15, we are using the key prop to give each list item a unique identifier, which is important for performance and to avoid warnings in the console
*/

export default ListGroup;
