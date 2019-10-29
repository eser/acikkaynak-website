import React, { useState } from 'react';
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

        setSearchInput(prevValue => event.target.value);
        setOrgs((orgs) => {
            if (searchValue.trim().length === 0) {
                return initialOrgs;
            }

            return (initialOrgs.filter((org) => {
                const { slug, title, content, category, city, technologies, languages, hardwares } = org;

                searchValue = asciify(searchValue).toLowerCase();

                return (
                    asciify(slug).toLowerCase().includes(searchValue) ||
                        asciify(title).toLowerCase().includes(searchValue) ||
                        asciify(content).toLowerCase().includes(searchValue) ||
                        asciify(category).toLowerCase().includes(searchValue) ||
                        asciify(city).toLowerCase().includes(searchValue) ||
                        technologies.reduce((accumulator, currentValue) => (asciify(currentValue).toLowerCase().includes(searchValue) || accumulator), false) ||
                        languages.reduce((accumulator, currentValue) => (asciify(currentValue).toLowerCase().includes(searchValue) || accumulator), false) ||
                        hardwares.reduce((accumulator, currentValue) => (asciify(currentValue).toLowerCase().includes(searchValue) || accumulator), false)
                );
            }));
        });
    };

    if (props.slug !== undefined) {
        const currentOrgs = orgs.find(x => x.slug === props.slug);

        if (currentOrgs !== undefined) {
            if (props.type === 'editOrg') {
                return (
                    <OrgEdit content={currentOrgs} />
                );
            }

            return (
                <OrgDetailView content={currentOrgs} />
            );
        }
    }

    return (
        <OrgsListView orgs={orgs} searchInput={searchInput} handleSearch={handleSearchInputChange} />
    );
}

export {
    Organizations as default,
};
