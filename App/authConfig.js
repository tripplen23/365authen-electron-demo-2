const { LogLevel } = require("@azure/msal-node");

const AAD_ENDPOINT_HOST = "Enter_the_Cloud_Instance_Id_Here"; // include the trailing slash

const msalConfig = {
    auth: {
        clientId: "5cb0dfd4-c8ac-4f02-a889-d99c5a2c13fb",
        authority: "https://login.microsoftonline.com/35432d15-6c0f-45ae-bc89-338b00bebbba",
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: LogLevel.Verbose,
        },
    },
};

const GRAPH_ENDPOINT_HOST = "Enter_the_Graph_Endpoint_Here"; // include the trailing slash

const protectedResources = {
    graphMe: {
        endpoint: `${GRAPH_ENDPOINT_HOST}v1.0/me`,
        scopes: ["User.Read"],
    }
};


module.exports = {
    msalConfig: msalConfig,
    protectedResources: protectedResources,
};