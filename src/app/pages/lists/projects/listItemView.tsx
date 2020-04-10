import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Item, Button, Label, Grid } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import localStyles from './style.less';

function ListItemView(props) {
    return (
        <Item className={localStyles.project}>
            <Item.Content>
                <Item.Header className={localStyles.projectHeader}>
                    <Grid>
                        <Grid.Column width={12} as="a" href={props.data.url}>
                            {props.data.name}
                        </Grid.Column>
                        <Grid.Column width={4} textAlign="right">
                            <img src={`https://img.shields.io/github/stars/${props.data.githubUrl}.svg?style=social&amp;label=Star`} alt={`${props.data.name} stars`} />
                        </Grid.Column>
                    </Grid>
                </Item.Header>
                <Item.Meta>
                    <Label.Group>
                        {props.data.technologies.map(item => <Label basic>{item}</Label>)}
                    </Label.Group>
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
                            { ' ' }
                            Katılım Bekliyor
                        </Label>
                    )}
                </Item.Extra>
            </Item.Content>
        </Item>
    );
}

export default ListItemView;
