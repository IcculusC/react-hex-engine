import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../../src/Layout';
import Hexagon from '../../src/Hexagon/Hexagon';
import GridGenerator from '../../src/GridGenerator';

test('Layout should render correctly with default props', () => {
  const tree = renderer.create(
    <Layout
      className={'test1'}
    >
      <div>child</div>
    </Layout>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Layout should render correctly with custom props', () => {
  const tree = renderer.create(
    <Layout
      className={'test2'}
      flat={false}
      origin={{ x: 2, y: 4 }}
      size={{ x: 12, y: 14 }}
      spacing={2.0}
    >
      <div>child</div>
    </Layout>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Layout should only render hexagons in bounds', () => {
  const tree = renderer.create(
    <Layout
      viewBox={{ x: -50, y: -50, width: 100, height: 100 }}
      className={'test2'}
      flat={false}
      origin={{ x: 0, y: 0 }}
      size={{ x: 12, y: 14 }}
      spacing={2.0}
    >
      <Hexagon q={0} r={0} s={0} />
      <Hexagon q={500} r={500} s={500} />
    </Layout>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Layout should only render hexagons in bounds again', () => {
  const tree = renderer.create(
    <Layout
      viewBox={{ x: -50, y: -50, width: 100, height: 100 }}
      className={'test2'}
      flat={false}
      origin={{ x: 0, y: 0 }}
      size={{ x: 12, y: 14 }}
      spacing={2.0}
    >
      {GridGenerator.hexagon(10).map(hex => <Hexagon {...hex} />)};
    </Layout>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

