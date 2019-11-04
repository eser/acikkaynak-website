import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Header, Item, Segment, Label } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import './style.less';

function OrgsListView(props) {
    // GET Categpries from list of organizations
    const categories = props.orgs
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            {/* Top bar */}
            <nav>
                <Header as="h1" className="org-header">
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
                {/* Right side */}
                <div>
                    <Segment>
                        <Input
                            fluid
                            onChange={props.handleSearch}
                            value={props.searchInput}
                            type="text"
                            placeholder="Organizasyon bul"
                            icon="search"
                        />
                    </Segment>
                </div>
            </nav>
            {categories.map(category => (
                <>
                    <Header dividing key={category.toLowerCase()} as="h3">{category}</Header>
                    <Item.Group divided className="org-list">
                        {props.orgs.filter(x => x.category === category).map((orgItem) => {
                            const slug = encodeURIComponent(orgItem.slug);


                            return (
                                <Item key={`div-${slug}`}>
                                    <Item.Image size="tiny" src="https://jsgirls.ro/images/partners/jsleague.png" />
                                    <Item.Content>
                                        <Item.Header as={Link} key={`link-${slug}`} to={`/lists/organizations/detail/${slug}/`}>
                                            {orgItem.title}
                                        </Item.Header>
                                        <Item.Description as="p">{orgItem.content}</Item.Description>
                                        {
                                  orgItem.technologies.length > 0 && (
                                  <Item.Meta>
                                      <b className="tag-title">Technologies:</b>
                                      {' '}
                                      {orgItem.technologies.map(tech => <Label color="green">{tech}</Label>)}
                                  </Item.Meta>
                                  )
}
                                        {
                                  orgItem.languages.length > 0 && (
                                  <Item.Meta>
                                      <b className="tag-title">Languages:</b>
                                      {' '}
                                      {orgItem.languages.map(lang => <Label color="green">{lang}</Label>)}
                                  </Item.Meta>
                                  )
}
                                    </Item.Content>
                                </Item>

                            );
                        })}
                    </Item.Group>
                </>
            ))}
        </>
    );
}

export {
    OrgsListView as default,
};
