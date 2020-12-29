import React from 'react';
import { Recipe } from '../types/recipe';

interface KochlisteProps {
    kochliste: Recipe[] 
}

class Kochliste extends React.Component<KochlisteProps> {
    render() {
        return (
            <div style={{ margin: '0px 100px'}}>
                <h2>Test Kochliste</h2>
                {this.props.kochliste.map(recipe => {
                    return (<li>{recipe.title}</li>)
                    })}
            </div>
        )
    }
}

export default Kochliste