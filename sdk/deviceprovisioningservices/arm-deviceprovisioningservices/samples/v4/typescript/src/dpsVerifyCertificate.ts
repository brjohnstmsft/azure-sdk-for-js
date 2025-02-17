/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.
 *
 * @summary Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2021-10-15/examples/DPSVerifyCertificate.json
 */
import {
  VerificationCodeRequest,
  IotDpsClient
} from "@azure/arm-deviceprovisioningservices";
import { DefaultAzureCredential } from "@azure/identity";

async function dpsVerifyCertificate() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const certificateName = "cert";
  const ifMatch = "AAAAAAAADGk=";
  const resourceGroupName = "myResourceGroup";
  const provisioningServiceName = "myFirstProvisioningService";
  const request: VerificationCodeRequest = {
    certificate: "#####################################"
  };
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.dpsCertificate.verifyCertificate(
    certificateName,
    ifMatch,
    resourceGroupName,
    provisioningServiceName,
    request
  );
  console.log(result);
}

dpsVerifyCertificate().catch(console.error);
