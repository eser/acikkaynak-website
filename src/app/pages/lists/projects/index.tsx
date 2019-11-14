import React, { useState, useEffect } from 'react';

import { Container } from 'semantic-ui-react';

import { faClipboardList, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import ContentFetchError from '../../shared/elements/contentFetchError';
import Loading from '../../shared/elements/loading';
import ErrorBoundary from '../../shared/errorBoundary';
import SuspenseCheck from '../../shared/suspenseCheck';
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

            <ErrorBoundary fallback={() => <ContentFetchError />}>
                <SuspenseCheck if={projects} fallback={() => <Loading />}>
                    <ListView
                        datasource={projects}
                        listItemView={ListItemView}
                        categoryIcon={faFolderOpen}
                    />
                </SuspenseCheck>
            </ErrorBoundary>
        </Container>
    );
}

export {
    Projects as default,
};
