import React, { useState } from 'react';
import OrgsListView from './orgsListView';
import OrgDetailView from './orgDetailView';
import OrgEdit from './edit'

function Organizations(props) {
    const [orgs, setOrgs] = useState([
        {
            id: 1,
            slug: "dev-izmir",
            title: "DevIzmir ",
            content: "Dev izmir bir Izmir geliştirici topluluğudur.",
            category: "Software"
        },
        {
            id: 1,
            slug: "ai-izmir",
            title: "AI Izmir",
            content: "AI Izmir, Izmir' de bulunan bir yapay zeka topluluğudur. ",
            category: "Software"
        },
        {
            id: 1,
            slug: "ras-izmir",
            title: "Rasper Izmir",
            content: "Rasper Izmir, Izmir' de bulunan bir Raspery PI toplulugudur.",
            category: "Hardware"
        }
    ]);
    
    if (props.slug !== undefined) {
        const currentOrgs = orgs.find(x => x.slug === props.slug);
        if (currentOrgs !== undefined) {
            if (props.type === "editOrg") {
                return (
                    <OrgEdit content={currentOrgs} />
                );
            }
            else {
                return (
                    <OrgDetailView content={currentOrgs} />
                );
            }
        }
    }
    return (
        <OrgsListView orgs={orgs} />
    );
};

export {
    Organizations as default,
};
