import React, { useState, useEffect } from 'react';

import { Container, Loader } from 'semantic-ui-react';

import ListView from './listView';

const dataSourceUrl = 'https://api.acikkaynak.info/lists/projects';

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

    if (projects === null) {
        return (
            <Container className="content">
                <Loader inline="centered" content="Yükleniyor..." active />
            </Container>
        );
    }

    return (
        <Container className="content">
            <ListView datasource={projects} />
        </Container>
    );
}

export {
    Projects as default,
};
