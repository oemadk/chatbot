import * as config from "config";

interface IConfig {
    homeserverUrl: "https://yashfiichat.eastus.cloudapp.azure.com";
    pantalaimon: {
        use: false;
        username: 'drbot';
        password: '12345678';
    };
    accessToken: "syt_ZHJib3Q_WbpKtNthdHDXZyWlnYwC_2G0ZcG";
    autoJoin: true;
    dataPath: "storage";
}

export default <IConfig>config;
