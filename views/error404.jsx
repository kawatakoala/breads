const React = require('react')
const Default = require('./layouts/Default')

function error404() {
    return (
        <Default>
            <main>
                <h1>Error 404: Page Not Found</h1>
            </main>
        </Default>
    )
}

module.exports = error404