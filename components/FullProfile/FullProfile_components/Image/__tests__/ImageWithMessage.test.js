import React from 'react';
import renderer from 'react-test-renderer';
import ImageWithMessage from '../ImageWithMessage';

jest.mock('react-native-vector-icons', () => 'Icon');

describe('<ImageWithMessage />', () => {
  it('renders enabled ImageWithMessage', () => {
    const tree = renderer.create(<ImageWithMessage />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders <ImageWithMessage /> with custom props', () => {
    const tree = renderer
      .create(
        <ImageWithMessage
          image={
            'https://res.cloudinary.com/personaluse1234/image/upload/v1643742678/Naire/Genevieve%20Hannelius/nbvmnmbn3333_1_yw6lh7.jpg'
          }
          showMessage={true}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
