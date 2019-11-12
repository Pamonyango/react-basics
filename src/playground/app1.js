// JSX- Javscript XML
var app= {
    title: 'Todo app',
    subtitle: 'Business goals',
    options: ['life goals', 'career goals']
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p> {app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Andrew',
    age: 29,
    location: 'Chicago'
};

<<<<<<< HEAD
function getLocation(location) {
    return <p> City: {location} </p>
}
=======
>>>>>>> 5db50395b4f2ab0dce3c17e14b3d3ff5f8a5d0cf
let count = 0;

const addOne = () => {
    count++;
    renderCounter();
};
<<<<<<< HEAD

=======
>>>>>>> 5db50395b4f2ab0dce3c17e14b3d3ff5f8a5d0cf
const minusOne = () => {
    count--;
    renderCounter();
};
<<<<<<< HEAD

const reset = () => {
    count = 0;
=======
const reset = () => {
    count= 0;
>>>>>>> 5db50395b4f2ab0dce3c17e14b3d3ff5f8a5d0cf
    renderCounter();
};

var appRoot = document.getElementById('app');

<<<<<<< HEAD
const renderCounter = () =>{
=======
const renderCounter = () => {
>>>>>>> 5db50395b4f2ab0dce3c17e14b3d3ff5f8a5d0cf
    var templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
<<<<<<< HEAD
       
        </div>
);
ReactDOM.render(templateTwo, appRoot);

};

renderCounter();



=======
        </div>

    );
   
    ReactDOM.render(templateTwo, appRoot);

};

renderCounter();
>>>>>>> 5db50395b4f2ab0dce3c17e14b3d3ff5f8a5d0cf
