import React from 'react';

type Props = {
  value:any;
};

export class TagPreview extends React.Component<Props, {}> {
  render() {
    return React.createElement('ul', {
      className: "tags",
    },
      this.props.value.map(function(value: any, index: number) {
        return React.createElement('li', {
          className: "tags",
          key: index
        }, value)
      })
    )
  };
}
export default TagPreview
