import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Item, Button, Label } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';


function ListItemView(props) {
    return (
        <Item className="project">
            <Item.Content>
                <Item.Header as="a" href={props.data.url}>
                    {props.data.name}
                </Item.Header>
                <Item.Meta>
                    <img src={`https://img.shields.io/github/stars/${props.data.githubUrl}.svg?style=social&amp;label=Star`} alt={`${props.data.name} stars`} />
                </Item.Meta>
                <Item.Description>
                    <ReactMarkdown source={props.data.content} />
                </Item.Description>
                <Item.Extra>
                    <Button as="a" primary floated="right" href={`https://github.com/${props.data.githubUrl}`}>
                        {`github/${props.data.githubUrl}`}
                    </Button>
                    {props.data.needsContribution && (
                        <Label>
                            <FontAwesomeIcon icon={faCodeBranch} />
                            Katılım Bekliyor
                        </Label>
                    )}
                </Item.Extra>
            </Item.Content>
        </Item>
    );
}

export default ListItemView;
