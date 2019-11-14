import React, { Suspense, useState, useEffect } from 'react';

import { Container } from 'semantic-ui-react';

import { faClipboardList, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import Loading from '../../shared/elements/loading';
import ListView from '../listView';
import ListItemView from './listItemView';

const dataSourceUrl = 'https://api.acik-kaynak.org/lists/projects';

async function getProjectsFetch() {
    const response = await fetch(dataSourceUrl);
    const responseBody = await response.json();

    return responseBody;
}

function Projects() {
    const [ projects, setProjects ] = useState(null);

    useEffect(() => {
        async function projectsFetch() {
            const projectsResponse = await getProjectsFetch();

            setProjects(projectsResponse);
        }

        projectsFetch();
    }, []);

    return (
        <Container className="content">
            <Heading icon={faClipboardList} title="Projeler" subtitle="Açık Kaynak Olarak Geliştiren Projelerin Listesi" />

            <Suspense fallback={Loading}>
                <ListView
                    datasource={projects}
                    listItemView={ListItemView}
                    categoryIcon={faFolderOpen}
                />
            </Suspense>
        </Container>
    );
}

export {
    Projects as default,
};
