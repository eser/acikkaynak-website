import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

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
                <input type="text" className="input" placeholder="Filtreleme" value={filter} onChange={onFilterChanged} />
            </div>

            {Object.keys(props.datasource).map((category) => {
                const categoryKey = `category.${encodeURIComponent(category)}`,
                    categoryData = props.datasource[category];

                const categoryHtml = categoryData.map((project) => {
                    const projectKey = `project.${encodeURIComponent(project.name)}`;

                    if (currentFilter.length >= 3) {
                        const pname = project.name.toLocaleLowerCase();
                        const pcontent = project.content.toLocaleLowerCase();

                        if (pname.indexOf(currentFilter) === -1 && pcontent.indexOf(currentFilter) === -1) {
                            return null;
                        }
                    }

                    return (
                        <div className="project" key={`${categoryKey}.${projectKey}`}>
                            <div className="card">
                                <a key={`${categoryKey}.${projectKey}.link`} href={project.url}>
                                    <header className="card-header">
                                        <div className="card-header-title">
                                            <div className="column is-three-fifths">
                                                {project.name}
                                            </div>
                                            <div className="column has-text-right">
                                                <img src={`https://img.shields.io/github/stars/${project.githubUrl}.svg?style=social&amp;label=Star`} alt={`${project.name} stars`} />
                                            </div>
                                        </div>
                                    </header>
                                </a>
                                <div className="card-content">
                                    <div className="content">
                                        <ReactMarkdown source={project.content} />
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <div className="column">
                                        <a href={`https://github.com/${project.githubUrl}`}>{project.githubUrl}</a>
                                    </div>
                                    <div className="column has-text-right">
                                        {project.needsContribution && (
                                            <span className="tag is-success">
                                                <FontAwesomeIcon icon={faCodeBranch} />
                                                { ' ' }
                                                Katılım Bekliyor
                                            </span>
                                        )}
                                    </div>
                                </footer>
                            </div>
                        </div>
                    );
                })
                    .filter(x => x !== null);

                if (categoryHtml.length === 0) {
                    return null;
                }

                return (
                    <div className="margin-top-15px" key={categoryKey}>
                        <h2 className="title is-spaced" key={`${categoryKey}.caption`}>
                            <FontAwesomeIcon icon={faFolderOpen} />
                            { ' ' }
                            {category}
                        </h2>

                        <div key={`${categoryKey}.list`}>
                            {categoryHtml}
                        </div>

                        <br />
                        <br />
                        <br />
                    </div>
                );
            })}
        </>
    );
}

export {
    View as default,
};
