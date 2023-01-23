const React = require('react')
const Default = require('./layouts/Default')

const Show = ({ bread }) => {
    console.log(bread.name)
    return (
        <default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img> src={bread.image} alt ={bread.name}</img>
            <li><a href="/breads">Go home</a></li>
        </default>
    )
}

module.exports = Show