/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the deployment status for an app (or deployment slot, if specified).
 *
 * @summary Gets the deployment status for an app (or deployment slot, if specified).
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/GetSiteDeploymentStatus.json
 */
async function getDeploymentStatus() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testSite";
  const deploymentStatusId = "eacfd68b-3bbd-4ad9-99c5-98614d89c8e5";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginGetProductionSiteDeploymentStatusAndWait(
    resourceGroupName,
    name,
    deploymentStatusId
  );
  console.log(result);
}

getDeploymentStatus().catch(console.error);
