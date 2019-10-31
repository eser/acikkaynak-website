import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Header } from 'semantic-ui-react';

import View from './view';

const dataSourceUrl = 'https://raw.githubusercontent.com/acikkaynak/acikkaynak/master/projects.json';

async function getProjectsFetch() {
    const response = await fetch(dataSourceUrl);
    const responseBody = await response.json();

    return responseBody;
}

interface ProjectsProps {
}

function Projects(props: ProjectsProps) {
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
            <Header as="h1">Projeler</Header>

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
