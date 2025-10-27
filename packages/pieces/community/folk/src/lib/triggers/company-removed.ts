import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { folkAuth } from '../..';

export const companyRemoved = createTrigger({
  auth: folkAuth,
  name: 'company_removed',
  displayName: 'Company Removed',
  description: 'Triggers when a company is deleted from the workspace or removed from a group',
  props: {},
  sampleData: {
    contactId: 'comp_123456',
    name: 'Acme Corporation',
    removedAt: '2024-01-01T00:00:00Z',
  },
  type: TriggerStrategy.WEBHOOK,
  async onEnable(context) {
    // Webhook registration would happen here
  },
  async onDisable(context) {
    // Webhook deregistration would happen here
  },
  async run(context) {
    return [context.payload.body];
  },
});
