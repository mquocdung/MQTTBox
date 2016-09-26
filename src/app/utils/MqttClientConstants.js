class MqttClientConstants {}

//ACTIONS
MqttClientConstants.ACTION_SAVE_MQTT_CLIENT = 'ACTION_SAVE_MQTT_CLIENT';
MqttClientConstants.ACTION_DELETE_MQTT_CLIENT = 'ACTION_DELETE_MQTT_CLIENT';
MqttClientConstants.ACTION_SAVE_MQTT_CLIENT_PUBLISHER = 'ACTION_SAVE_MQTT_CLIENT_PUBLISHER';
MqttClientConstants.ACTION_SAVE_MQTT_CLIENT_SUBSCRIBER = 'ACTION_SAVE_MQTT_CLIENT_SUBSCRIBER';
MqttClientConstants.ACTION_DELETE_MQTT_CLIENT_PUBLISHER = 'ACTION_DELETE_MQTT_CLIENT_PUBLISHER';
MqttClientConstants.ACTION_DELETE_MQTT_CLIENT_SUBSCRIBER = 'ACTION_DELETE_MQTT_CLIENT_SUBSCRIBER';
MqttClientConstants.ACTION_MQTT_CLIENT_CONNECT = 'ACTION_MQTT_CLIENT_CONNECT';
MqttClientConstants.ACTION_MQTT_CLIENT_DISCONNECT = 'ACTION_MQTT_CLIENT_DISCONNECT';
MqttClientConstants.ACTION_PUBLISH_MESSAGE = 'ACTION_PUBLISH_MESSAGE';
MqttClientConstants.ACTION_SUBSCRIBE_TO_TOPIC = 'ACTION_SUBSCRIBE_TO_TOPIC';
MqttClientConstants.ACTION_UN_SUBSCRIBE_TO_TOPIC = 'ACTION_UN_SUBSCRIBE_TO_TOPIC';
//EVENTS
MqttClientConstants.EVENT_MQTT_CLIENT_DATA_CHANGED = 'EVENT_MQTT_CLIENT_DATA_CHANGED';
MqttClientConstants.EVENT_MQTT_CLIENT_CONN_STATE_CHANGED = 'EVENT_MQTT_CLIENT_CONN_STATE_CHANGED';
MqttClientConstants.EVENT_MQTT_CLIENT_SUBSCRIBED_DATA_RECIEVED = 'EVENT_MQTT_CLIENT_SUBSCRIBED_DATA_RECIEVED';
MqttClientConstants.EVENT_MQTT_CLIENT_CONNECTION_CLOSED = 'EVENT_MQTT_CLIENT_CONNECTION_CLOSED';

//CONSTANTS
MqttClientConstants.CHANNEL_MQTT_CLIENTS = 'CHANNEL_MQTT_CLIENTS';
MqttClientConstants.CONNECTION_STATE_CONNECTED = 'CONNECTED';
MqttClientConstants.CONNECTION_STATE_DIS_CONNECTED = 'DIS_CONNECTED';
MqttClientConstants.CONNECTION_STATE_ERROR = 'CONNECT_ERROR';

module.exports = MqttClientConstants;