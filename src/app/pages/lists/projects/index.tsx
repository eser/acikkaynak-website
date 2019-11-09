import React, { useState, useEffect } from 'react';

import { Container, Loader, Header } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

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

    if (projects === null) {
        return (
            <Container className="content">
                <Loader inline="centered" content="Yükleniyor..." active />
            </Container>
        );
    }

    return (
        <Container className="content">
            <Header as="h1">
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

            <ListView
                datasource={projects}
                listItemView={ListItemView}
                categoryIcon={faFolderOpen}
            />
        </Container>
    );
}

export {
    Projects as default,
};
