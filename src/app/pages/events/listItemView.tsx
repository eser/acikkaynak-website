import React from 'react';

import { Label, Item } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import localStyles from './style.less';

const defaultImagePlaceholderUrl = 'https://jsgirls.ro/images/partners/jsleague.png';

function ListItemView(props) {
    const staticLogoUrl = 'https://media.kommunity.com/communities/acikkaynak/18814/acik-kaynak-svg.png';

    const startDate = new Date(props.data.start_date);
    const endDate = new Date(props.data.end_date);

    return (
        <Item className={localStyles.event}>
            <Item.Image size="tiny" src={staticLogoUrl || defaultImagePlaceholderUrl} />
            <Item.Content>
                <Item.Header as="a" href={`https://kommunity.com/acikkaynak/events/${props.data.slug}`}>
                    {props.data.name}
                </Item.Header>
                <Item.Description>
                    <Label.Group>
                        <Label>
                            <FontAwesomeIcon icon={faCalendar} />
                            {' '}
                            {startDate.toLocaleDateString()}
                        </Label>

                        <Label>
                            <FontAwesomeIcon icon={faClock} />
                            {' '}
                            {startDate.toLocaleTimeString()}
                            {' - '}
                            {endDate.toLocaleTimeString()}
                        </Label>

                        <Label>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            {' '}
                            {props.data.venue.name}
                        </Label>

                        <Label>
                            <FontAwesomeIcon icon={faUsers} />
                            {' '}
                            {props.data.users_count}
                            {' / '}
                            {props.data.rsvp_limit}
                        </Label>
                    </Label.Group>

                    {/* eslint-disable-next-line react/no-danger */}
                    <div dangerouslySetInnerHTML={{ __html: props.data.detail }} />
                </Item.Description>
            </Item.Content>
        </Item>
    );
}

export default ListItemView;
