// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //contentRoot: "https://nerdinterpreter.co.ke/wp-json/wp/v2"
  contentful: {
    spaceId: 'y5dr7stvmq2y',
    accessToken: 'rWTP50e_Omu-9hhwATMQIYRd0V2gKly6jj67woORcjU',
    previewToken: 'FRRuU_5dI8qOWY72ruzVyx-iEC2AGz5PMIni7t6n8Q0' // optional, for preview
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
