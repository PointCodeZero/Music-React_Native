import React from 'react';
import { Card, Text, Button, Icon } from 'react-native-elements';

export class CardList extends React.Component {
  renderData() {
    const { data, imageKey, titleKey, buttonText } = this.props;
    return data.map((item, index) => {
      return (
        <Card
          key={index}
          title={item[titleKey]}
          image={{ uri: item[imageKey] }}
        >
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            backgroundColor="#03A9F4"
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title={buttonText}
          />
        </Card>
      );
    });
  }

  render() {
    return this.renderData();
  }
}
