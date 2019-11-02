import React, { useState, useEffect } from 'react';

import { Container, Icon, Header } from 'semantic-ui-react';

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
            <Header as="h1">
                <Icon name="clipboard list" circular />
                <Header.Content>
                    Projeler
                    <Header.Subheader>
                        Açık Kaynak Olarak Geliştiren
                        Projelerin Listesi
                    </Header.Subheader>
                </Header.Content>
            </Header>

            {projects && (
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
