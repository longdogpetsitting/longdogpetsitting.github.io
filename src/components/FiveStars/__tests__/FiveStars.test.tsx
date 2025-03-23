import { render } from '@testing-library/react';
import { FiveStars } from '../FiveStars';

describe('<FiveStars /> Component', () => {
  it('should render five stars svg component', () => {
    const { container } = render(<FiveStars />);
    expect(container).toMatchSnapshot();
  });
});
