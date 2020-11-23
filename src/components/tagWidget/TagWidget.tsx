import React from 'react';


interface Props {
  field:any;
  onChange: (x: any) => any;
  value: any;
  forID: any;
  classNameWrapper: any;
}

export class TagControl extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  handleChange = (e: any) => {
    const separator = this.props.field.get('separator', ', ')
    this.props.onChange(e.target.value.split(separator).map((e: any) => e.trim()));
  }

  render() {
      const separator = this.props.field.get('separator', ', ');
      var value = this.props.value;
      return React.createElement('input', {
        id: this.props.forID,
        className: this.props.classNameWrapper,
        type: 'text',
        value: value ? value.join(separator) : '',
        onChange: this.handleChange,
      });
  }
}

export default TagControl