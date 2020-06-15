import React from 'react';
import { DocumentBlockSection, DocumentLink, DocumentWrapper } from './DocumentBlockStyles';

const DocumentBlock: React.FC = () => {
    return (
        <DocumentBlockSection>
            <DocumentWrapper>
                <DocumentLink href={''}>
                    Пользовательское соглашение
                </DocumentLink>
                <DocumentLink href={''}>
                    Положение отказа от ответственности
                </DocumentLink>
                <DocumentLink href={''}>
                    Политика защиты персональной информации
                </DocumentLink>
            </DocumentWrapper>
        </DocumentBlockSection>
    );
};

export default DocumentBlock;