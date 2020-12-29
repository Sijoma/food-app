import { render, screen } from '@testing-library/react';
import Tagliste from '../components/Tagliste'


test('renders tagliste', () => {
    const tagValue = "test1"
    const tagValue2 = "test2"

    render(<Tagliste
        tags={[tagValue, tagValue2]}
        />);
    const tagElement = screen.getByText(tagValue)
    const tagElement2 = screen.getByText(tagValue2)
    expect(tagElement).toBeInTheDocument()
    expect(tagElement2).toBeInTheDocument()
});