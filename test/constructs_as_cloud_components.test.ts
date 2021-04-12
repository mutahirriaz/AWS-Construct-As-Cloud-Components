import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ConstructsAsCloudComponents from '../lib/constructs_as_cloud_components-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ConstructsAsCloudComponents.ConstructsAsCloudComponentsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
