import * as React from 'react';
import * as classnames from 'classnames';

export interface IHorizontalMenuProps {
    children: React.ReactNode;
    className?: string;
}

interface ChildElementProps {
    className: string;
}

export function HorizontalMenu(props: IHorizontalMenuProps): JSX.Element {
    return (
        <menu className={ classnames('horizontal-menu', props.className) }>
            {
                React.Children.map(props.children, (child: React.ReactChild, index: number) => {
                    let childProps: object | ChildElementProps = {};
                    if (React.isValidElement<ChildElementProps>(child)) {
                        childProps = {
                            ...child.props,
                            className: classnames('horizontal-menu__item', child.props.className)
                        };
                    }

                    return React.cloneElement(
                        child as React.ReactElement<ChildElementProps>,
                        childProps
                    );
                })
            }
        </menu>
    );
}
