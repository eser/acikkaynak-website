import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { Input, Header, Item, Segment, Label } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import asciify from './asciify';
import localStyles from './style.less';

interface ViewProps {
    datasource: any;
}

function ListView(props: ViewProps) {
    const [ filter, setFilter ] = useState('');

    function onFilterChanged(ev) {
        setFilter(ev.target.value);
    }

    const currentFilter = filter.trim().toLocaleLowerCase();

    return (
        <>
            {/* Top bar */}
            <nav>
                <Header as="h1" className={localStyles.orgHeader}>
                    <i aria-hidden="true" className="circular icon">
                        <FontAwesomeIcon icon={faUsers} />
                    </i>
                    <Header.Content>
                        Organizasyonlar
                        <Header.Subheader>
                          Organizasyonlar Listesi
                        </Header.Subheader>
                    </Header.Content>
                </Header>

                <Segment>
                    <Input
                        fluid
                        onChange={onFilterChanged}
                        value={filter}
                        type="text"
                        placeholder="Ara"
                        icon="search"
                    />
                </Segment>
            </nav>

            {Object.keys(props.datasource).map((category) => {
                const categorySlug = encodeURIComponent(category);
                const categoryData = props.datasource[category];

                const categoryHtml = categoryData.map((organization) => {
                    const organizationSlug = encodeURIComponent(organization.name);

                    if (currentFilter.length >= 3) {
                        const pname = organization.name.toLocaleLowerCase();
                        const pcontent = organization.content.toLocaleLowerCase();

                        if (pname.indexOf(currentFilter) === -1 &&
                            pcontent.indexOf(currentFilter) === -1) {
                            return null;
                        }
                    }

                    let logoUrl;

                    if (organization.logoUrl === null || organization.logoUrl === '') {
                        logoUrl = 'https://jsgirls.ro/images/partners/jsleague.png';
                    }
                    else {
                        logoUrl = organization.logoUrl;
                    }

                    return (
                        <Item className="organization" key={`category.${categorySlug}.organization.${organizationSlug}`}>
                            <Item.Image size="tiny" src={logoUrl} />

                            <Item.Content>
                                <Item.Header as={Link} to={`/lists/organizations/detail/${organizationSlug}/`}>
                                    {organization.name}
                                </Item.Header>
                                <Item.Description>
                                    <ReactMarkdown source={organization.content} />
                                </Item.Description>
                                <Item.Extra>
                                    <Item.Meta>
                                        <b className="tag-title">Organizatörler:</b>
                                        {' '}
                                        {organization.contributors && organization.contributors.map(person => <Label color="green">{person}</Label>)}
                                    </Item.Meta>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    );
                })
                    .filter(x => x !== null);

                if (categoryHtml.length === 0) {
                    return null;
                }

                return (
                    <Segment
                        id={category}
                        className={localStyles.categorySegment}
                        key={`category.${categorySlug}`}
                    >
                        <Header dividing as="h3">{category}</Header>
                        <Item.Group divided className={localStyles.orgList}>
                            {categoryHtml}
                        </Item.Group>
                    </Segment>
                );
            })}
        </>
    );
}

export {
    ListView as default,
};
