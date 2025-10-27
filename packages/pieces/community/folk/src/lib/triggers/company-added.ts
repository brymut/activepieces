import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { folkAuth } from '../..';

export const companyAdded = createTrigger({
  auth: folkAuth,
  name: 'company_added',
  displayName: 'Company Added',
  description: 'Triggers when a new company is created or added to a group',
  props: {},
  sampleData: {
    contactId: 'comp_123456',
    name: 'Acme Corporation',
    domain: 'acme.com',
    email: 'contact@acme.com',
    createdAt: '2024-01-01T00:00:00Z',
  },
  type: TriggerStrategy.WEBHOOK,
  async onEnable(context) {
    // Webhook registration would happen here
    // This is a placeholder - actual implementation depends on Folk's webhook API
  },
  async onDisable(context) {
    // Webhook deregistration would happen here
  },
  async run(context) {
    return [context.payload.body];
  },
});
