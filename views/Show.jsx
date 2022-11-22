const React = require("react")


class Show extends React.Component {
    render() {
        const pokemon = this.props.pokemon
        return(
            <div>
                <h1 style={{color:"darkblue"}}>Gotta Catch "Em All</h1>
                <h2 style={{color:"darkblue"}}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={pokemon.img + ".jpg"} alt="" />
                <a href="/pokemon">BACK</a>
            </div>
        )
    }
}

module.exports = Show