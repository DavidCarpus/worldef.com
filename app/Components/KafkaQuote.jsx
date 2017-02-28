import React from 'react';
import styles from './KafkaQuote.css';


export default class KafkaQuote extends React.Component {
render(){
    return (
        <div className={ styles.kafkaQuote }>
				<quote >"By believing passionately in something that still does not exist, <strong>WE create it"</strong>
				</quote>
				<div >
					<img
                        src="images/FranzKafkasSignature.png"
                        alt="Franz_Kafka's signature"
                        width="202" height="75" />
                </div>
		</div>
    )
    }
}
