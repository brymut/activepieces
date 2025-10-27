import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { folkAuth } from '../..';

export const personCustomFieldUpdated = createTrigger({
  auth: folkAuth,
  name: 'person_custom_field_updated',
  displayName: 'Person Custom Field Updated',
  description: 'Triggers when a person custom field (e.g., tag, status, text, assignee) is updated',
  props: {},
  sampleData: {
    contactId: 'person_123456',
    fullName: 'John Doe',
    fieldName: 'status',
    oldValue: 'lead',
    newValue: 'qualified',
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
