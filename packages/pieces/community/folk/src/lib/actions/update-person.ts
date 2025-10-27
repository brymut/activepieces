import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { folkAuth } from '../..';
import { folkApiRequest } from '../common';

export const updatePerson = createAction({
  name: 'update_person',
  auth: folkAuth,
  displayName: 'Update Person',
  description: 'Updates a person contact in a folk group',
  props: {
    contactId: Property.ShortText({
      displayName: 'Contact ID',
      description: 'The ID of the person contact to update',
      required: true,
    }),
    fullName: Property.ShortText({
      displayName: 'Full Name',
      description: 'The full name of the person',
      required: false,
    }),
    email: Property.ShortText({
      displayName: 'Email',
      description: 'Person email address',
      required: false,
    }),
    jobTitle: Property.ShortText({
      displayName: 'Job Title',
      description: 'The person\'s job title',
      required: false,
    }),
    phone: Property.ShortText({
      displayName: 'Phone',
      description: 'Phone number',
      required: false,
    }),
  },
  async run(context) {
    const { contactId, fullName, email, jobTitle, phone } = context.propsValue;

    const body: any = {};

    if (fullName) body.fullName = fullName;
    if (email) body.email = email;
    if (jobTitle) body.jobTitle = jobTitle;
    if (phone) body.phone = phone;

    const response = await folkApiRequest(
      context.auth,
      HttpMethod.PATCH,
      `/contacts/${contactId}`,
      body
    );

    return response;
  },
});
