import React from 'react';

import { Container, Grid, Label, Card, LabelGroup } from 'semantic-ui-react';

import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';

import globalStyles from '../../../layouts/shared/assets/global.less';

import licenses from './licenses';

function Licenses() {
    return (
        <Container className="content">
            <Heading icon={faClosedCaptioning} title="Lisanslar" subtitle="Açık kaynak lisansları" />
            {licenses.map(license => (
                <Card key={license.name} fluid>
                    <Card.Content>
                        <Card.Header>
                            {license.name}
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Grid stackable>
                            <Grid.Row>
                                <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                    {license.description}
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <strong>İzinler</strong>
                                    </div>
                                    <LabelGroup color="green">
                                        {license.permissions.map(permission => (
                                            <Label key={permission}>{permission}</Label>
                                        ))}
                                    </LabelGroup>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <strong>Şartlar</strong>
                                    </div>
                                    <LabelGroup color="blue">
                                        {license.conditions.map(condition => (
                                            <Label key={condition}>{condition}</Label>
                                        ))}
                                    </LabelGroup>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <div>
                                        <strong>Sınırlamalar</strong>
                                    </div>
                                    <LabelGroup color="red">
                                        {license.restrictions.map(restriction => (
                                            <Label key={restriction}>{restriction}</Label>
                                        ))}
                                    </LabelGroup>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            ))}
        </Container>
    );
}

export {
    Licenses as default,
};
