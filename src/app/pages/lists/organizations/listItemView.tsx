import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Item, Label } from 'semantic-ui-react';

function ListItemView(props) {
    return (
        <Item className="organization">
            <Item.Image size="tiny" src={props.data.logoUrl || 'https://jsgirls.ro/images/partners/jsleague.png'} />
            <Item.Content>
                <Item.Header as="a" href={`/lists/organizations/detail/${encodeURIComponent(props.data.name)}/`}>
                    {props.data.name}
                </Item.Header>
                <Item.Description>
                    <ReactMarkdown source={props.data.content} />
                </Item.Description>
                <Item.Extra>
                    <Item.Meta>
                        <b className="tag-title">Organizatörler:</b>
                        {props.data.contributors && props.data.contributors.map(person => <Label color="green">{person}</Label>)}
                    </Item.Meta>
                </Item.Extra>
            </Item.Content>
        </Item>
    );
}

export default ListItemView;
