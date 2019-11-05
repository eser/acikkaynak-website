import React, { useState } from 'react';

import { Container, Header, Form, Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

function NewsAdd() {
    const [newsTitle, setNewsTitle] = useState('');
    const [newsContent, setNewsContent] = useState('');
    const [newsTags, setNewsTags] = useState('');

    function onSubmitHandler(e) {
        e.preventDefault();
        // TODO Add new development
    }

    return (
        <Container className="content" textAlign="justified">
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
                    <label>Haber Başlığı</label>
                    <input value={newsTitle} onChange={e => setNewsTitle(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Haber İçeriği</label>
                    <textarea value={newsContent} onChange={e => setNewsContent(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Haber Etiketleri</label>
                    <input value={newsTags} onChange={e => setNewsTags(e.target.value)} />
                </Form.Field>
                <Button content="Ekle" type="submit" primary />
            </Form>
        </Container>
    );
}

export {
    NewsAdd as default,
};
