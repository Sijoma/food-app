import React from 'react';

class Kochliste extends React.Component {
    render() {
        return (
            <div style={{ margin: '0px 100px'}}>
                <h2>Test</h2>
                {this.props.kochliste.map(recipe => {
                    return (<li>{recipe.title}</li>)
                    })}
            </div>
        )
    }
}

export default Kochliste