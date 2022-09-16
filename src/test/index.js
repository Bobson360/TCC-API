import {ApplicationClient, ApplicationConfig} from '@wiotp/sdk';

let appConfig = ApplicationConfig.parseEnvVars();
let appClient = new ApplicationClient(appConfig);
appClient.connect();
// Do stuff
appClient.disconnect();