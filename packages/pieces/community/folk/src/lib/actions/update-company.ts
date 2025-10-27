import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { folkAuth } from '../..';
import { folkApiRequest } from '../common';

export const updateCompany = createAction({
  name: 'update_company',
  auth: folkAuth,
  displayName: 'Update Company',
  description: 'Updates a company contact in a folk group',
  props: {
    contactId: Property.ShortText({
      displayName: 'Contact ID',
      description: 'The ID of the company contact to update',
      required: true,
    }),
    name: Property.ShortText({
      displayName: 'Company Name',
      description: 'The name of the company',
      required: false,
    }),
    domain: Property.ShortText({
      displayName: 'Domain',
      description: 'The company website domain',
      required: false,
    }),
    email: Property.ShortText({
      displayName: 'Email',
      description: 'Company email address',
      required: false,
    }),
  },
  async run(context) {
    const { contactId, name, domain, email } = context.propsValue;

    const body: any = {};

    if (name) body.name = name;
    if (domain) body.domain = domain;
    if (email) body.email = email;

    const response = await folkApiRequest(
      context.auth,
      HttpMethod.PATCH,
      `/contacts/${contactId}`,
      body
    );

    return response;
  },
});
