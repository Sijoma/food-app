import React, { SyntheticEvent } from 'react';
import { Divider, Input, Tag as AntdTag, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Tag from 'types/tag';

const tagColors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime']

interface TaglistProps {
    tags: Tag[]
}

interface TaglistState {
    tags: Tag[],
    inputVisible: Boolean,
    inputValue: string,
    editInputIndex: number,
    editInputValue: string,
}

class Taglist extends React.Component<TaglistProps, TaglistState> {
    input: Input | null = null
    editInput: Input | null = null
    state = ({
        tags: this.props.tags,
        inputVisible: false,
        inputValue: '',
        editInputIndex: -1,
        editInputValue: '',
    })

    handleClose = ( removedTag: Tag ) => {
        const tags = this.state.tags.filter(tag => tag.id !== removedTag.id);
        console.log(tags);
        this.setState({ tags });
      };


    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input?.focus());
    };

    handleInputChange = (e: any) => {
        this.setState({ inputValue: e.target.value });
    };
    
    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        let newTagID
        if (!tags) {
            tags = []
            newTagID = 0
        } else {
            newTagID = tags[tags.length-1].id + 1
        }
        if (inputValue && tags.findIndex(tag => tag.title === inputValue) === -1) {
            const newTag: Tag = {
                id: newTagID,
                title: inputValue,
                description: ''
            }
            tags = [...tags, newTag];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    handleEditInputChange = (e:any) => {
        this.setState({ editInputValue: e.target.value });
    };

    handleEditInputConfirm = () => {
        this.setState(({ tags, editInputIndex, editInputValue }) => {
          const newTags = [...tags];
          newTags[editInputIndex].title = editInputValue;
    
          return {
            tags: newTags,
            editInputIndex: -1,
            editInputValue: '',
          };
        });
      };

    saveInputRef = (input: Input | null) => {
        this.input = input;
    };

    saveEditInputRef = (input: Input | null) => {
        this.editInput = input;
    };

    render() {
        const { tags, inputVisible, inputValue, editInputIndex, editInputValue } = this.state;
        return (
            <div>
                <Divider />
                    {tags && tags.map((tag, index) => {
                        if (editInputIndex === index) {
                            return (
                                <Input
                                    ref={(input) => this.saveEditInputRef(input)}
                                    key={tag.id + tag.title}
                                    size="small"
                                    className="tag-input"
                                    value={editInputValue}
                                    onChange={this.handleEditInputChange}
                                    onBlur={this.handleEditInputConfirm}
                                    onPressEnter={this.handleEditInputConfirm}
                                />
                            );
                        }

                        const isLongTag = tag.title.length > 20;

                        const tagElem = (
                            <AntdTag
                                className="edit-tag"
                                key={tag.id + tag.title}
                                color={tagColors[tag.id]}
                                closable
                                onClose={() => this.handleClose(tag)}>
                                <span
                                    onDoubleClick={(e: SyntheticEvent) => {
                                        this.setState({ editInputIndex: index, editInputValue: tag.title }, () => {
                                            this.editInput?.focus();
                                        });
                                        e.preventDefault();
                                    }}
                                >
                                    {isLongTag ? `${tag.title.slice(0, 20)}...` : tag.title}
                                </span>
                            </AntdTag>
                        );
                        
                        return isLongTag ? (
                            <Tooltip title={tag.title} key={tag.title + tag.id}>
                                {tagElem}
                            </Tooltip>
                        ) : (
                                tagElem
                            );
                    })}
                    {inputVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            className="tag-input"
                            value={inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputConfirm}
                            onPressEnter={this.handleInputConfirm}
                        />
                    )}
                    {!inputVisible && (
                        <AntdTag className="site-tag-plus" color={'green'} onClick={ this.showInput }>
                            <PlusOutlined /> New Tag
                        </AntdTag>
                    )}
            </div>
        )
    }
}

export default Taglist
