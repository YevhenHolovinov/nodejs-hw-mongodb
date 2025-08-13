import { Contact } from '../models/contacts.js';

export async function getContacts(page, perPage, sortBy, sortOrder, userId) {
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const contactsQuery = Contact.find({ userId });

  const [totalItems, contacts] = await Promise.all([
    Contact.find().merge(contactsQuery).countDocuments(),
    contactsQuery
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(perPage),
  ]);

  const totalPages = Math.ceil(totalItems / perPage);

  return {
    data: contacts,
    page,
    perPage,
    totalItems,
    totalPages,
    hasNextPage: totalPages > page,
    hasPreviousPage: page > 1,
  };
}

export function getContactById(contactId, userId) {
  return Contact.findOne({ _id: contactId, userId });
}

export function createContact(payload) {
  return Contact.create(payload);
}

export function deleteContact(contactId) {
  return Contact.findOneAndDelete(contactId);
}

export function updateContact(contactId, payload) {
  return Contact.findOneAndUpdate(contactId, payload, { new: true });
}

export async function replaceContact(contactId, payload) {
  const result = Contact.findOneAndUpdate(contactId, payload, {
    new: true,
    upsert: true,
    includeResultMetadata: true,
  });

  return {
    value: result.value,
    updatedExisting: result.lastErrorObject.updatedExisting,
  };
}
