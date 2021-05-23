import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './button';

const defaultProps = {
    onClick: jest.fn()
  }

const testProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'klass'
  }
  

describe('Button Component -', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Default</Button>);
        const element = wrapper.getByText('Default') as HTMLElement;
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn');

        // fireEvent.click(element);
        // expect(defaultProps.onClick).toHaveBeenCalled();
    })
})