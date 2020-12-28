import React from 'react';
import { Tag } from 'antd';

const tagColors = ['magenta', 'red', 'green', 'volcano', 'orange', 'gold', 'lime']

export default function Tagliste(props){
    const tags = props.tags.map(tag => {
        return (
                <Tag color={tagColors[Math.floor(Math.random() * tagColors.length)]}>{tag}</Tag>
        )
    })
    return (
        <div>
            {tags}
        </div>
    )
}