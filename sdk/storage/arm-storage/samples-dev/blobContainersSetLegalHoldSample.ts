/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { LegalHold, StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 *
 * @summary Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2022-09-01/examples/BlobContainersSetLegalHold.json
 */
async function setLegalHoldContainers() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res4303";
  const accountName = "sto7280";
  const containerName = "container8723";
  const legalHold: LegalHold = { tags: ["tag1", "tag2", "tag3"] };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.setLegalHold(
    resourceGroupName,
    accountName,
    containerName,
    legalHold
  );
  console.log(result);
}

setLegalHoldContainers().catch(console.error);

/**
 * This sample demonstrates how to Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 *
 * @summary Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2022-09-01/examples/BlobContainersSetLegalHoldAllowProtectedAppendWritesAll.json
 */
async function setLegalHoldContainersWithAllowProtectedAppendWritesAll() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res4303";
  const accountName = "sto7280";
  const containerName = "container8723";
  const legalHold: LegalHold = {
    allowProtectedAppendWritesAll: true,
    tags: ["tag1", "tag2", "tag3"]
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.blobContainers.setLegalHold(
    resourceGroupName,
    accountName,
    containerName,
    legalHold
  );
  console.log(result);
}

setLegalHoldContainersWithAllowProtectedAppendWritesAll().catch(console.error);
