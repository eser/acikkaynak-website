import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Button } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../shared/elements/heading';

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
            <Heading icon={faCaretSquareRight} title="Haber Ekle" subtitle="Açık kaynak ile ilgili haberler" />

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
