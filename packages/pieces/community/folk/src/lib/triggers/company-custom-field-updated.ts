import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { folkAuth } from '../..';

export const companyCustomFieldUpdated = createTrigger({
  auth: folkAuth,
  name: 'company_custom_field_updated',
  displayName: 'Company Custom Field Updated',
  description: 'Triggers when a company custom field (e.g., tag, status, text, assignee) is updated',
  props: {},
  sampleData: {
    contactId: 'comp_123456',
    name: 'Acme Corporation',
    fieldName: 'status',
    oldValue: 'prospect',
    newValue: 'customer',
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
