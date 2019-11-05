import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

import { Item, Button, Label, Segment, Input, Icon, Header } from 'semantic-ui-react';

import { HashLink } from 'react-router-hash-link';

import localStyles from './styles.less';

interface ViewProps {
    datasource: any;
}

function debounce(callback, wait) {
    let timeout;

    return (...args) => {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}

function ListView(props: ViewProps) {
    const [ filter, setFilter ] = useState('');
    const searchRef = useRef(null);

    const onFilterChanged = debounce(() => {
        const inputRef = searchRef.current.inputRef.current;

        setFilter(inputRef.value);
    }, 400);

    function filterData(data) {
        const currentFilter = filter.trim().toLocaleLowerCase();
        let filteredData;

        if (currentFilter.length >= 3) {
            filteredData = data.filter((project) => {
                const pname = project.name.toLocaleLowerCase();
                const pcontent = project.content.toLocaleLowerCase();

                return pname.includes(currentFilter) || pcontent.includes(currentFilter);
            });
        }

        return filteredData || data;
    }

    return (
        <>
            {/* Top bar */}
            <nav>
                <Header as="h1">
                    <i aria-hidden="true" className="circular icon">
                        <Icon fitted name="clipboard list" />
                    </i>
                    <Header.Content>
                        Projeler
                        <Header.Subheader>
                            Açık Kaynak Olarak Geliştiren
                            Projelerin Listesi
                        </Header.Subheader>
                    </Header.Content>
                </Header>

                <Segment>
                    <Input
                        fluid
                        onChange={onFilterChanged}
                        ref={searchRef}
                        type="text"
                        placeholder="Ara"
                        icon="search"
                    />

                    {Object.keys(props.datasource).map(category => (
                        <HashLink to={`#${category}`} className={`ui positive button ${localStyles.categoryLink}`} key={category}>{category}</HashLink>
                    ))}
                </Segment>
            </nav>

            {Object.keys(props.datasource).map((category) => {
                const filteredData = filterData(props.datasource[category]);

                if (filteredData.length) {
                    return (
                        <Segment
                            id={category}
                            className={localStyles.categorySegment}
                            key={category}
                        >
                            <h2 className="title is-spaced">
                                <Icon name="folder open" />
                                {category}
                            </h2>

                            <Item.Group divided>
                                {filteredData.map(project => (
                                    <Item className="project" key={`${category}.${project.name}.${project.githubUrl}`}>
                                        <Item.Content>
                                            <Item.Header as="a" href={project.url}>
                                                {project.name}
                                            </Item.Header>
                                            <Item.Meta>
                                                <img src={`https://img.shields.io/github/stars/${project.githubUrl}.svg?style=social&amp;label=Star`} alt={`${project.name} stars`} />
                                            </Item.Meta>
                                            <Item.Description>
                                                <ReactMarkdown source={project.content} />
                                            </Item.Description>
                                            <Item.Extra>
                                                <Button as="a" primary floated="right" href={`https://github.com/${project.githubUrl}`}>
                                                    {`github/${project.githubUrl}`}
                                                </Button>
                                                {project.needsContribution && (
                                                    <Label>
                                                        <Icon name="code branch" />
                                                        Katılım Bekliyor
                                                    </Label>
                                                )}
                                            </Item.Extra>
                                        </Item.Content>
                                    </Item>
                                ))}
                            </Item.Group>
                        </Segment>
                    );
                }

                return null;
            })}
        </>
    );
}

export {
    ListView as default,
};
