import React from 'react';
import { Link } from 'react-router-dom';

const bulmaStyles = {};

function ProjectsListView(props) {
    const categories = props.projects
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            <h1 className={bulmaStyles.title}>Projeler</h1>

            <ul>
                {categories.map((category) => {
                    const categorySlug = encodeURIComponent(category.slug);

                    return (
                        <li key={`category-${categorySlug}`}>
                            {category}

                            <ul>
                                {props.projects.filter(x => x.category === category)
                                    .map((projectItem) => {
                                        const projectSlug = encodeURIComponent(projectItem.slug);

                                        return (
                                            <div key={`div-${projectSlug}`}>
                                                <Link key={`link-${projectSlug}`} to={`/lists/projects/detail/${projectSlug}/`}>
                                                    <li key={`link-list-${projectSlug}`}>
                                                        {projectItem.title}
                                                        {' '}

                                                        {' '}
                                                        {projectItem.content}
                                                        {' '}

                                                        {' '}
                                                        {projectItem.stars}
                                                        {' '}

                                                        {' '}
                                                        {projectItem.participation ? 'Katılım Bekliyor' : 'Katılım Beklemiyor'}
                                                        {' '}

                                                        {' '}
                                                        {projectItem.sponsor ? 'Sponsor Bekliyor' : 'Sponsor Beklemiyor'}
                                                    </li>
                                                </Link>
                                            </div>
                                        );
                                    })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export {
    ProjectsListView as default,
};
