/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { SearchManagementClient } from "../src/searchManagementClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Search test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: SearchManagementClient;
  let location: string;
  let resourceGroup: string;
  let searchServiceName: string;
  let keyname: string;
  let keyvalue: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new SearchManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    searchServiceName = "myjssearchservicexxx"
    keyname = "testjskey";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("services create test", async function () {
    const res = await client.services.beginCreateOrUpdateAndWait(resourceGroup, searchServiceName, {
      location: location,
      replicaCount: 1,
      partitionCount: 1,
      hostingMode: "default",
      sku: {
        name: "standard"
      }
    });
    assert.equal(res.name, searchServiceName);
  });

  it("services get test", async function () {
    const res = await client.services.get(resourceGroup, searchServiceName);
    assert.equal(res.name, searchServiceName);
  });

  it("services list test", async function () {
    const resArray = new Array();
    for await (let item of client.services.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("queryKeys create test", async function () {
    const res = await client.queryKeys.create(resourceGroup, searchServiceName, keyname);
    keyvalue = res.key || "";
    assert.equal(res.name, keyname);
  });

  it("queryKeys list test", async function () {
    const resArray = new Array();
    for await (let item of client.queryKeys.listBySearchService(resourceGroup, searchServiceName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 2);
  });

  it("queryKeys delete test", async function () {
    let resArray = new Array();
    for await (let item of client.queryKeys.listBySearchService(resourceGroup, searchServiceName)) {
      resArray.push(item);
    }
    const len = resArray.length;
    // At least one query key
    assert.isTrue(len > 0);
    // Delete the query key by key not by keyname
    await client.queryKeys.delete(resourceGroup, searchServiceName, keyvalue);
    resArray = new Array();
    for await (let item of client.queryKeys.listBySearchService(resourceGroup, searchServiceName)) {
      resArray.push(item);
    }
    // The key number is reduced to len - 1
    assert.equal(resArray.length, len - 1);
  });

  it("services delete test", async function () {
    await client.services.delete(resourceGroup, searchServiceName);
    const resArray = new Array();
    for await (let item of client.services.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
