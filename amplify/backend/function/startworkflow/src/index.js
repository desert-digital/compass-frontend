/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    // Set the AWS region
    AWS.config.update({ region: 'us-west-1' });

    // Create an EventBridge instance
    const eventBridge = new AWS.EventBridge();

    // Define the event details
    const eventDetails = {
        Entries: [
            {
                Source: 'custom.compass',
                DetailType: 'workflow',
                Detail: JSON.stringify({ workflow: event }),
                EventBusName: 'default', // Use 'default' for the default event bus
            },
        ],
    };

    try {
        // Put events to the event bus
        const response = await eventBridge.putEvents(eventDetails).promise();
        console.log('Event created successfully:', response);
        return { statusCode: 200, body: JSON.stringify('Event created successfully') };
    } catch (error) {
        console.error('Error creating event:', error);
        return { statusCode: 500, body: JSON.stringify('Error creating event') };
    }
};
