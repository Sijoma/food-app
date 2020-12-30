import React from 'react';
import { Tag } from 'antd';

const tagColors = ['magenta', 'red', 'green', 'volcano', 'orange', 'gold', 'lime']

interface TaglisteProps {
    tags: string[]
}

export default function Tagliste(props: TaglisteProps){
    const tags = props.tags.map(tag => <Tag key={tag} color={tagColors[Math.floor(Math.random() * tagColors.length)]}>
                {tag}
            </Tag>)
    return (
        <div>
            {tags}
        </div>
    )
}