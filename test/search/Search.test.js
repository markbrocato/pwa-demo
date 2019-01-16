import React, { Component } from 'react';
import { mount } from 'enzyme'
import Search from '../../src/search/Search'

describe('Search', () => {
  it('should render the search view', () => {
    expect(mount(<Search/>)).toMatchSnapshot()
  })
})