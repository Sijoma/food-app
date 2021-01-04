import { render, screen } from '@testing-library/react';
import Taglist from '../components/Taglist'


test('renders tagliste', () => {
    const tagValue = {id: 1, title: 'test1title', description: 'test1desc'}
    const tagValue2 = {id: 2, title: 'test2title', description: 'test12esc'}

    render(<Taglist
        tags={[tagValue, tagValue2]}
        />);
    const tagElement = screen.getByText(tagValue.title)
    const tagElement2 = screen.getByText(tagValue2.title)
    expect(tagElement).toBeInTheDocument()
    expect(tagElement2).toBeInTheDocument()
});