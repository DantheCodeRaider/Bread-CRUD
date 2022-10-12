const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, bakers, title})  {
    return (
        <Default title={title}>
        {/* <p>I have {breads[0].name} bread!</p> */}
        {/* This is a JSX comment. */}
        <h3>Bakers</h3>
        <ul>
            {
                bakers.map((baker)=> {
                    return (
                        <li key={baker.id}>
                            <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                        </li>
                    )
                })
            }
        </ul>
        <h3>Breads</h3>
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
