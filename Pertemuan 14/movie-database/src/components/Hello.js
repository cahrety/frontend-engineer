/**
 * Membuat komponen Hello World menjadi Hello (name) 
 * Mencetak atau print di UI Elements
*/
function Hello(props) {
    console.log(props);

    // di dalam return namanya JSX
    return(
        <div className="hello">
            <h2>Hello React JS</h2>
            <p>Saya {props.name} - Copywriting at Kompas Media</p>
        </div>
    );
}

export default Hello;