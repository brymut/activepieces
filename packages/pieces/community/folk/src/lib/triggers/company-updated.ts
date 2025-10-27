import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { folkAuth } from '../..';

export const companyUpdated = createTrigger({
  auth: folkAuth,
  name: 'company_updated',
  displayName: 'Company Updated',
  description: 'Triggers when a company\'s basic field (e.g., name, email, or URL) in a group is updated',
  props: {},
  sampleData: {
    contactId: 'comp_123456',
    name: 'Acme Corporation',
    domain: 'acme.com',
    email: 'contact@acme.com',
    updatedAt: '2024-01-01T00:00:00Z',
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
