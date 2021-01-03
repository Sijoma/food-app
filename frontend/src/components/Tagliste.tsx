import React from 'react';
import { Divider, Tag as AntdTag } from 'antd';
import Tag from 'types/tag';

const tagColors = ['magenta', 'red', 'green', 'volcano', 'orange', 'gold', 'lime']

interface TaglisteProps {
    tags: Tag[]
}

function Tagliste(props: TaglisteProps){
    return (
        <div>
            <Divider />
            {props.tags && props.tags.map(tag => <AntdTag key={+tag.id} color={tagColors[Math.floor(Math.random() * tagColors.length)]}>
                {tag.title}
            </AntdTag>)}
        </div>
    )
}

export default Tagliste