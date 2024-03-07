// const heading = React.createElement("h1", {id:"heading"}, "Hello from REACT!");


const heading = React.createElement(
    "div", 
    {id:"parent"}, 
    [
        React.createElement(
            "h1", 
            {id:"child"}, 
            "REACT PARENT!"
        ),
        React.createElement(
            "h1", 
            {id:"child"}, 
            [
                React.createElement(
                    "h2", 
                    {id:"child1"}, 
                    "Hello from REACT child1!"
                ),
                React.createElement(
                    "h2", 
                    {id:"child2"}, 
                    "Hello from REACT child2!"
                ),
            ]
        ),
        
        
        ]
);
const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(heading);