import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Item, Label } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKickstarter, faGithub } from '@fortawesome/free-brands-svg-icons';

import localStyles from './style.less';

const defaultImagePlaceholderUrl = 'https://jsgirls.ro/images/partners/jsleague.png';

function ListItemView(props) {
    return (
        <Item className={localStyles.organization}>
            <Item.Image size="tiny" src={props.data.logoUrl || defaultImagePlaceholderUrl} />
            <Item.Content>
                <Item.Header as="a" href={props.data.url}>
                    {props.data.name}
                </Item.Header>
                <Item.Description>
                    <ReactMarkdown source={props.data.content} />
                </Item.Description>
                <Item.Extra>
                    <Item.Meta>
                        <Label.Group>
                            {props.data.githubUrl && (
                                <Label as="a" basic href={props.data.githubUrl}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    { ' ' }
                                    GitHub
                                </Label>
                            )}
                            {props.data.kommunityUrl && (
                                <Label as="a" basic href={props.data.kommunityUrl}>
                                    <FontAwesomeIcon icon={faKickstarter} />
                                    { ' ' }
                                    Kommunity
                                </Label>
                            )}
                            {props.data.organizers && (props.data.organizers.map(person => (
                                <Label as="a" basic href={`https://github.com/${person}`}>
                                    <FontAwesomeIcon icon={faUser} />
                                    { ' ' }
                                    {person}
                                </Label>
                            )))}
                        </Label.Group>
                    </Item.Meta>
                </Item.Extra>
            </Item.Content>
        </Item>
    );
}

export default ListItemView;
