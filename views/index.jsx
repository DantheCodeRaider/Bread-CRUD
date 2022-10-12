const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads}) {
    return (
        <Default>
        {/* <p>I have {breads[0].name} bread!</p> */}
        {/* This is a JSX comment. */}
        <ul>
            {
                    breads.map((bread)=> {
                    return (
                    <li key={bread.id}>
                        <a href={`/breads/${bread.id}`}>
                        {bread.name}
                        </a>: {bread.getBakedBy()}
                    </li>
                    
                    )
                })
            }
        </ul>
        <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
        </div>

        </Default>
    )
}

module.exports = Index