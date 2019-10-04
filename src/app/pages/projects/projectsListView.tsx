import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const bulmaStyles = {};

function ProjectsListView(props) {
    let projects = props.projects;

    const categories = props.projects
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            <h1 className={bulmaStyles.title}>Projeler</h1>

            <ul>
                {categories.map((category, number) => {
                    return (
                    <li key={number}>{category}
                        <ul>
                            {projects.filter((x) => x.category === category).map((projectItem, number) => {
                                return (
                                    <div key={number}>
                                        <Link key={number} to={`/projects/detail/${encodeURIComponent(projectItem.slug)}/`}>
                                            <li key={number} >{projectItem.title} -> {projectItem.content} -> {projectItem.stars} -> {projectItem.participation ? "Katılım Bekliyor" : "Katılım Beklemiyor"} -> {projectItem.sponsor ? "Sponsor Bekliyor" : "Sponsor Beklemiyor"}</li>
                                        </Link> 
                                    </div>
                                )
                            })}
                        </ul>
                    </li>
                    )
                })}
            </ul>
            </>
    );
}

export {
    ProjectsListView as default,
};
