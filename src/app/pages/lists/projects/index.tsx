import React, { useState, useEffect } from 'react';

import { Container, Header, Loader } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

import View from './view';

const dataSourceUrl = 'https://raw.githubusercontent.com/acikkaynak/acikkaynak/master/projects.json';

async function getProjectsFetch() {
    const response = await fetch(dataSourceUrl);
    const responseBody = await response.json();

    return responseBody;
}

function Projects() {
    const [ projects, setProjects ] = useState(null);

    useEffect(
        () => {
            async function projectsFetch() {
                const projectsResponse = await getProjectsFetch();

                setProjects(projectsResponse);
            }

            projectsFetch();
        },
        [],
    );

    return (
        <Container className="content" textAlign="justified">
            <Header as="h1" className="projects">
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

            {!projects ? <Loader inline="centered" content="Loading.." active /> : (
                <View
                    datasource={projects}
                />
            )}
        </Container>
    );
}

export {
    Projects as default,
};
