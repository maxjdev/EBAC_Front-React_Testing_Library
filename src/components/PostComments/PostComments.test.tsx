import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Add 2 comments', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('input-textarea'), {
            target: {
                value: 'Tests First Comment'
            }
        });
        fireEvent.click(screen.getByTestId('btn-submit'));

        fireEvent.change(screen.getByTestId('input-textarea'), {
            target: {
                value: 'Tests Second Comment'
            }
        });
        fireEvent.click(screen.getByTestId('btn-submit'));

        const comments = screen.getAllByTestId('comment')
        expect(comments).toHaveLength(2)
    })
});