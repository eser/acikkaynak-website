import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Item, Button, Label } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { HashLink } from 'react-router-hash-link';

interface ViewProps {
    datasource: any;
}

function View(props: ViewProps) {
    const [ filter, setFilter ] = useState('');

    function onFilterChanged(ev) {
        setFilter(ev.target.value);
    }

    const currentFilter = filter.trim().toLocaleLowerCase();

    return (
        <>
            <div>
                <div className="ui input">
                    <input type="text" placeholder="Proje bul" value={filter} onChange={onFilterChanged} />
                </div>
                <div className="ui divider" />
                {Object.keys(props.datasource).map(category => <HashLink to={`#${category}`} className="ui positive button" key={category}>{category}</HashLink>)}
            </div>

            {Object.keys(props.datasource).map((category) => {
                const categoryKey = `category.${encodeURIComponent(category)}`;
                const categoryData = props.datasource[category];

                const categoryHtml = categoryData.map((project) => {
                    const projectKey = `project.${encodeURIComponent(project.name)}`;

                    if (currentFilter.length >= 3) {
                        const pname = project.name.toLocaleLowerCase();
                        const pcontent = project.content.toLocaleLowerCase();

                        if (pname.indexOf(currentFilter) === -1 &&
                            pcontent.indexOf(currentFilter) === -1) {
                            return null;
                        }
                    }

                    return (
                        <Item className="project" key={`${categoryKey}.${projectKey}`}>
                            {/* <Item.Image src='/images/wireframe/image.png' /> */}

                            <Item.Content>
                                <Item.Header as="a" key={`${categoryKey}.${projectKey}.link`} href={project.url}>
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
                    <div id={category} className="ui segment" key={categoryKey}>
                        <h2 className="title is-spaced" key={`${categoryKey}.caption`}>
                            <FontAwesomeIcon icon={faFolderOpen} />
                            {' '}
                            {category}
                        </h2>

                        <Item.Group divided key={`${categoryKey}.list`}>
                            {categoryHtml}
                        </Item.Group>
                    </div>
                );
            })}
        </>
    );
}

export {
    View as default,
};
