import React from 'react'
import styles from './Square.less'

interface Props {
  value: string,
  onClick: () => void
}

export default class Square extends React.Component<Props> {
  render() {
    return (
      <button className={styles.square} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}