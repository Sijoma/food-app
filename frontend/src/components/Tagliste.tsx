import React from 'react';
import { Tag } from 'antd';

const tagColors = ['magenta', 'red', 'green', 'volcano', 'orange', 'gold', 'lime']

interface TaglisteProps {
    tags: string[]
}

function Tagliste(props: TaglisteProps){
    return (
        <div>
            {props.tags && props.tags.map(tag => <Tag key={tag} color={tagColors[Math.floor(Math.random() * tagColors.length)]}>
                {tag}
            </Tag>)}
        </div>
    )
}

export default Tagliste