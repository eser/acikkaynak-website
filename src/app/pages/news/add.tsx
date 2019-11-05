import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Form, Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

function NewsAdd() {
    const [ newsTitle, setNewsTitle ] = useState('');
    const [ newsContent, setNewsContent ] = useState('');
    const [ newsTags, setNewsTags ] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();
        // TODO Add new development
    }

    return (
        <Container className="content">
            <Header as="h1">
                <i aria-hidden="true" className="circular icon">
                    <FontAwesomeIcon icon={faCaretSquareRight} />
                </i>

                <Header.Content>
                    Haber Ekle
                    <Header.Subheader>Açık Kaynak ile İlgili Haberler</Header.Subheader>
                </Header.Content>
            </Header>

            <Form onSubmit={onSubmitHandler}>
                <Form.Field>
                    <Form.Input
                        id="newsTitle"
                        label="Haber Başlığı"
                        type="text"
                        value={newsTitle}
                        onChange={e => setNewsTitle(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.TextArea
                        id="newsContent"
                        label="Haber İçeriği"
                        value={newsContent}
                        onChange={e => setNewsContent(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        id="newsTags"
                        label="Haber Etiketleri"
                        type="text"
                        value={newsTags}
                        onChange={e => setNewsTags(e.target.value)}
                    />
                </Form.Field>
                <Button as={Link} to="/news/" content="Geri" secondary />
                <Button content="Ekle" type="submit" primary />
            </Form>
        </Container>
    );
}

export {
    NewsAdd as default,
};
