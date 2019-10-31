import React, { useState } from 'react';

import { Container } from 'semantic-ui-react';

import OrgsListView from './listView';
import OrgDetailView from './detailView';
import OrgEdit from './edit';
import asciify from './asciify';

function Organizations(props) {
    const initialOrgs = [
        {
            id: 1,
            slug: 'dev-izmir',
            title: 'DevIzmir ',
            content: 'Dev izmir bir Izmir geliştirici topluluğudur.',
            category: 'Software',
            city: 'İzmir',
            technologies: [ 'Node.js' ],
            languages: [ 'JavaScript' ],
            hardwares: [],
        },
        {
            id: 1,
            slug: 'ai-izmir',
            title: 'AI Izmir',
            content: "AI Izmir, Izmir' de bulunan bir yapay zeka topluluğudur. ",
            category: 'Software',
            city: 'İzmir',
            technologies: [ 'Tensorflow', 'Tensorflow.js' ],
            languages: [ 'Python', 'JavaScript' ],
            hardwares: [],
        },
        {
            id: 1,
            slug: 'ras-izmir',
            title: 'Rasper Izmir',
            content: "Rasper Izmir, Izmir' de bulunan bir Raspery PI toplulugudur.",
            category: 'Hardware',
            city: 'İzmir',
            technologies: [],
            languages: [ 'Python' ],
            hardwares: [ 'Raspberry PI' ],
        },
    ];

    const [ orgs, setOrgs ] = useState(initialOrgs);
    const [ searchInput, setSearchInput ] = useState();

    const handleSearchInputChange = (event) => {
        event.persist();
        let searchValue = event.target.value;

        setSearchInput(() => event.target.value);
        setOrgs(() => {
            if (searchValue.trim().length === 0) {
                return initialOrgs;
            }

            return (initialOrgs.filter((org) => {
                searchValue = asciify(searchValue).toLowerCase();

                return (
                    asciify(org.slug).toLowerCase().includes(searchValue) ||
                        asciify(org.title).toLowerCase().includes(searchValue) ||
                        asciify(org.content).toLowerCase().includes(searchValue) ||
                        asciify(org.category).toLowerCase().includes(searchValue) ||
                        asciify(org.city).toLowerCase().includes(searchValue) ||
                        org.technologies.reduce(
                            (acc, curr) => asciify(curr).toLowerCase().includes(searchValue) || acc,
                            false,
                        ) ||
                        org.languages.reduce(
                            (acc, curr) => asciify(curr).toLowerCase().includes(searchValue) || acc,
                            false,
                        ) ||
                        org.hardwares.reduce(
                            (acc, curr) => asciify(curr).toLowerCase().includes(searchValue) || acc,
                            false,
                        )
                );
            }));
        });
    };

    if (props.slug !== undefined) {
        const currentOrgs = orgs.find(x => x.slug === props.slug);

        if (currentOrgs !== undefined) {
            if (props.type === 'editOrg') {
                return (
                    <Container className="content" textAlign="justified">
                        <OrgEdit content={currentOrgs} />
                    </Container>
                );
            }

            return (
                <Container className="content" textAlign="justified">
                    <OrgDetailView content={currentOrgs} />
                </Container>
            );
        }
    }

    return (
        <Container className="content" textAlign="justified">
            <OrgsListView
                orgs={orgs}
                searchInput={searchInput}
                handleSearch={handleSearchInputChange}
            />
        </Container>
    );
}

export {
    Organizations as default,
};
