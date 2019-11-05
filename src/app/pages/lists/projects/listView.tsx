import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Item, Button, Label, Segment, Input, Header } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faFolderOpen, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { HashLink } from 'react-router-hash-link';

import localStyles from './styles.less';

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
                        <FontAwesomeIcon icon={faClipboardList} />
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
                        value={filter}
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
                const categorySlug = encodeURIComponent(category);
                const categoryData = props.datasource[category];

                const categoryHtml = categoryData.map((project) => {
                    const projectSlug = encodeURIComponent(`${project.name}-${project.githubUrl}`);

                    if (currentFilter.length >= 3) {
                        const pname = project.name.toLocaleLowerCase();
                        const pcontent = project.content.toLocaleLowerCase();

                        if (pname.indexOf(currentFilter) === -1 &&
                            pcontent.indexOf(currentFilter) === -1) {
                            return null;
                        }
                    }

                    return (
                        <Item className="project" key={`category.${categorySlug}.project.${projectSlug}`}>
                            {/* <Item.Image src='/images/wireframe/image.png' /> */}

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
                                        github/
                                        {project.githubUrl}
                                    </Button>
                                    {project.needsContribution && (
                                        <Label>
                                            <FontAwesomeIcon icon={faCodeBranch} />
                                            {' '}
                                            Katılım Bekliyor
                                        </Label>
                                    )}
                                    {/* project.needsSponsor && (
                                        <Label>
                                            <FontAwesomeIcon icon={faCodeBranch} />
                                            { ' ' }
                                            Sponsor Bekliyor
                                        </Label>
                                    ) */}
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
                        <h2 className="title is-spaced">
                            <FontAwesomeIcon icon={faFolderOpen} />
                            {' '}
                            {category}
                        </h2>

                        <Item.Group divided>
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
