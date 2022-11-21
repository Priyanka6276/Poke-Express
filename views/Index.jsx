const React = require("react")


class Index extends React.Component {
    render() {
        const {pokemon} = this.props
        return(
            <div>
                <h1 style={{color:"darkblue"}}>See All The Pokemon</h1>
                <ul>
                    {pokemon.map((poke, i) => {
                        return (
                            <li>
                                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = Index